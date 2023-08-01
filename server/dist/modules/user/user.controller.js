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
exports.userController = void 0;
const user_entity_1 = require("./user.entity");
class UserController {
    getData(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_entity_1.UserEntity.findById(request.user.id);
                return { user };
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
    auth(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, email, name } = request.body;
                const { statusCode, user } = yield user_entity_1.UserEntity.auth({ photo, email, name });
                const token = yield reply.jwtSign({
                    id: user.id, name: user.name, photo: user.photo, role: user.roleId, planId: user.planId
                });
                return reply.code(statusCode).send({ user, token });
            }
            catch (err) {
                const code = err.code || 500;
                return reply.code(code).send(err);
            }
        });
    }
}
exports.userController = new UserController();
