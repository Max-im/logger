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
exports.UserRepo = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("../../util/db");
const error_usernotfound_1 = require("../errors/error.usernotfound");
const error_database_1 = require("../errors/error.database");
class UserRepo {
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.user.findUniqueOrThrow({ where: { id }, include: { role: true, plan: true } });
            }
            catch (err) {
                if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    throw new error_usernotfound_1.ErrorUserNotFound();
                }
                throw err;
            }
        });
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.user.findUnique({ where: { email }, include: { role: true, plan: true } });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err.message);
            }
        });
    }
    static create({ email, name, photo }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.user.create({
                    data: {
                        email, name, photo, projects: {},
                        plan: { connect: { name: client_1.PlanTypes.FREE } },
                        role: { connect: { type: client_1.RoleTypes.USER } }
                    },
                    include: { role: true, plan: true }
                });
            }
            catch (err) {
                throw new error_database_1.ErrorDatabase(err.message);
            }
        });
    }
}
exports.UserRepo = UserRepo;
