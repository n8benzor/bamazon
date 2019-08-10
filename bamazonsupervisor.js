const mysql = require("mysql");
const inquirer = require("inquirer");
// require("console.table");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    printData();
});

function printData() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        supervisorMenu();
    });
}

function supervisorMenu() {
    inquirer
        .prompt({
            name: "options",
            type: "list",
            message: "Please select an option from the list below:",
            choices: ["View product sales by department", "Create new department", "EXIT MENU"]
        })
        .then(function (optionResponse) {

            if (optionResponse.options === "View product sales by department") {
                salesDept();
            }

            else if (optionResponse.options === "Create new department") {
                newDept();
            }
            else {
                connection.end();
            }
        });
}

function newDept() {
    inquirer.prompt([
        {
            type: "input",
            name: "dept",
            message: "Enter a name for the new department: "
        },
        {
            type: "input",
            name: "overhead",
            message: "Enter the overhead cost for the department",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function (deptValues) {
        connection.query(
            "INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?)",
            [deptValues.dept, deptValues.overhead],
            function (err, res) {
                if (err) throw err;
                console.log("You have just added the new department: " + deptValues.dept);
                salesDept();
            }
        );
    })

}

function salesDept() {
    connection.query(
        "select department_id, departments.department_name, over_head_costs, product_sales, " +
        "SUM(IFNULL(products.product_sales, 0)) as product_sales, " +
        "SUM(IFNULL(products.product_sales, 0)) - departments.over_head_costs as total_profit " +
        "from products " +
        "RIGHT join departments on products.department_name = departments.department_name " +
        "GROUP BY department_name, department_id, over_head_costs",
        function (err, res) {
            console.table(res);
            supervisorMenu();
        }
    );
}
