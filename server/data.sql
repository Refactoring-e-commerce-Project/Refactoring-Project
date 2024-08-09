-- Insert dummy data into users table
INSERT INTO `commerce`.`users` (`name`, `mail`, `password`, `type`, `createdAt`, `updatedAt`) VALUES
('John Doe', 'john@example.com', 'password123', 'customer', NOW(), NOW()),
('Jane Smith', 'jane@example.com', 'securepass', 'seller', NOW(), NOW()),
('Alice Johnson', 'alice@example.com', 'alicepass', 'customer', NOW(), NOW()),
('Bob Brown', 'bob@example.com', 'bobpass', 'seller', NOW(), NOW());

-- Insert dummy data into categories table
INSERT INTO `commerce`.`categories` (`categoryName`, `createdAt`, `updatedAt`) VALUES
('Electronics', NOW(), NOW()),
('Clothing', NOW(), NOW()),
('Books', NOW(), NOW()),
('Home & Garden', NOW(), NOW());

-- Insert dummy data into products table
INSERT INTO `commerce`.`products` (`productname`, `description`, `images`, `price`, `availability`, `categoryId`, `userId`, `createdAt`, `updatedAt`) VALUES
('Smartphone', 'Latest model smartphone', '["phone1.jpg", "phone2.jpg"]', 599.99, 1, 1, 2, NOW(), NOW()),
('T-shirt', 'Cotton t-shirt', '["tshirt1.jpg", "tshirt2.jpg"]', 19.99, 1, 2, 2, NOW(), NOW()),
('Novel', 'Bestselling fiction novel', '["book1.jpg"]', 14.99, 1, 3, 4, NOW(), NOW()),
('Garden Tools Set', 'Complete set of garden tools', '["tools1.jpg", "tools2.jpg"]', 49.99, 1, 4, 4, NOW(), NOW());

-- Insert dummy data into carts table
INSERT INTO `commerce`.`carts` (`userId`, `productId`, `quantity`, `totalPrice`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 599.99, NOW(), NOW()),
(1, 2, 2, 39.98, NOW(), NOW()),
(3, 3, 1, 14.99, NOW(), NOW());

-- Insert dummy data into wishlists table
INSERT INTO `commerce`.`wishlists` (`userId`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 3, NOW(), NOW()),
(1, 4, NOW(), NOW()),
(3, 1, NOW(), NOW());