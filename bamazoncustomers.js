const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    printData();
});

function printData() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
    promptUser();
    });
  }

function promptUser(){
    inquirer
        .prompt([
        {
            type: "input",
            name: "inputId",
            message: "Please input the product ID of the item you would like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
        {
            type: "input",
            name: "unitAmount",
            message: "Please enter the amount of units you would like to buy:",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        }
    ]).then(function(purchase){
        connection.query("SELECT * FROM products", function(error, results) {
            if (error) throw error;
        let purchaseQuantity = purchase.unitAmount;
        let productQuantity;
        let productPrice;
        let productName;
        let productSales;
        let productId;
        let totalPurchased;
        for (let i = 0; i < results.length; i++) {
            if (parseInt(purchase.inputId) === results[i].item_id) {
                productQuantity = results[i].stock_quantity;
                productPrice = results[i].price;
                productName = results[i].product_name;
                productSales = results[i].product_sales;
                productId = results[i].item_id;
                totalPurchased = results[i].price * purchaseQuantity;
            }
        }
        if (purchaseQuantity <= productQuantity){
            console.log("========================= SHOPPING CART ========================");
            console.log("| Product ID: " + productId + " | Product Name: " + productName + " | Quantity: " + purchaseQuantity + " | ");
            console.log("================================================================");
            connection.query("UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: productQuantity - purchaseQuantity,
                    product_sales: productPrice * purchaseQuantity
                  },
                  {
                    item_id: purchase.inputId
                  }
                ],
                function(error) {
                  if (error) throw error;
                  console.log("Thank you for purchasing from Bamazon!");
                  console.log("The total amount of your purchase: $" + totalPurchased);
                  console.log("================================================================");
                connection.end();
                }
              );
        } else {
            console.log("There aren't enough" + productName + " in stock, please check the amount in stock!");
            printData();
        // connection.end();
    }
});
});

}
