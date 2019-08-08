

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

With the database there are two tables. The first table is used to store the product information which includes:

 - item ID
 - product name
 - department name
 - price
 - stock quantity
 - product sales

The second table is used to store the department information:

 - department ID
 - department name
 - over head costs

The Inquirer NPM is used to create prompts through the CLI so that the user can choose options on whatever task they want to perform.

***
### Screenshots
bamazoncustomer.js
![Purchasing a product from the inventory](https://github.com/n8benzor/bamazon/blob/master/Images/bamazoncustomer.png?raw=true)
**Making a purchase on Bamazon**
***
bamazonmanager.js
![Inquirer menu list](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager1.png?raw=true)
**Inquirer menu list**

![Viewing low inventory](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager2.png?raw=true)
**Viewing the inventory of products that have a quantity of less than five**

![Updating inventory quantity and adding a new product](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonmanager3.png?raw=true)
**Updating quantity of a product and adding a new product to the inventory**
***
bamazonsupervisor.js
![Viewing the product sales by department](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonsupervisor1.png?raw=true)
**Viewing the product sales by department**

![Adding a new department](https://github.com/n8benzor/bamazon/blob/master/Images/bamazonsupervisor2.png?raw=true)**Adding a new department**
