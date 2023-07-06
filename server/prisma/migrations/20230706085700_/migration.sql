/*
  Warnings:

  - You are about to drop the column `level` on the `Notification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId,logLevel,provider,userId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `logLevel` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropIndex
DROP INDEX "Notification_projectId_level_provider_userId_key";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "level",
ADD COLUMN     "logLevel" "LogLevel" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Notification_projectId_logLevel_provider_userId_key" ON "Notification"("projectId", "logLevel", "provider", "userId");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
