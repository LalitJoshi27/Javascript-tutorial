function Saymyname(){
    console.log("L")
    console.log("A")
    console.log("L")
    console.log("I")
    console.log("T")
}
Saymyname()
// Here num1,num2 are parameters
function add(num1,num2){
   return num1+num2
   //console.log("Lalit") after return no code will work
}
const result=add(3,4)// 3,4 are arguments
console.log(result)
add(3,"4") // Javascript convert the 3 into string because 4 is treated as string
add(3,null)
add(3,"a")

function LoggedIn(username){
    return `${username} just loggedIn` // String interpolation using backtick
}
console.log(LoggedIn("Lalit")) 
// If WE want a default case in function if we are not passing anything in arguments
// then we can assign a default value to prameter in a function
// for example function name(username="Lalit")
// then if didn't pass anything in function calling then default value lalit is used for function
// Here ...num1 ia used as rest method
function CalculateCart(...num1){
    return num1
}
//if we use fuction CalculateCart(val1,val2,...num){
//    return num
//} Here output will be 18 becaue 15 is val1 and 12 is val2 so rest of value in arguments is under ...num
//console.log(CalculateCart(15,12,18)) // This will return the first value which is 15
console.log(CalculateCart(15,12,18)) //if we want all of the value in an array we have to use rest function 

// Passing Object in function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} Price is ${anyobject.Price}`)
}
handleObject({
    Username:"Lalit",// here we can pass an object which can created earlier
    Price:50000
})

// Passing Array in function
const myArray= [10,20,30,40]
function getSecondValue(getArry){
    return getArry[1]
}
console.log(getSecondValue(myArray))