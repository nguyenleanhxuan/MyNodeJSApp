Use Restaurant;

UPDATE users
SET 
avatar = CONCAT('https://i.pravatar.cc/150?img=', user_id),
totpSecret = CONCAT('SECRET', LPAD(user_id,3,'0')),
googleId = CONCAT('google_', LPAD(user_id,3,'0'));


UPDATE users SET age = 20 + user_id;


Create table users (
	user_id int primary key auto_increment,
	full_name varchar(150),
	email varchar(100),
	password varchar(100)
);


Create table food_type (
	type_id int primary key auto_increment,
	type_name varchar(150)
);

Create table food (
	food_id int primary key auto_increment,
	food_name varchar(150),
	image varchar(100),
	price float,
	description varchar(255),
	type_id int,
	constraint fk_food_foodtype  foreign key (type_id) references food_type(type_id)
);


Create table sub_food (
	sub_id int primary key auto_increment,
	sub_name varchar(150),
	sub_price float,
	food_id int,
	constraint fk_subfood_food  foreign key (food_id) references food(food_id)
);


Create table restaurant (
    res_id int primary key auto_increment,
    res_name varchar(150),
    image varchar(255),
    description varchar(255)
);


Create table orders (
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id int,
	food_id int,
	constraint fk_user_id foreign key (user_id) references users(user_id),
	constraint fk_food_id foreign key (food_id) references food(food_id),
	amount int,
	code varchar(100),
	arr_sub_id varchar(100)
);


Create table rate_res (
	rate_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	res_id INT,
    constraint fk_rate_user foreign key (user_id) references users(user_id),
    constraint fk_rate_res foreign key (res_id) references restaurant(res_id),
    amount int,
    date_rate datetime
);


Create table like_res (
	like_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	res_id INT,
    constraint fk_like_user foreign key (user_id) references users(user_id),
    constraint fk_like_res foreign key (res_id) references restaurant(res_id),
    amount int,
    date_rate datetime
);
------ UPDATE DỮ LIỆU
INSERT INTO users (full_name, email, password) VALUES
('Nguyen Van A', 'a@gmail.com', '123'),
('Tran Thi B', 'b@gmail.com', '123'),
('Le Van C', 'c@gmail.com', '123'),
('Pham Thi D', 'd@gmail.com', '123'),
('Hoang Van E', 'e@gmail.com', '123'),
('Do Thi F', 'f@gmail.com', '123'),
('Nguyen Van G', 'g@gmail.com', '123'),
('Tran Thi H', 'h@gmail.com', '123'),
('Le Van I', 'i@gmail.com', '123'),
('Pham Thi J', 'j@gmail.com', '123'),
('Hoang Van K', 'k@gmail.com', '123'),
('Do Thi L', 'l@gmail.com', '123'),
('Nguyen Van M', 'm@gmail.com', '123'),
('Tran Thi N', 'n@gmail.com', '123');

INSERT INTO food_type (type_name) VALUES
('Fast Food'),
('Drink'),
('Dessert');

INSERT INTO food (food_name, image, price, description, type_id) VALUES
('Burger', 'burger.jpg', 50000, 'Beef burger', 1),
('Pizza', 'pizza.jpg', 120000, 'Cheese pizza', 1),
('Coca Cola', 'coke.jpg', 15000, 'Soft drink', 2),
('Ice Cream', 'ice.jpg', 30000, 'Vanilla ice cream', 3),
('Water', 'water.jpg', 10000, 'Water', 2),
('Hotdog', 'hotdoc.jpg', 50000, 'Hot dog', 1),
('Milo', 'milo.jpg', 15000, 'Milk', 2),
('Cake', 'cake.jpg', 30000, 'Cake', 3);

INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Extra Cheese', 10000, 2),
('Double Beef', 20000, 1),
('Large Size', 5000, 3);

INSERT INTO restaurant (res_name, image, description) VALUES
('KFC', 'kfc.jpg', 'Fast food restaurant'),
('Pizza Hut', 'ph.jpg', 'Pizza chain'),
('Highlands', 'hl.jpg', 'Coffee shop');

INSERT INTO orders (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1, 2, 'OD001', '2'),
(1, 2, 1, 'OD002', '1'),
(2, 2, 3, 'OD003', '1'),
(3, 3, 5, 'OD004', NULL),
(3, 1, 1, 'OD005', '2'),
(4, 4, 2, 'OD006', NULL),
(5, 1, 2, 'OD007', '2'),
(6, 2, 1, 'OD008', '1'),
(7, 2, 3, 'OD009', '1'),
(8, 3, 5, 'OD010', NULL),
(9, 1, 1, 'OD011', '2'),
(10, 4, 2, 'OD0012', NULL),
(11, 4, 6, 'OD0013', NULL),
(12, 4, 8, 'OD0014', NULL);



INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, NOW()),
(2, 1, 4, NOW()),
(3, 1, 5, NOW()),
(1, 2, 4, NOW()),
(4, 2, 5, NOW()),
(5, 3, 5, NOW()),
(6, 3, 4, NOW()),
(7, 3, 5, NOW()),
(8, 2, 4, NOW()),
(9, 2, 5, NOW()),
(10, 2, 5, NOW()),
(11, 3, 5, NOW()),
(12, 2, 4, NOW()),
(12, 1, 5, NOW());

INSERT INTO like_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 1, NOW()),
(2, 1, 1, NOW()),
(3, 1, 1, NOW()),
(4, 1, 1, NOW()),
(5, 2, 1, NOW()),
(1, 2, 1, NOW()),
(2, 2, 1, NOW()),
(5, 1, 1, NOW()),
(6, 1, 1, NOW()),
(7, 1, 1, NOW()),
(8, 1, 1, NOW()),
(9, 2, 1, NOW()),
(10, 2, 1, NOW()),
(11, 2, 1, NOW()),
(12, 2, 1, NOW());



------
-- SQL --
-- Tìm 5 người đã like nhà hàng nhiều nhất
Select u.user_id, u.full_name, count(l.res_id) AS total_like
from users u
join like_res l on u.user_id = l.user_id
GROUP BY u.user_id, u.full_name
ORDER BY total_like DESC
LIMIT 5;

-- Tìm 2 nhà hàng có lượt like nhiều nhất
SELECT r.res_id, r.res_name, COUNT(l.user_id) AS total_like
FROM restaurant r
JOIN like_res l ON r.res_id = l.res_id
GROUP BY r.res_id, r.res_name
ORDER BY total_like DESC
LIMIT 2;


-- Tìm người đã đặt hàng nhiều nhất
SELECT u.user_id, u.full_name, COUNT(o.order_id) AS total_orders
FROM users u
JOIN orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.full_name
ORDER BY total_orders DESC
LIMIT 1;


-- Tìm ng dùng không hoạt động trong hệ thống (k đăt hàng, k like, k đánh giá)
SELECT user_id, full_name
FROM users
WHERE user_id NOT IN (SELECT user_id FROM orders)
  AND user_id NOT IN (SELECT user_id FROM like_res)
  AND user_id NOT IN (SELECT user_id FROM rate_res);



-- Chuc năng chat nhóm
CREATE TABLE IF NOT EXISTS ChatGroups (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(255),
	ownerId INT,
	deletedBy INT NOT NULL DEFAULT 0,
	isDeleted TINYINT(1) NOT NULL DEFAULT 0,
	deletedAt TIMESTAMP NULL DEFAULT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT fk_chat_groups_owner FOREIGN KEY (ownerId) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS ChatGroupMembers (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	userId INT,
	chatGroupId INT,
	deletedBy INT NOT NULL DEFAULT 0,
	isDeleted TINYINT(1) NOT NULL DEFAULT 0,
	deletedAt TIMESTAMP NULL DEFAULT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT fk_chat_group_members_user FOREIGN KEY (userId) REFERENCES users(user_id),
	CONSTRAINT fk_chat_group_members_group FOREIGN KEY (chatGroupId) REFERENCES ChatGroups(id)
);

CREATE TABLE IF NOT EXISTS ChatMessages (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	chatGroupId INT,
	userIdSender INT,
	messageText TEXT,
	deletedBy INT NOT NULL DEFAULT 0,
	isDeleted TINYINT(1) NOT NULL DEFAULT 0,
	deletedAt TIMESTAMP NULL DEFAULT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT fk_chat_messages_group FOREIGN KEY (chatGroupId) REFERENCES ChatGroups(id),
	CONSTRAINT fk_chat_messages_sender FOREIGN KEY (userIdSender) REFERENCES users(user_id)
);
