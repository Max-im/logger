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
exports.SenderRepo = void 0;
const db_1 = require("../../util/db");
const error_database_1 = require("../errors/error.database");
class SenderRepo {
    static getReceivers(logId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.prisma.log.findUnique({
                    where: { id: logId },
                    include: {
                        project: {
                            include: {
                                users: {
                                    include: {
                                        user: {
                                            include: { notifications: true }
                                        }
                                    }
                                }
                            }
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
exports.SenderRepo = SenderRepo;
