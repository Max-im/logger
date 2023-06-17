import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '@prisma/client';
import { UserEntity } from './user.entity';
import { IAuth, IAuthResponse } from './user.types';

class UserController {
  async getData(request: FastifyRequest, reply: FastifyReply): Promise<{user: User}> {
    try {
      const user = await UserEntity.findById(request.user.id);

      return { user };
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }

  async auth(request: FastifyRequest<{Body: IAuth;}>, reply: FastifyReply): Promise<IAuthResponse> {
    try {
      const { photo, email, name } = request.body;
      
      const {statusCode, user} = await UserEntity.auth({ photo, email, name });
      const token = await reply.jwtSign({ id: user.id, name: user.name, photo: user.photo, role: user.roleId });
      
      return reply.code(statusCode).send({ user, token });
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
}

export const userController = new UserController();