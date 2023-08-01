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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusController = void 0;
const node_os_1 = __importDefault(require("node:os"));
const status_repo_1 = require("./status.repo");
class StatusController {
    getStatus() {
        return { staus: 'up' };
    }
    getInfo(_, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    status: 'up',
                    startedAt: new Date(),
                    node: {
                        version: process.version,
                        memoryUsage: Math.round(process.memoryUsage().rss / 1024 / 1024) + 'M',
                        uptime: process.uptime(),
                    },
                    system: {
                        loadavg: node_os_1.default.loadavg(),
                        freeMemory: Math.round(node_os_1.default.freemem() / 1024 / 1024) + 'M',
                    },
                    env: process.env.NODE_ENV,
                    hostname: node_os_1.default.hostname()
                };
                return data;
            }
            catch (err) {
                return reply.code(500).send(err);
            }
        });
    }
    getStat(_, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield status_repo_1.StatusRepo.getProjectCount();
                const users = yield status_repo_1.StatusRepo.getUsersCount();
                return { projects, users };
            }
            catch (err) {
                return reply.code(500).send(err);
            }
        });
    }
}
exports.statusController = new StatusController();
