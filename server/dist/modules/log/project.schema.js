"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.projectSchemas = void 0;
const zod_1 = require("zod");
const fastify_zod_1 = require("fastify-zod");
/* eslint-disable */
const createProjectSchema = zod_1.z.object({
    title: zod_1.z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Invalid Title',
    }),
});
/* eslint-enable */
const createProjectResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    createProjectSchema,
    createProjectResponseSchema,
}, { $id: 'ProjectSchema' }), exports.projectSchemas = _a.schemas, exports.$ref = _a.$ref;
