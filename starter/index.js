const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

(function PromptUser(){

    inquirer

    .prompt([
                
    {
        type: "input",
        name: "name",
        message: "Please type your name"
},

   {
    type: "input",
    name: "email",
    message: "Please type your email"
},

   {
    type: "input",
    name: "id",
    message: "Please type your ID"
},

   {
    type: "input",
    name: "name",
    message: "Please type your name"
},

])
    
const {name, id, email, contact} = answers

swith (contact){

    
}


})();