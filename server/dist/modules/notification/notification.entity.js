"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEntity = void 0;
const notification_repo_1 = require("./notification.repo");
class NotificationEntity {
    constructor(notification) {
        this.id = notification.id;
        this.provider = notification.provider;
        this.logLevel = notification.logLevel;
        this.projectId = notification.projectId;
        this.userId = notification.userId;
    }
    static onGet(userId, projectId) {
        return notification_repo_1.NotificationRepo.onGet(userId, projectId);
    }
    static onCreate(userId, projectId, level) {
        return notification_repo_1.NotificationRepo.onCreate(userId, projectId, level);
    }
    static onDelete(notificationId) {
        return notification_repo_1.NotificationRepo.onDelete(Number(notificationId));
    }
}
exports.NotificationEntity = NotificationEntity;
