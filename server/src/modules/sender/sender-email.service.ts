import { LogLevel } from '@prisma/client';
import { SenderRepo } from './sender.repo';
import { SenderEmailParam } from './sender-email.param';
import { SenderEmailEntity } from './sender.email.entity';

class SenderEmailSerivce {
  async getReceiversByProject() {
    const logId = 1;
    const logLevel = LogLevel.INFO;

    const log = await SenderRepo.getReceivers(logId);

    const users = log?.project.users.map(({ user }) => ({
      email: user.email,
      payload: log.value,
      notification: user.notifications
        .map(({ logLevel, provider }) => ({ logLevel, provider }))
        .find(notification => notification.logLevel === logLevel)
    })).filter(item => item.notification);

    const params = users?.map(user => new SenderEmailParam(user));
    if (params) {
      const sender = new SenderEmailEntity(params);
      sender.notify();
    }
  }
}

export const senderEmailSerivce = new SenderEmailSerivce();
