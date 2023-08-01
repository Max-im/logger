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
exports.UserEntity = void 0;
const user_repo_1 = require("./user.repo");
class UserEntity {
    constructor(user) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.photo = user.photo;
        this.roleId = user.roleId;
        this.registred = user.registred;
        this.planId = user.planId;
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repo_1.UserRepo.findById(id);
            return new UserEntity(user);
        });
    }
    static auth(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            let userItem = yield user_repo_1.UserRepo.findByEmail(userData.email);
            const statusCode = userItem ? 200 : 201;
            if (!userItem) {
                userItem = yield user_repo_1.UserRepo.create(userData);
            }
            const user = new UserEntity(userItem);
            return { statusCode, user };
        });
    }
}
exports.UserEntity = UserEntity;
