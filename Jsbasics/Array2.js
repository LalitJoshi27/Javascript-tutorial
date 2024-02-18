const name= ["Lalit", "Shubham", "Rohit"]
const caste= ["Joshi","Sharma","Verma"]
  //name.push(caste)
  //console.log(name);
  // Here caste Array will passed in the name as a single element
  // if we have to acces caste element we have to use name[index][caste array index]
//***************//
// Concate method
//const arr1= name.concat(caste)
//console.log(arr1);
// This will concate element of both element
// limitation is only two array can concatinate
//************
// Spread
//const newar= [...name,...caste]
//console.log(newar)
// This is also used to combining array 
// this will covert array element into single single element and this can combine unlimited array no limitaion
// ******************
// Flat
 // This property is used for converting into a single array if any array has multiple array inside it
 // then flat function is used
 // it concatenate the array inside array into single array 
 const example= [1,2,[1,2,[5,6,7],5],7,8,[0]]
 const ex= example.flat(Infinity)// Here infinity is used for depth means how many array you hae to concatenate
 console.log(ex)