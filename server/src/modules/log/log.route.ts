import { FastifyInstance } from 'fastify';
import {logController} from './log.controller';
import { $ref } from './project.schema';

const schema = {schema: {body: $ref('createProjectSchema'), response: {200: $ref('createProjectResponseSchema')}}};

async function logRoutes(server: FastifyInstance) {
  const onRequest = { onRequest: [server.registredUser]};

  server.get('/:projectId', onRequest, logController.getLogs);
  server.get('/:projectId/info', onRequest, logController.getInfo);
  server.get('/:projectId/:logId', onRequest, logController.readLog);
  server.delete('/:projectId/:logIds', onRequest, logController.deleteLogs);
  // server.post('/', logController.getUserProjects);
}

export default logRoutes;