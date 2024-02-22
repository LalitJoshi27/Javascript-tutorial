// Object can be create as two methods 
// 1. Constructor
// 2. Literals

// Singleton
// It is a method of declaring objects using Constructor
// Object.create is a method is used for declaring objects

// Literals is the method where we create object in literals
// for example: const name={}


// Object Literals
 
const Jsuser={} // This is a empty object here {} is object
const mysym= Symbol("key0")// If we are using a symbol in a object first we have to create the symbol
const JSuser={
    name:"Lalit" ,
    // Here we can define keys like in arrays only index number is present 0,1,2,3,
    "fullname":"Lalit Joshi",
    age: 23,
    course: "MCA",
    isLogged: false,
    [mysym]:"key1",
    // WE can also put function in objects
    greeting: function(){
        console.log(`Hello JI ${JSuser.name}`)// This is string Interpolation used for using value.
    }
} // Then using square bracket we can assign value inside the object
console.log(JSuser.course)// Method of accesing object values
console.log(JSuser["course"]);// Method of accesing object values
// Why we use square bracket object method for accesing object values
// In JSuser we have a string as a key in object we can't access the value as .method
// for this we have to use [] bracket method for accesing the string key
console.log(JSuser[mysym])// using square method we can access symbol value 
// If we are not creating symbol using this methods the symbol is used as string
// Stepa are:
//1. Create a symbol outside the object
// const sym= Symbol("Key")
//2. then in object create symbol key which is the variable we have create outside the object in square bracket
// [sym]:"Key1"
//3.the for accesing the value we have to use [] bracket 
// JSuser[sym]
console.log(typeof mysym);
// How to change values in objects
JSuser.isLogged=true
JSuser["fullname"]="Lalit Chandra Joshi"
console.log(JSuser)
//Object.freeze(JSuser)// This is used for freezing the values by which we can't change the object values
JSuser.age=23 
JSuser.greeting()// After frezzing the object it will not throw any error but there will not be any changes in the obeject values
// 



