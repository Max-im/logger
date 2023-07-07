/*
  Warnings:

  - A unique constraint covering the columns `[projectId,userId,logLevel,provider]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Notification_projectId_logLevel_provider_userId_key";

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "provider" SET DEFAULT 'EMAIL';

-- CreateIndex
CREATE UNIQUE INDEX "Notification_projectId_userId_logLevel_provider_key" ON "Notification"("projectId", "userId", "logLevel", "provider");
