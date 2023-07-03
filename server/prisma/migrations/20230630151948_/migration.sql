-- CreateEnum
CREATE TYPE "NotificationTypes" AS ENUM ('EMAIL', 'TELEGRAM');

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "level" "LogLevel" NOT NULL,
    "type" "NotificationTypes" NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notification_projectId_level_type_key" ON "Notification"("projectId", "level", "type");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
