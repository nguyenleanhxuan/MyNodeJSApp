/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `like_id` to the `like_res` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate_id` to the `rate_res` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `like_res` ADD COLUMN `like_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`like_id`);

-- AlterTable
ALTER TABLE `rate_res` ADD COLUMN `rate_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`rate_id`);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `avatar` TEXT NULL,
    ADD COLUMN `googleId` VARCHAR(255) NULL,
    ADD COLUMN `totpSecret` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `ChatGroupMembers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `chatGroupId` INTEGER NULL,
    `deletedBy` INTEGER NOT NULL DEFAULT 0,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_chat_group_members_group`(`chatGroupId`),
    INDEX `fk_chat_group_members_user`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatGroups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `ownerId` INTEGER NULL,
    `deletedBy` INTEGER NOT NULL DEFAULT 0,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_chat_groups_owner`(`ownerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChatMessages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatGroupId` INTEGER NULL,
    `userIdSender` INTEGER NULL,
    `messageText` TEXT NULL,
    `deletedBy` INTEGER NOT NULL DEFAULT 0,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_chat_messages_group`(`chatGroupId`),
    INDEX `fk_chat_messages_sender`(`userIdSender`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `unique_email` ON `users`(`email`);

-- AddForeignKey
ALTER TABLE `ChatGroupMembers` ADD CONSTRAINT `fk_chat_group_members_group` FOREIGN KEY (`chatGroupId`) REFERENCES `ChatGroups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ChatGroupMembers` ADD CONSTRAINT `fk_chat_group_members_user` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ChatGroups` ADD CONSTRAINT `fk_chat_groups_owner` FOREIGN KEY (`ownerId`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ChatMessages` ADD CONSTRAINT `fk_chat_messages_group` FOREIGN KEY (`chatGroupId`) REFERENCES `ChatGroups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ChatMessages` ADD CONSTRAINT `fk_chat_messages_sender` FOREIGN KEY (`userIdSender`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
