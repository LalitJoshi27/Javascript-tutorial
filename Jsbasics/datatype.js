"use strict";// treat all Js code as new Js version
//alert("HELLO LALIT") We are using Node js so it will not run if we will do it in browser it will run
// Js is dynamically typed language
let name="Lalit" //String
let age= 22 //number
let isLoggedIn= false //boolean

// number => 2 power 53
//bigint= for bigger numbers
//string => "" ''
//boolean =>true/false
//null=> Standalone value(Representaion of empty value)
//undefined=> NO value assign
//symbol=> unique

//object=> used for key and value

console.log(typeof(age))
console.log(typeof null)// type of null is object
console.log(typeof undefined)// type of undefined is undefined
//2 type of data types:
// 1.Primitive Data types

//7 types:  String , Number, Boolean, null , undefined, Symbol, BigInt (call by value)
 // Call by value is providing copy not the acutal refernce of data
//*****//
 //Javascript is Dynamically typed laguage
// No need of declaring type of variables.

const id= Symbol("121")
const anotherid= Symbol("121")
console.log(id==anotherid)
// It will result false because value of id and anotherid will not be same
//2. Reference or Non Primitive Data Types

//Array, Object, Function
const bignum= 1011003098938587876567684n
//How to areate array
let arr= [1,2,3,4];
//How to create object
let obj={
    "firstname":"Lalit",
    "Lastname": "Joshi"
}
//How to create Function
let fun=function hello(){
    console.log( "Hello")
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let a;
console.log(obj);
console.log(fun);
console.log(typeof 10) //number
console.log(typeof obj)// object
console.log(typeof arr)// object
console.log(typeof bignum)//BigInt
console.log(typeof fun)//Function
console.log(typeof null)//object
console.log(typeof a)//undefined
console.log(typeof id)//Symbol
