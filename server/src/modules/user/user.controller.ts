import { FastifyReply, FastifyRequest } from 'fastify';
import { UserEntity } from './user.entity';
import { IAuth, IAuthResponse, IUser } from './user.types';

class UserController {
  async getData(request: FastifyRequest, reply: FastifyReply): Promise<{user: IUser}> {
    try {
      // @ts-ignore
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
      const token = await reply.jwtSign({ id: user.id, name: user.name, photo: user.photo, role: user.role });
      
      return reply.code(statusCode).send({ user, token });
    } catch(err) {
      const code = err.code || 500;
      return reply.code(code).send(err);
    }
  }
}

export const userController = new UserController();