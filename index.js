// Imports the inquirer module
const inquirer = require("inquirer");
// Imports the path module
const path = require("path");
// Imports the fs module
const fs = require("fs");
// Imports the validator module
const validator = require('validator');
// These lines import classes defined in separate files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");