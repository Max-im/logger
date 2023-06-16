import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const createProjectSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Invalid Title',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Invalid Description',
  }),
});

const createProjectResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;

export const { schemas: projectSchemas, $ref } = buildJsonSchemas({ 
  createProjectSchema,
  createProjectResponseSchema,
}, { $id: 'ProjectSchema' });