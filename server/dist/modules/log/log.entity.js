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
exports.LogEntity = void 0;
const client_1 = require("@prisma/client");
const log_repo_1 = require("./log.repo");
class LogEntity {
    constructor(log) {
        this.id = log.id;
        this.value = log.value;
        this.level = log.level;
        this.opened = log.opened;
        this.deleteDate = log.deleteDate;
        this.projectId = log.projectId;
        this.created = log.created;
    }
    static getLogs(projectId, skip, take, filterArr) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkedFilter = filterArr && filterArr
                .map(level => level.toUpperCase())
                .filter(level => level in client_1.LogLevel);
            if (checkedFilter) {
                return log_repo_1.LogRepo.getProjectFiltredLogs(projectId, skip, take, checkedFilter);
            }
            return log_repo_1.LogRepo.getProjectLogs(projectId, skip, take);
        });
    }
    static getInfo(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return log_repo_1.LogRepo.getProjectLogsInfo(projectId);
        });
    }
    static markRead(logId) {
        return __awaiter(this, void 0, void 0, function* () {
            return log_repo_1.LogRepo.markRead(logId);
        });
    }
    static deleteLogs(logIdStr) {
        return __awaiter(this, void 0, void 0, function* () {
            const logIds = logIdStr.split(',').map(id => Number(id));
            yield log_repo_1.LogRepo.deleteLogs(logIds);
        });
    }
    static getLogItem(logIdStr) {
        return __awaiter(this, void 0, void 0, function* () {
            return log_repo_1.LogRepo.getLogItem(logIdStr);
        });
    }
    static createLogItem(projectId, value, level, deleteDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return log_repo_1.LogRepo.create(projectId, value, level, deleteDate);
        });
    }
}
exports.LogEntity = LogEntity;
