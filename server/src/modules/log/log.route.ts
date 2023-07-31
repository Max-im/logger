import { FastifyInstance } from 'fastify';
import { logController } from './log.controller';

async function logRoutes(server: FastifyInstance) {
    const onRequest = { onRequest: [server.registredUser] };

    server.post('/', logController.onCreate);
    server.get('/:projectId', onRequest, logController.getLogs);
    server.get('/:projectId/log/:logId', onRequest, logController.logItem);
    server.get('/:projectId/info', onRequest, logController.getInfo);
    server.get('/:projectId/:logId', onRequest, logController.markReadLog);
    server.delete('/:projectId/:logIds', onRequest, logController.deleteLogs);
}

export default logRoutes;
