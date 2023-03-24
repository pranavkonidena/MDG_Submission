#! /usr/bin/env node
const yargs = require('yargs')
const request = require('request')
const { pwEtr , pwNetr} = require('./utils.js')
const colors = require('colors');
colors.enable()


const usage = colors.bold("                 *********************** \n")+ colors.yellow(("\n List of commands \n")) + colors.red(" Usage: pgen --type <type> --options<option-value>");
const options = yargs  
      .usage(usage)                                                                  
      .help(true) 
      .option('type' , {description: "Enter etr for an easy to remember password, and netr for a random password"})
      
      .option('kind' , {description: "If type is "+colors.underline.bgRed("etr") + ", kind gives you a password with those keywords \n a- animals \n i- instruments \n c- colors \n s- shapes \n f- food \n sp- sports \n t- transport "})
    
      .option('length' , {description: "If the type is " +colors.underline.bgRed("netr") +" , this sets the length of the password"})
      .option('en' , {description: "If the type is " +colors.underline.bgRed("netr") +" , this option when set to true, generates a password free from numbers"})
      .option('esc' , {description: "If the type is "+colors.underline.bgRed("netr") +"this generates a password free from special characters when set to true."})


     
      .argv
      

if(yargs.argv.type == "etr"){
    module.exports.kind = yargs.argv.kind
    pwEtr()
}
else if(yargs.argv.type == "netr"){
    let length = yargs.argv.length;
    let exclude_numbers = yargs.argv.en;
    let exclude_special_chars = yargs.argv.esc;
    module.exports.length = length;
    module.exports.exclude_numbers = exclude_numbers;
    module.exports.exclude_special_chars = exclude_special_chars;

    pwNetr()
}
else{
   console.log("Enter pgen --help for more details.")
}
