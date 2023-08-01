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
const log_controller_1 = require("./log.controller");
function logRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        const onRequest = { onRequest: [server.registredUser] };
        server.post('/', log_controller_1.logController.onCreate);
        server.get('/:projectId', onRequest, log_controller_1.logController.getLogs);
        server.get('/:projectId/log/:logId', onRequest, log_controller_1.logController.logItem);
        server.get('/:projectId/info', onRequest, log_controller_1.logController.getInfo);
        server.get('/:projectId/:logId', onRequest, log_controller_1.logController.markReadLog);
        server.delete('/:projectId/:logIds', onRequest, log_controller_1.logController.deleteLogs);
    });
}
exports.default = logRoutes;
