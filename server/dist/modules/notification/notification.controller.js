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
exports.notificationController = void 0;
const project_entity_1 = require("../project/project.entity");
const notification_entity_1 = require("./notification.entity");
class NotificationController {
    onGet(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectId = request.params.projectId;
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, projectId);
                const notifications = yield notification_entity_1.NotificationEntity.onGet(request.user.id, projectId);
                return { notifications };
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
                const { projectId, level } = request.body;
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, projectId);
                const notification = yield notification_entity_1.NotificationEntity.onCreate(request.user.id, projectId, level);
                return { notification };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    onDelete(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { notificationId, projectId } = request.params;
                yield project_entity_1.ProjectEntity.hasAccess(request.user.id, projectId);
                yield notification_entity_1.NotificationEntity.onDelete(notificationId);
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
}
exports.notificationController = new NotificationController();
