import { LogLevel, Notification, NotificationTypes, User } from '@prisma/client';
import { ProjectRepo } from '../project/project.repo';

export abstract class NotificationEntity implements Notification {
    id: number;
    type: NotificationTypes;
    level: LogLevel;
    projectId: string;

    abstract notify(users: User[]): void;

    constructor(notification: Notification) {
        this.id = notification.id;
        this.type = notification.type;
        this.level = notification.level;
        this.projectId = notification.projectId;
    }

}