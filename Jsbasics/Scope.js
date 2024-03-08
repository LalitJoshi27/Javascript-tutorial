// Scope is a range of a variable that where we can acces the variable { }
let a=10 // This is a global variable
//const b=20 
//var c= 30
if(true){
   let a=40 // This is a local variable we can access this variable only inside a local scope { }
   var c=35 // diff between var and let is we cannot access local value in global scope if we are creating variable with let or if we are creating variable with var there is no local and global scope if we can access any variable anywhere
   // if we are creating variable with const keyword the value will be constant and follow local scope and global scope rule
   const b=20;
console.log("Inner:",a);
console.log(b);
console.log(c);
}
console.log("Outer:",a);

