const month= 2;
switch(month){
   case 1: console.log("Jan")
   break;
   case 2: console.log("Feb");
   case 3: console.log("Mar");
   break;  // break keyword is used for breaking the control flow of the program
   default: console.log("None")
}

// If else
const a=10
const b=20
if(a>5 && b>15){
    console.log("Good")
}
else{
    console.log("wrong");
}

// Falsy value
// false,0,-0,BigInt 0n, null, undefined ,"",nan
// This are those value which are decided to be false

// True value
// "0","false"(Under string)," ", [], {}, function(){}
//

// Nullish Coalescing OPERATOR
//let val1= 5 ?? 10
//console.log(val1);// output will be 5
//let val1= null??10
//console.log(val1); // output will be 10
let val1= null??10??20
console.log(val1); // Here also output will be 10
//Ternary Operator
// Condition?true:false
const mobileprice= 100000;
mobileprice>500000?console.log(true):console.log(false)
