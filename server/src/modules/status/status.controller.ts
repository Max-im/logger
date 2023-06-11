import os from 'node:os';
import { FastifyReply, FastifyRequest } from 'fastify';

class StatusController {
  getStatus(request: FastifyRequest, reply: FastifyReply) {
    return { staus: 'up' };
  }

  async getInfo(request: FastifyRequest, reply: FastifyReply) {
    try {
      const data = {
        status: 'up',
        startedAt: new Date(),
        node: {
          version: process.version,
          memoryUsage:
            Math.round(process.memoryUsage().rss / 1024 / 1024) + 'M',
          uptime: process.uptime(),
        },
        system: {
          loadavg: os.loadavg(),
          freeMemory: Math.round(os.freemem() / 1024 / 1024) + 'M',
        },
        env: process.env.NODE_ENV,
        hostname: os.hostname()
      };
      return data;
    } catch(err) {
      return reply.code(500).send(err);
    }
  }
}

export const statusController = new StatusController();