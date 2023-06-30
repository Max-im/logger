import { FastifyInstance } from 'fastify';
import { logController } from './log.controller';
import { $ref } from './project.schema';

const schema = { schema: { body: $ref('createProjectSchema'), response: { 200: $ref('createProjectResponseSchema') } } };

async function logRoutes(server: FastifyInstance) {
  const onRequest = { onRequest: [server.registredUser] };

  server.get('/:projectId', onRequest, logController.getLogs);
  server.get('/:projectId/log/:logId', onRequest, logController.logItem);
  server.get('/:projectId/info', onRequest, logController.getInfo);
  server.get('/:projectId/:logId', onRequest, logController.markReadLog);
  server.delete('/:projectId/:logIds', onRequest, logController.deleteLogs);
}

export default logRoutes;