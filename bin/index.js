#! /usr/bin/env node
const yargs = require('yargs')
const request = require('request') // Allows to request data using api
const { pwEtr , pwNetr} = require('./utils.js') // Getting functions from another file to increase code modularity
const colors = require('colors'); // Allows display of colored output in terminal
colors.enable() 

// Code for help section of CLI
const usage = colors.bold("                 *********************** \n")+ colors.yellow(("\n List of commands \n")) + colors.red(" Usage: pgen --type <type> --options<option-value>");
const options = yargs  
      .usage(usage)                                                                  
      .help(true) 
      .option('type' , {description: "Enter etr for an easy to remember password, and netr for a random password"})
      
      .option('kind' , {description: "If type is "+colors.underline.bgRed("etr") + ", kind gives you a password with those keywords \n a- animals \n i- instruments \n c- colors \n s- shapes \n f- food \n sp- sports \n t- transport "})
    
      .option('length' , {description: "If the type is " +colors.underline.bgRed("netr") +" , this sets the length of the password"})
      .option('en' , {description: "If the type is " +colors.underline.bgRed("netr") +" , this option when set to true, generates a password free from numbers"})
      .option('esc' , {description: "If the type is "+colors.underline.bgRed("netr") +" , this generates a password free from special characters when set to true."})


     
      .argv
      
// When user chooses etr, the "kind" of the keywords he/she wishes to use are given and the function is called which fetches the password.
if(yargs.argv.type == "etr"){
    module.exports.kind = yargs.argv.kind
    pwEtr()
}
// Code for when the user tries to generate a password randomly
else if(yargs.argv.type == "netr"){
    let length = yargs.argv.length;
    let exclude_numbers = yargs.argv.en;
    let exclude_special_chars = yargs.argv.esc;
    module.exports.length = length;
    module.exports.exclude_numbers = exclude_numbers;
    module.exports.exclude_special_chars = exclude_special_chars;

    pwNetr()
}
// If no argument is given, user is asked to enter pgen --help so that all commands and instructions may be shown
else{
   console.log("Enter pgen --help for more details.")
}
