// Use of This in JAVASCRIPT
const user={
    Username:"Lalit",
    age:23,
     welcomeMessage:function(){
      console.log(`Hi ${this.Username}, Welcome to our website` );
      console.log(this); // here this will return differnt context that this is holding
     }
     // This keyword is used to refer the current context(current context is that what value is in current)

}  
user.welcomeMessage()
user.Username="Shubham"
user.welcomeMessage();
console.log(this); // if we will call this in main it will return empty {} because there is no context in main currently
// const chai = function(){
//     let username="Lalit"
//     console.log(username);
//     console.log(this.username);
// }
// const chai = ()=>{
//     let username="Lalit"
//     console.log(username);
//     console.log(this.username); // bot type of function declration will show undefined using this
// }
// chai()
// const sum= (num1,num2)=>{
//     return num1+num2
// }
// console.log(sum(4,5));
// implicit return : where we don't need to write return keyword
//const sum= (num1,num2)=> num1+num2// this will also work as explicit return type where we have to write return or extra parantheses 
    //**********************8 */
    // Another method to use arrow function is write operation in ()
    const sum= (num1,num2)=> (num1+num2)
      console.log(sum(4,5));// This is also implicit return function 
      // for example if we are returning an object in arrow function
      // we have to write ({Username:"Lalit"}) 
