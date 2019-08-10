## Bamazon CLI App

  

### Development

  

- Developed for: University of Arizona Coding Bootcamp

  

- Developed by: Nathan Benzor

  

- Developed using: Node.js, Javascript,MySQL

  

- Demo of functioning app: [Bamazon Demo](https://youtu.be/VjDqlr4zBYA)

  

***

  

### What does this app do?

This command line interface (CLI) application access a database that stores various products in my "Bamazon" online store and performs different functions in which the user can either be a customer, manager, or supervisor.

  

The first level is where the customer can shop for an item listed and choose the quantity of that item they would like to purchase.

  

The second level is where the manager can see the product list as well as update quantities of a product, or add a new product to the inventory.

  

The third level is where the supervisor can view the sales of products by department, as well as add a new department to the database inventory list.

  

***

### NPM dependencies used
- Inquirer
- mySQL

***

### Functionality of the app

This application relies on a mySQL databse to store the inventory information. The various bamazon.js files each use the mySQL NPM(Node Package Manager) to connect to the database.

![NPM dependencies](https://github.com/n8benzor/bamazon/blob/master/Images/dependencies.png?raw=true)

Within the database there are two tables. The products table is used to store the product information which includes:

- item ID
- product name
- department name
- price
- stock quantity
- product sales

The departments table is used to store the department information:

- department ID
- department name
- over head costs  

The Inquirer NPM is used to create prompts through the CLI so that the user can choose options on whatever task they want to perform.
***
### How to use this app
  To get started enter one of the following lines on the command line:
 

    node bamazoncustomer.js
    node bamazonmanager.js
    node bamazonsupervisor.js
    
  ***
#### Bamazon Customer
 - When the ***bamazoncustomer.js*** file is chosen the user will be shown the current inventory of the products table.
 ![Purchasing a product from the inventory](https://github.com/n8benzor/bamazon/blob/master/Images/bamazoncustomer.png?raw=true)
*Making a purchase on Bamazon*

 - The user will then be prompted to enter the the product ID of the item they want to purchase, followed by the quantity of that product.
 - Once these  choices have been made, you have now made a purchase on Bamazon!
***
#### Bamazon Manager
 - If the ***bamazonmanager.js*** file is chosen, the user will be shown a list of available options.
 
![Inquirer menu list](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager1.png?raw=true)
*Inquirer menu list*
  
![Viewing low inventory](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager2.png?raw=true)
*Viewing the inventory of products that have a quantity of less than five*

![Updating inventory quantity and adding a new product](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager3.png?raw=true)
*Updating quantity of a product and adding a new product to the inventory*

 - Here the manager is able to update the stock quantity of products, view the inventory of products that have a stock quantity less than five, and add a new product to the inventory.
***
#### Bamazon Supervisor
 - If the ***bamazonsupervisor.js*** file is chosen the supervisor can view the current inventory and can chose two options, view product sales by department, and create new department.
 
![Viewing the product sales by department](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonsupervisor1.png?raw=true)
*Viewing the product sales by department*

![Adding a new department](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonsupervisor2.png?raw=true)*Adding a new department (Automotive)*

***
