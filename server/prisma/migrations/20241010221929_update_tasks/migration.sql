-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
