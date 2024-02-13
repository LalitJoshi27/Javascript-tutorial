const name="Lalit"
const sem= 4
let course= 'MCA'
console.log(`Hello my name is${name} and my course is${course} and my sem is ${sem} `)
// This is knoen as String interpolation 
const fullname= new String("LalitJoshi")
console.log(fullname+ typeof(fullname))// type is Object
console.log(fullname[0])
for(let i=0;i<fullname.length;i++){
    console.log(fullname[i].toUpperCase())
}
console.log(fullname.charAt(2))
console.log(fullname.indexOf('o'))
console.log(fullname.includes('i'))
let newstring= fullname.slice(0,4)
console.log(newstring)// it will include only the 0 to 3 not the 4 
let newstring1= fullname.slice(-10,4)
console.log(newstring1)
let newstring2= "   Lalit    "
console.log(newstring2.trim())// it is use to remove extra spaces 
const name3= "Shubham-%20-joshi"
console.log(name3.replace("%20"," "))
console.log(name3.split("_"))