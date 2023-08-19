const path = require("node:path")
const http = require('http')

http.createServer(function(req,res){
res.write("Hello world")
res.end()
}).listen(5050)

console.log(__filename)
console.log(__dirname)
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__dirname))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.format(path.parse(__filename)))
console.log(path.isAbsolute(__filename))




class superHero {
constructor(name){
    this.name = name
    
}

getName(){
    return this.name
}
setName(name){
this.name = name
}

}


const obj1={   name:"abhilash"  }

let obj2 = obj1

      obj2 = { 
        name:"zachariah"
      }

console.log(obj1);
console.log(obj2);




module.exports=new superHero("Batman")




function greet(name){
console.log("Hello"+name);
}

function NameAssign (callback){
    const name = " abhilash"
    callback(name)
}

NameAssign(greet)