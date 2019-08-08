const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

// Start cennection to mysql database
connection.connect(function (err) {
    if (err) throw err;
    managerMenu();
});

// function managerMenu displays a list of choices 
function managerMenu() {
    inquirer
      .prompt({
        name: "options",
        type: "list",
        message: "Please select an option from the list below:",
        choices: ["View Products", "View low inventory", "Add to inventory", "Add new product", "EXIT MENU"]
      })
      .then(function(optionResponse) {
// switch statements could also be used here instead of if statements
        if (optionResponse.options === "View Products") {
          printData();
        }
        
        else if(optionResponse.options === "View low inventory") {
          lowInventory();
        } 
        else if(optionResponse.options === "Add to inventory"){
            addInventory();
        }
        else if(optionResponse.options === "Add new product"){
            addProduct();
        }
        else{
          connection.end();
        }
      });
  }

//   function lowInventory displays any items where the quantity is less than 5
function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
        if (err) throw err;
        console.table(res);
        managerMenu();
    })
}

// function addInventory prompts the user to enter the product ID and quantity they want to adjust
function addInventory(){
    inquirer.prompt([
        {
        name: "addId",
        type: "input",
        message: "Enter the product ID of the item you want to update: "
        },
        {
        name: "addTo",
        type: "input",
        message: "Enter the amount you would like to update the current stock quantity: ",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ])
    .then(function(quantity){
        connection.query("UPDATE products SET ? WHERE ?",
        [
            {
              stock_quantity: quantity.addTo
            },
            {
                item_id: quantity.addId
            }
        ],
        ) 
        managerMenu();     
    })
}

// function addProduct prompts user for all fields to add a new item to the inventory
function addProduct(){
    inquirer.prompt([
        {
        name: "addName",
        type: "input",
        message: "Enter the name of the item you want to add to inventory: "
        },
        {
        name: "addDept",
        type: "input",
        message: "Enter the department name you would like to add the item to: ",
        },
        {
        name: "addPrice",
        type: "input",
        message: "Enter the price for the new item: ",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
        name: "addQuantity",
        type: "input",
        message: "Enter the quantity of stock for the new item: ",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ])
    .then(function(newItem){
        connection.query("INSERT INTO products SET ?",
            {
                product_name: newItem.addName,
                department_name: newItem.addDept,
                price: newItem.addPrice,
                stock_quantity: newItem.addQuantity,
                product_sales: 0
            }
        ) 
        managerMenu();     
    })
}


// function printData displays a table showing current inventory
function printData() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log("\n================================================================================================\n");
      console.table(res);
      console.log("\n================================================================================================\n");
      managerMenu();
    });
  }