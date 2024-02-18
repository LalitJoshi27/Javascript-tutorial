const arr= [1,2,3,4,5]
console.log(arr)
// USES SHALLOW COPY SHARE THE SAME REFERENCED OF THE VALUE

//arr.push(6)
//console.log(arr)
// push add the value in the last
//arr.pop()
//console.log(arr)
// pop remove the value from the last
arr.unshift(0)
console.log(arr);
//unshift is used for adding the value in the first
arr.shift()
console.log(arr);

// Use of Join
 const newarr= arr.join()
 console.log(arr);
 console.log(newarr);
 // Join is used for binding the array and converting array into string

 // Slics and Splice

 console.log("A ", arr);
 const n1=arr.slice(0,4)
 console.log(n1);
 console.log("B ", arr);
 const n2= arr.splice(0,3)
 console.log("C ", arr);
 console.log(n2);

 // Slice is used for taking/copying a section of array
 // it uses a starting index and ending index arr.slice(0,3)
 // here o will include but 3 will not copied by the slice method
 // slice method dosen't change the original array
 
 // Splice is used for same as slice for copying a section of array
 // here arr.splice(0,3) both 0 and 3 will be included for copying
 // but the main differnce between slice and splice is splice also change the orignal array
 // splice method remove the element from the given the range which is included in splice method
 //A  [ 1, 2, 3, 4, 5 ]  Original array
 //[ 1, 2, 3, 4 ]   slice method(0,4)
 //B  [ 1, 2, 3, 4, 5 ] ORIGINAL ARRAY
 //C  [ 4, 5 ]   Original array after the splice method
 //[ 1, 2, 3 ] data from the splice method