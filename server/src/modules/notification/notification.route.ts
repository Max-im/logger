import { FastifyInstance } from 'fastify';
import { notificationController } from './notification.controller';

async function notificationRoutes(server: FastifyInstance) {
  const onRequest = { onRequest: [server.registredUser] };

  server.get('/:projectId', onRequest, notificationController.onGet);
  server.post('/', onRequest, notificationController.onCreate);
  server.delete('/:projectId/:notificationId', onRequest, notificationController.onDelete);
}

export default notificationRoutes;