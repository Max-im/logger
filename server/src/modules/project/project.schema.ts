import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

/* eslint-disable */
const createProjectSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Invalid Title',
    }),
});
/* eslint-enable */

const createProjectResponseSchema = z.object({
    id: z.string(),
    title: z.string(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;

export const { schemas: projectSchemas, $ref } = buildJsonSchemas({
    createProjectSchema,
    createProjectResponseSchema,
}, { $id: 'ProjectSchema' });
