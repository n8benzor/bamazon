create database bamazon;

use bamazon;

create table products (
    item_id integer not null auto_increment,
    product_name varchar(45) null,
    department_name varchar(45) null,
    price integer(10,4) null,
    stock_quantity integer(10) null,
)

insert into products(product_name, department_name, price, stock_quantity)
values("PLaystation 4", "Electronics", 367.50, 25),
("Television", "Electronics", 899.99, 10),
("Laptop", "Electronics", 1200.00, 15),
("Javascript & JQuery", "Books", 39.99, 50),
("iPad", "Electronics", 599.99, 75),
("Tide", "Food & Grocery", 10.99, 200),
("Dog Food", "Pet Supplies", 29.99, 35),
("Hammer", "Home, Garden & Tools", 9.99, 100),
("Sofa", "Furniture", 499.00, 10),
("Bacon", "Food & Grocery", 5.00, 85),
("Blu Ray Movie", "Music, Movies, Games", 19.99, 150),
("Jeans", "Clothing", 39.99, 500),
("Diamond Ring", "Jewelry", 5000.00, 5);

ALTER TABLE products
ADD COLUMN product_sales_column DECIMAL(10,4) not null AFTER stock_quantity;

create table departments (
    department_id integer not null auto_increment,
    department_name varchar(45) not null,
    over_head_costs decimal(10,4) not null,
    PRIMARY KEY (department_id)
);
