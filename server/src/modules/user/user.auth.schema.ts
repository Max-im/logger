import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const core = {
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid Email',
    })
    .email(),
  name: z.string(),
  photo: z.string(),
};

const authSchema = z.object({
  ...core,
});

const authResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    ...core,
    roleId: z.number()
  }),
  token: z.string(),
});

export type CreateUserInput = z.infer<typeof authSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({ authSchema, authResponseSchema }, { $id: 'UserSchema' });
