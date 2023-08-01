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
exports.ProjectEntity = void 0;
const error_notfound_1 = require("../errors/error.notfound");
const project_repo_1 = require("./project.repo");
const error_forbidden_1 = require("../errors/error.forbidden");
class ProjectEntity {
    constructor(project) {
        this.id = project.id;
        this.created = project.created;
        this.title = project.title;
    }
    static findUserProjects(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield project_repo_1.ProjectRepo.findUserProjects(userId);
            return projects;
        });
    }
    static findUserProjectById(userId, projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield project_repo_1.ProjectRepo.findOne(userId, projectId);
            if (!project)
                throw new error_notfound_1.ErrorNotFound('Project not found');
            return new ProjectEntity(project);
        });
    }
    static delete(userId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield project_repo_1.ProjectRepo.findOne(userId, id);
            if (!project)
                throw new error_notfound_1.ErrorNotFound('Project not found');
            yield project_repo_1.ProjectRepo.delete(id);
            return;
        });
    }
    static create(userId, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield project_repo_1.ProjectRepo.create(userId, title);
            return projects;
        });
    }
    static hasAccess(userId, projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userHasAcces = project_repo_1.ProjectRepo.findOne(userId, projectId);
            if (!userHasAcces)
                throw new error_forbidden_1.ErrorForbiden();
        });
    }
}
exports.ProjectEntity = ProjectEntity;
