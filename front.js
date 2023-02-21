const fs = require('fs')

//create a file named mynewfile1.txt:
fs.open('myfirst.txt', function (err,) {
  if (err) throw err;
  console.log('text file is created');
});


fs.writeFile('myfirst.txt','now i learning ',function(a){
    if (a) throw err;
    console.log("the content is added");
})


fs.appendFile('myfirst.txt','Node.js',function(a){
    if (a) throw err;
    console.log("the content is append");
})


fs.readFile('myfirst.txt',function(a,data){
    if (a) throw err;
    console.log(data.toString());
})

function deleted() {
    fs.unlink("myfirst.txt",function(b){
        if(b) throw err;
        console.log("deleted")
    })
    
 } 
//  deleted()
