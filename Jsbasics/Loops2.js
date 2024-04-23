// For of.......**********************************************

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const val of arr) {
    // Here iterator can be any which will be used for iterating in the array
    // object is that in which value we are using loop
    console.log(val);
}
const greet= "Greetings TO LALIT";
for (const val of greet) {
    if(val===" "){
        continue
    }
    console.log(`Char is ${val}`);
}

// Maps*******************************************

const map = new Map();
map.set('In','India')
map.set('Usa','United States of America')
map.set('SL','Srilanka')
console.log(map);
// Map is unique no duplicates value will be inserted
// Accesing value using forof
for (const [key, val] of map) {
    console.log(key,':-',val);
}

const myObject={
    'game1':"Cricket",
    'game2':'Volleyball'
}
// It is throwing error because forof not works in the objects
//for (const [key,val] of myObject) {
  //  console.log(key,':-',val);
//}
// ForIn Loop********************************************************************8
for (const key in myObject) {
    console.log(key,myObject[key]);
}
const programming=["c","cpp","java","js","html","python"]
for (const key in programming) {
    console.log(key,programming[key]);
}
// Iteration is not done in map using forin loop
// It will not throw any error but also not print anything because for in not works in map
for(const key in map){
    console.log(key);
}
     
// ForEach Loop***************************
// This is high order loops and a callback function 

const coding=["c","cpp","java","js","react"]
coding.forEach( function (value){
    console.log(value);
}) // There is no name of callback function
// Using Arrow function
coding.forEach((value)=>{
    console.log(value);
})
function printme(item){
   console.log(item);
}
coding.forEach(printme)
coding.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

const mycoding=[
    {
        LangName: "Javascript",
        LangFileName:"JS"
    },
    {
        LangName: "Java",
        LangFileName:"Java"
    },
    {
        LangName: "C",
        LangFileName:"C"
    }
]
mycoding.forEach((item)=>{
   console.log(item.LangName); // Method to access the object value inside for each loop
})
// ForEach method dosen't return anything