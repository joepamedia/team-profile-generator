const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
// value is fixed as it's referenced in multiple locations
const MANAGER_TYPE = "Manager";
const ENGINEER_TYPE = "Engineer";
const INTERN_TYPE = "Intern";
const employeeArray = [];
// functions
const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What do you want to do next?",
        choices: ["Add an Engineer.", "Add an Intern.", "I am done building my team."],
      },
    ])
    .then((answers) => {
      // question response answers

      switch (answers.option) {
        case "Add an Engineer.":
          // run code to add engineer
          collectEmployeeInfo(ENGINEER_TYPE);
          break;
        case "Add an Intern.":
          collectEmployeeInfo(INTERN_TYPE);
          break;
        case "I am done building my team.":
          // run code to finish/generate HTML
          createHTML(employeeArray);
          break;

        default:
          throw new Error("Option not recognized");
          break;
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error); // Something else went wrong
      }
    });
};

// use inquirer here to ask questions and create html
const collectEmployeeInfo = (employeeType) => {
  inquirer
    // asks questions in terminal
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
      },
      {
        type: "input",
        name: "officeNum",
        when: () => employeeType === MANAGER_TYPE,
        message: "What is your employee's office number?",
      },
      {
        type: "input",
        name: "github",
        when: () => employeeType === ENGINEER_TYPE,
        message: "What is your employee's Github username?",
      },
      {
        type: "input",
        name: "school",
        when: () => employeeType === INTERN_TYPE,
        message: "Where does your employee go to school?",
      },
    ])
    .then((answers) => {
      // question response answers

      switch (employeeType) {
        case MANAGER_TYPE:
          // create manager object
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
          employeeArray.push(manager);
          mainMenu();
          break;
        case ENGINEER_TYPE:
          // create "Engineer" object
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employeeArray.push(engineer);
          mainMenu();
          break;
        case INTERN_TYPE:
          // create intern object
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          employeeArray.push(intern);
          mainMenu();
          break;

        default:
          throw new Error("Option not recognized");
          break;
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  //destructured
};

// generates special properties of the workers
function generateSpecial(worker) {
  // executes when user creates manager
  if (worker.getRole() === MANAGER_TYPE) {
    return `<li class="list-group-item">Office Number: ${worker.getOfficeNum()}</li>`;
  }
  // executes when user creates engineer
  if (worker.getRole() === ENGINEER_TYPE) {
    return `<li class="list-group-item">Github: <a target="_blank" href="https://github.com/${worker.getGithub()}">
    ${worker.getGithub()}</a></li>`;
  } else {
    // executes when user creates intern
    return `<li class="list-group-item">School: ${worker.getSchool()}</li>`;
  }
}

function makeCard(workers) {
  let managerCardHTML = "";
  workers.forEach((worker) => {
    // manager card
    managerCardHTML += `<div class="card text-black bg-info d-flex p-1 mx-4" style="width: 16rem">
    <div class="card-header font-weight-bold text-center h4">${worker.getRole()}</div>
    <ul class="list-group list-group-flush h6">
      <li class="list-group-item">Name: ${worker.getName()}</li>
      <li class="list-group-item">ID: ${worker.getId()}</li>
      <li class="list-group-item">Email: <span id="email"><a href="mailto:${worker.getEmail()}">
      ${worker.getEmail()}
      </a></span></li>
      ${generateSpecial(worker)}
    </ul>
  </div>`;
  });
  return managerCardHTML;
}

const createHTML = (employees) => {
  // pass an array of employees
  const htmlFile = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    </head>
    <body>
    
    <div class="jumbotron jumbotron-fluid">
    <div class="container text-center">
      <h1 class="display-4">Team Profile Generator</h1>
      <p class="lead">Check out your team below!</p>
    </div>
  </div>
      <div class="d-flex justify-content-center">
      ${makeCard(employees)}
      </div>
    </body>
    </html>`;

  fs.writeFile("./dist/index.html", htmlFile, (err) => (err ? console.log(err) : console.log("Successfully created index.html!")));
};

collectEmployeeInfo(MANAGER_TYPE, ENGINEER_TYPE, INTERN_TYPE);

// we want to create a card for each employee created starting w/ manager
//collect employee information
//    collect manager info
//    ask user what to do next
//      add new team member
//        collect team member info
//
//      or finish
// create employee cards
// create html document
