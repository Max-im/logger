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
exports.ProjectRepo = void 0;
const db_1 = require("../../util/db");
const error_database_1 = require("../errors/error.database");
class ProjectRepo {
    static findUserProjects(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.project.findMany({ where: { users: { every: { userId } } } });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static findOne(userId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.project.findFirst({ where: { id, users: { some: { userId } } } });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.project.delete({ where: { id } });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
    static create(userId, title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.project.create({
                    data: {
                        title,
                        users: {
                            create: [{ userId }]
                        }
                    }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err);
            }
        });
    }
}
exports.ProjectRepo = ProjectRepo;
