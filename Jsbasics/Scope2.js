// Scope in Function
function one(){
    let username="Lalit"
    function two(){
        let website="Youtube"
        console.log(username);
    }
 //   console.log(website); // This will throw an error of reference because global scope can no access value of local access but a local scope can access value of global access
    two();
}
one();

// +++++++++++ Basic of Hoisting+++++++++++++//
// Here we are able to access the function before declaring the function this term is called Hoisting where we can acces any function or variable before declaring
console.log(addone(5));
function addone(value){
    return value + 2
}
// This function declration will throw error because in this declration we can not access the function before declaring.
 addtwo(5)
const result= function addtwo(value){
    return value + 2
} 