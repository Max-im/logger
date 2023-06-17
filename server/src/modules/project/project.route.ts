import { FastifyInstance } from 'fastify';
import {projectController} from './project.controller';
import { $ref } from './project.schema';

const schema = {schema: {body: $ref('createProjectSchema'), response: {200: $ref('createProjectResponseSchema')}}};

async function projectRoutes(server: FastifyInstance) {
  const onRequest = { onRequest: [server.registredUser]};

  server.post('/', {...schema, ...onRequest}, projectController.create);
  server.get('/', onRequest, projectController.getUserProjects);
  server.get('/:id', onRequest, projectController.getUserProject);
  server.put('/:id', onRequest, projectController.getUserProjects);
  server.delete('/:id', onRequest, projectController.delete);
}

export default projectRoutes;