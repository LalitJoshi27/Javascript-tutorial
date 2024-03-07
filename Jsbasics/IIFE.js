// Immediately Invoked Function Expression
//*********** */
// Normal Function calling method
// function chai(){
    // console.log("Database Connected")
// }
//  chai()
//************** */
// Immediately invoked function expression
// For removing the global scope pollution we used IIFE
// and the function which immediately run
// Syntax we have to remember is ()() 
// 1. bracket is for function definition
// 2. bracket is for function calling
// This is a named IIFE
(function chai(){
    console.log('Database Connected')
})(); // Here semicolon is the end of iife function
// if we have to make a anothe IIFE function we have to end the previous iife function with semicolon
// this is a nonamed iife
((name)=>{
    console.log(`Databse is connected ${name}`)
})("Lalit");