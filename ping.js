const fs = require("fs");
const http = require("http");
const request = require("request");

function pingURL(url)
{
 return new Promise((resp, rej) => {
   request(url,{ headers: { 'User-Agent': 'Awake-Glitch' } }, (err, res, body) => {
     if (err) {rej()} else {resp();}
    
     //res();
   });
 });
}

function ping()
{
  if (process.env.DISABLED == "YES") return;
  
  console.log("---");
  
  fs.readFile("./urls-save.json", "utf8", function(err, contents) {
    
      try {
        let j = JSON.parse(contents);
        
        j.forEach((url) => {
          pingURL(url).then(() => {
            console.log(`Sucessfully pinged ${url}!`);
          }).catch((status) => {
            console.log(`Unable to ping ${url}! Status code: NuLl.`);
          });
        });
      } catch(e) {
        console.log(err);
      }
  
    
  });
}

setInterval(() => {
 ping();
}, 300000);  // Here is when the project pings all the URL's on the urls-save.json file every 5 mins.

ping();
