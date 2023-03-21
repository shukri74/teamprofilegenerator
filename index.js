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

const team = [];

async function PromptUser(){

    const answers = await inquirer.prompt([

    {
        type: "list",
        name: "role",
        message: "Please tell us your role",
        choices: ["Manager", "Engineer", "Intern"]
},
        
        
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
    name: "officeNumber",
    when: (answers) => answers.role === "Manager",
    message: "Please type your office number"
},
{
    type: "input",
    name: "github",
    when: (answers) => answers.role === "Engineer",
    message: "Please type your GitHub username"
},

{
    type: "input",
    name: "school",
    when: (answers) => answers.role === "Intern",
    message: "Please type your school"
},

{
    type: "confirm",
    name: "confirm",
    message: "Would you like to add another team member?"
}

])
    
switch(answers.role){

    case "Manager":
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        break;

    case "Engineer":
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        break;

    case "Intern":
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        break;

}

fs.existsSync(OUTPUT_DIR) ? null : fs.mkdirSync(OUTPUT_DIR);

if(answers.confirm === true){
                
        PromptUser()
            
        }

        else {

            fs.writeFile(outputPath, render(team), (err) =>
            err? console.log(err) : console.log("Success! HTML file has been generated"));
        }
    

}


PromptUser();
