const whatsapp= new Object()// This is a singleton or constructor method for creating objects
console.log(whatsapp)
const whatsapp1={}// This is a object literal methof for creating objets
console.log(whatsapp1)
const regularUser={
    email: "123@gmail.com",
    fullname: {Userfullname:{
        name: "Lalit",
        caste:"Joshi"
    }
}
}
console.log(regularUser)
console.log(regularUser.fullname.Userfullname.name)
// we can store object inside any object
const obj1={
    1:"A",2:"b"
}
const obj2={
    3:"c",4:"D"
}
//const obj3= Object.assign({},obj1,obj2)// Assign is used to combine objects here,{} is 
//used for storing the object values or it is target for storing the value from source
// Spread Method 
// this is a ... method to combine objects
const obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3)) // This is used for taking all the keys from an object
console.log(Object.values(obj3))// This is used for taking all the values from an object
console.log(Object.entries(obj3))// This is used for taking both values
console.log(obj3.hasOwnProperty("1")) // This is used for that a object has the property or not