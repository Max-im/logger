import { LogLevel, Notification, NotificationProviders, User } from '@prisma/client';
import { NotificationRepo } from './notification.repo';

export abstract class NotificationEntity implements Notification {
    id: number;
    provider: NotificationProviders;
    logLevel: LogLevel;
    projectId: string;
    userId: string;

    abstract notify(users: User[]): void;

    constructor(notification: Notification) {
        this.id = notification.id;
        this.provider = notification.provider;
        this.logLevel = notification.logLevel;
        this.projectId = notification.projectId;
        this.userId = notification.userId;
    }

    static onGet(userId: string, projectId: string) {
        return NotificationRepo.onGet(userId, projectId);
    }

    static onCreate(userId: string, projectId: string, level: string) {
        return NotificationRepo.onCreate(userId, projectId, level);
    }

    static onDelete(notificationId: string) {
        return NotificationRepo.onDelete(Number(notificationId));
    }
}