#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { todo } from "node:test";
import { log } from "node:console";

let todos:string[] = ["Sarim", "Ramiz"];
let condition = true;

async function createTodos (todos:string[]) {
    do{
    let answer = await inquirer.prompt([
        {name: "select", message: "Select the Task: ", type: "list", choices: ["Add Task", "Update List", "View List", "Delete Task", "Exit"]}
    ])
    if(answer.select === "Add Task") {
        let addTodo = await inquirer.prompt([
            {name: "todo", message: "Add your items in the list: ", type: "input"}
        ]);
        todos.push(addTodo.todo);
        todos.forEach(todos => console.log(todos));
    } else if(answer.select === "Update List") {
        let updateTodo = await inquirer.prompt([
            {name: "todo", message: "Update your items in the list: ", type: "list",
        choices: todos.map(item => item)}
        ]);
        let addTodo = await inquirer.prompt([
            {name: "todo", message: "Add your items in the list: ", type: "input"}
        ]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo,addTodo.todo]
        todos.forEach(todos => console.log(todos));
    } else if (answer.select === "View List") {
        console.log(chalk.green.bold("\n****** Todo List ******"));
        todos.forEach(todos => console.log(todos));  
    } else if (answer.select === "Delete Task") {
        let deleteTodo = await inquirer.prompt([
            {name: "todo", message: "Update your items in the list: ", type: "list",
        choices: todos.map(item => item)}
        ]);
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo]
        todos.forEach(todos => console.log(todos));
    } else if(answer.select === "Exit") {
        condition = false;
        console.log(chalk.blue.bold("You are Exiting"));
        console.log(chalk.blue.bold("Thank You! for using this Todo List."));
        
    } 

}
 while (condition)
}

createTodos(todos);