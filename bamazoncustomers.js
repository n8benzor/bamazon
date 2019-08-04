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
            message: "Please input the product ID of the item you would like to purchase?"
        }
    ]).then(function(){
        
    })
    connection.end();
}

