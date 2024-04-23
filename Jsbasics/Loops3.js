// Filter Map and Reduce

//Filter Method***********************************************************
// callback function used to filter the value in the array
const myNumber=[1,2,3,4,5,6,7,8,9,10]
const nums=myNumber.filter((num)=>{
   // console.log(num>4); // If i will do this it will return true and false value not the value of array which is greater then 4
   // If i have to print the value greater then 4 we have to store the filter function in any variable
  return num>4 // this is explicit return
 } // This will check the value greater then 4
)
console.log(nums);

// How to filter value in foreach 
const newarr=[]
myNumber.forEach((num)=>{
    if(num>4){
        newarr.push(num)
    }
})
console.log(newarr);

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
let value=mycoding.filter((val)=> val.LangName==="C")
console.log(value);

// Map method in Loops
// when we want to perform some operation in the existing array
const newnums=myNumber.map((num)=> num+10)
console.log(newnums);
// This is method to use map after map or filter after map
const newnumber=myNumber.map((val=> val*10))
                        .map((val)=>val+1)
                        .filter((val)=>val>40)

console.log(newnumber);

// Reduce Method ********************************************************************************
const values= myNumber.reduce((acc,cur)=>acc+cur,0)
console.log(values);

const myObj=[
    {
        course:"Js",
        price:2999
    },
    {
        course:"Python",
        price:3999
    },
    {
       course:"Java",
       price:5999
    }
]
const result= myObj.reduce((acc,course)=>acc+course.price,0)
console.log(result);