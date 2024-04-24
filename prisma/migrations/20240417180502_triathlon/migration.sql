/*
  Warnings:

  - Added the required column `userId` to the `stateForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stateForm" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "stateForm" ADD CONSTRAINT "stateForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
