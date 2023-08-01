"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.userSchemas = void 0;
const zod_1 = require("zod");
const fastify_zod_1 = require("fastify-zod");
/* eslint-disable */
const core = {
    email: zod_1.z
        .string({
        required_error: 'Email is required',
        invalid_type_error: 'Invalid Email',
    })
        .email(),
    name: zod_1.z.string(),
    photo: zod_1.z.string(),
};
/* eslint-enable */
const authSchema = zod_1.z.object(Object.assign({}, core));
const authResponseSchema = zod_1.z.object({
    user: zod_1.z.object(Object.assign(Object.assign({ id: zod_1.z.string() }, core), { roleId: zod_1.z.number(), planId: zod_1.z.number() })),
    token: zod_1.z.string(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({ authSchema, authResponseSchema }, { $id: 'UserSchema' }), exports.userSchemas = _a.schemas, exports.$ref = _a.$ref;
