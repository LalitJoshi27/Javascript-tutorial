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
