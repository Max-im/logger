"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logController = void 0;
const project_entity_1 = require("../project/project.entity");
const log_entity_1 = require("./log.entity");
const error_notfound_1 = require("../errors/error.notfound");
const error_forbidden_1 = require("../errors/error.forbidden");
const user_entity_1 = require("../user/user.entity");
const plan_entity_1 = require("../plan/plan.entity");
class LogController {
    getLogs(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skip = Number(request.query.skip) || 0;
                const take = Number(request.query.take) || 20;
                const filter = request.query.filter ? request.query.filter.split(',') : null;
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, request.params.projectId);
                const logs = yield log_entity_1.LogEntity.getLogs(request.params.projectId, skip, take, filter);
                return { logs };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    getInfo(request, reply
    // eslint-disable-next-line
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, request.params.projectId);
                const info = yield log_entity_1.LogEntity.getInfo(request.params.projectId);
                return { info };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    markReadLog(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, request.params.projectId);
                yield log_entity_1.LogEntity.markRead(Number(request.params.logId));
                return;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    deleteLogs(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, request.params.projectId);
                yield log_entity_1.LogEntity.deleteLogs(request.params.logIds);
                return;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    logItem(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, request.params.projectId);
                const log = yield log_entity_1.LogEntity.getLogItem(Number(request.params.logId));
                if (!log)
                    throw new error_notfound_1.ErrorNotFound('Log not found');
                return { log };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    onCreate(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { projectId, userId, value, level } = request.body;
                const project = yield project_entity_1.ProjectEntity.findUserProjectById(userId, projectId);
                if (!project)
                    throw new error_forbidden_1.ErrorForbiden();
                const user = yield user_entity_1.UserEntity.findById(userId);
                const currentPlan = yield plan_entity_1.PlanEntity.onGetById(user.planId);
                const deleteDate = new Date();
                deleteDate.setDate(deleteDate.getDate() + currentPlan.storingDays);
                yield log_entity_1.LogEntity.createLogItem(projectId, value, level, deleteDate);
                return;
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
}
exports.logController = new LogController();
