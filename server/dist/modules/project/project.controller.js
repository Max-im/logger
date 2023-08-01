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
exports.projectController = void 0;
const project_entity_1 = require("./project.entity");
class ProjectController {
    getUserProjects(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield project_entity_1.ProjectEntity.findUserProjects(request.user.id);
                return { projects };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    getUserProject(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = yield project_entity_1.ProjectEntity.findUserProjectById(request.user.id, request.params.id);
                return { project };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    create(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = request.body;
                const project = yield project_entity_1.ProjectEntity.create(request.user.id, title);
                return reply.code(201).send({ project });
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    delete(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield project_entity_1.ProjectEntity.delete(request.user.id, request.params.id);
                return reply.code(200).send();
            }
            catch (err) {
                const code = err.code || 500;
                console.log(err.message);
                return reply.code(code).send(err);
            }
        });
    }
}
exports.projectController = new ProjectController();
