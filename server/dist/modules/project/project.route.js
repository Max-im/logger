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
const project_controller_1 = require("./project.controller");
const project_schema_1 = require("./project.schema");
const schema = {
    schema: { body: (0, project_schema_1.$ref)('createProjectSchema'), response: { 200: (0, project_schema_1.$ref)('createProjectResponseSchema') } }
};
function projectRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        const onRequest = { onRequest: [server.registredUser] };
        server.post('/', Object.assign(Object.assign({}, schema), onRequest), project_controller_1.projectController.create);
        server.get('/', onRequest, project_controller_1.projectController.getUserProjects);
        server.get('/:id', onRequest, project_controller_1.projectController.getUserProject);
        server.put('/:id', onRequest, project_controller_1.projectController.getUserProjects);
        server.delete('/:id', onRequest, project_controller_1.projectController.delete);
    });
}
exports.default = projectRoutes;
