/*
  Warnings:

  - A unique constraint covering the columns `[user_id,res_id]` on the table `rate_res` will be added. If there are existing duplicate values, this will fail.
  - Made the column `user_id` on table `rate_res` required. This step will fail if there are existing NULL values in that column.
  - Made the column `res_id` on table `rate_res` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `rate_res` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_rate` on table `rate_res` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `rate_res` DROP FOREIGN KEY `fk_rate_res`;

-- DropForeignKey
ALTER TABLE `rate_res` DROP FOREIGN KEY `fk_rate_user`;

-- AlterTable
ALTER TABLE `rate_res` MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `res_id` INTEGER NOT NULL,
    MODIFY `amount` INTEGER NOT NULL,
    MODIFY `date_rate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- CreateIndex
CREATE UNIQUE INDEX `uq_rate_user_restaurant` ON `rate_res`(`user_id`, `res_id`);

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `fk_rate_res` FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `fk_rate_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
