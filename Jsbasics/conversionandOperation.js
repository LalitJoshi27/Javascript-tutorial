let name= "lalit"
console.log(typeof (name))
let age= 15
console.log(typeof age)
let valueInNumber= Number(name)
console.log(typeof valueInNumber)// it will show type of valueInNumber is Number
console.log(valueInNumber)// NaN is not a value(Number)
// true=> 1&& False=> 0
let loggedIn
let booleanisLoggedIn= Boolean(loggedIn)
console.log(booleanisLoggedIn)
let stringval= String(age)
console.log(stringval)
console.log(typeof stringval)
//  Operation //
let value =15
let negvalue= -value
console.log(negvalue)
console.log(2+2)
console.log(2*2)
console.log(2**3)// this is used for power
console.log(2%4)
//+ is used for conversion in javascript
console.log(typeof("2"+ 2))
console.log(typeof(2+"2"))
console.log("1"+2+2)
console.log(typeof(2+2+"1"+1+1))
console.log("2">1);
console.log("02">1)
//comparsion and equality check(condition) are different.
console.log(null>0)
console.log(null==0) //this will comparing only null to the zero so no conversion is there so it will returning false
console.log(null>=0)// this will return true because null is coverted into a number ,null treated as 0 so 0>=0 it returns true
console.log(null<=0)

console.log(undefined==0)
//Strict check ===
console.log("2"==2)// this will covert 
console.log("2"===2)// this will check data as well as datatypes
