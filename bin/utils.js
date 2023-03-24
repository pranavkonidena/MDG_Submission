const request = require('request');
const index = require('./index.js')
const colors = require('colors');
colors.enable()
const pwEtr = () => {
    switch (index.kind) {
      case "i":
        
        request.get({
          url: "https://password.ninja/api/password?animals=false&instruments=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
   
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
  
          }
      
          }
      
      )
        break;
      case "a":
        
        request.get({
          url: "https://password.ninja/api/password?animals=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
      case "c":
        
        request.get({
          url: "https://password.ninja/api/password?animals=false&colours=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
      case "s":
        
        request.get({
          url: "https://password.ninja/api/password?animals=false&shapes=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
      case "f":
       
        request.get({
          url: "https://password.ninja/api/password?animals=false&food=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
      case "sp":
       
        request.get({
          url: "https://password.ninja/api/password?animals=false&sports=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
      case "t":
       
        request.get({
          url: "https://password.ninja/api/password?animals=false&transport=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        
        break;
      default:
       
        request.get({
          url: "https://password.ninja/api/password?animals=true"},
          function(error, response, body){
              if(error) return console.error("request failed: " + error);
              // else if(response.statuscode!=200) return console.error("Sorry,can't fetch that")
              else{
                  password = body.slice(2 , -3);
  
                  console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
                  
      
          }
      
          }
      
      )
        break;
    }

}



const pwNetr = () => {
    request.get({
        url: "https://api.api-ninjas.com/v1/passwordgenerator?length="+index.length+"&exclude_numbers="+index.exclude_numbers+"&exclude_special_chars="+index.exclude_special_chars,
        headers: {
          'X-Api-Key': '364b25SGTA0S7WnRdpNvPA==TE7DrbB3lv6YjT1u'
        },
      }, function(error, response, body) {
        if(error)  console.log('Request failed, Our server is a bit busy right now. Please retry');
        else if(response.statusCode != 200)  console.log('Please try again , our servers encountered an error');
        
        else {

        password = body.slice(21,-2)
        console.log(colors.italic(colors.yellow("A random password for you is: \n")) +  colors.green(password));
        }
        
      });

}








module.exports = { pwEtr , pwNetr}