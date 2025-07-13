const fs = require('fs');
fs.writeFile("hey.txt", "Hello kaise ho", function(err){
  if(err) console.log(err);
  else console.log("Done");
})