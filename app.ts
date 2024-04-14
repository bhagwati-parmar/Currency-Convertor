#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgMagentaBright('\n\t Welcome To Bhagwati-Currency-Convertor \n'))
//define the list of curencies and their exchange rates.
let exchange_rate : any = {
    "USD":1, //Base currency
    "EUR":0.9,//european currency (euro)
    "JYP":113,//japanese currency (yen)
    "CAD":1.3,//canadian Dollar
    "AUD":1.65,//australian Dollar
    "PKR":277.70, //pakistani rupees 
    //
}

//prompt the user yto select the currency to convert from and to
let user_answer =await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message: chalk.yellowBright("select the currency to convert from :"),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name:"to_currency",
        type:"list",
        message: chalk.yellowBright("select the currency to convert into :"),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {//create object to ask the user that how much u want to convert
        name:"Amount",
        type:"input",
        message: chalk.yellowBright("Enter the amount to convert")
    }
    
]);
//perform currency convertion by using the formula.
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount =exchange_rate[user_answer.to_currency];
let amount =user_answer.Amount

//formula of convertion
let base_amount =amount / from_amount
let converted_amount = base_amount * to_amount

//display converted amount
console.log(`\nConverted Amount = ${chalk.bold.green (converted_amount.toFixed(2))}\n`);
