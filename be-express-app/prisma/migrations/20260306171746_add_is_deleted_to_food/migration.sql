-- CreateTable
CREATE TABLE `food` (
    `food_id` INTEGER NOT NULL AUTO_INCREMENT,
    `food_name` VARCHAR(150) NULL,
    `image` VARCHAR(100) NULL,
    `price` FLOAT NULL,
    `description` VARCHAR(255) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `type_id` INTEGER NULL,

    INDEX `fk_food_foodtype`(`type_id`),
    PRIMARY KEY (`food_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_type` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(150) NULL,

    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `like_res` (
    `user_id` INTEGER NULL,
    `res_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `date_rate` DATETIME(0) NULL,

    INDEX `fk_like_res`(`res_id`),
    INDEX `fk_like_user`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `food_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `code` VARCHAR(100) NULL,
    `arr_sub_id` VARCHAR(100) NULL,

    INDEX `fk_food_id`(`food_id`),
    INDEX `fk_user_id`(`user_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rate_res` (
    `user_id` INTEGER NULL,
    `res_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `date_rate` DATETIME(0) NULL,

    INDEX `fk_rate_res`(`res_id`),
    INDEX `fk_rate_user`(`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restaurant` (
    `res_id` INTEGER NOT NULL AUTO_INCREMENT,
    `res_name` VARCHAR(150) NULL,
    `image` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,

    PRIMARY KEY (`res_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sub_food` (
    `sub_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_name` VARCHAR(150) NULL,
    `sub_price` FLOAT NULL,
    `food_id` INTEGER NULL,

    INDEX `fk_subfood_food`(`food_id`),
    PRIMARY KEY (`sub_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(150) NULL,
    `email` VARCHAR(100) NULL,
    `password` VARCHAR(100) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `fk_food_foodtype` FOREIGN KEY (`type_id`) REFERENCES `food_type`(`type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `like_res` ADD CONSTRAINT `fk_like_res` FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `like_res` ADD CONSTRAINT `fk_like_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_food_id` FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `fk_rate_res` FOREIGN KEY (`res_id`) REFERENCES `restaurant`(`res_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rate_res` ADD CONSTRAINT `fk_rate_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sub_food` ADD CONSTRAINT `fk_subfood_food` FOREIGN KEY (`food_id`) REFERENCES `food`(`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
