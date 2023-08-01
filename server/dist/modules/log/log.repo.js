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
exports.LogRepo = void 0;
const db_1 = require("../../util/db");
const error_database_1 = require("../errors/error.database");
class LogRepo {
    static getProjectLogs(projectId, skip, take) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.findMany({
                    where: { projectId },
                    take,
                    skip,
                    orderBy: { id: 'desc' }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static getProjectFiltredLogs(projectId, skip, take, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.findMany({
                    // @ts-ignore
                    where: { projectId, level: { notIn: filter } },
                    take,
                    skip,
                    orderBy: { id: 'desc' }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static getProjectLogsInfo(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.groupBy({
                    by: ['level'],
                    where: { projectId },
                    _count: {
                        level: true
                    }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static getLogItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.findUnique({ where: { id } });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static markRead(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.update({
                    where: { id },
                    data: { opened: true }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static create(projectId, value, level, deleteDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.create({
                    data: {
                        // @ts-ignore
                        level,
                        value,
                        project: { connect: { id: projectId } },
                        deleteDate
                    }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static deleteLogs(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.deleteMany({
                    where: {
                        id: { in: ids }
                    }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static deleteExpired() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.deleteMany({
                    where: {
                        deleteDate: { lte: new Date() }
                    }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
}
exports.LogRepo = LogRepo;
