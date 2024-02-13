// Example of Stack
let name="LALIT";
let anothername= name;
anothername="Joshi";
console.log("name")
console.log(anothername)
//output will be LALIT and Joshi
// This provides the copy of the original value not the original value
// So changes will held in only the copy value

// Heap Memory
let name1= {
    name:"Lalit",
    email:"Joshi@gmail.com"
}
name2= name1;
name2.email= "lalit@gmail.com"
console.log(name1)
console.log(name2)
//output will be lalit@gmail.com for both of the name1 and name2
// Here changes will happen in the actual value also because it provide the refernce of the value