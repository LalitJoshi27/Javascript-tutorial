//****************** */
//            Javascript Execution Context        //
 /* how javascript runs a program
   let var1= 10
   let var2=5
   function addtwo(num1,num2){
    total = num1+num2
    return total
   }
   let result1= console.log(addtwo(val1,val2))
   console.log(addtwo(4,5))
  1. {} -> Global Execution Context
 there can be different global execution context
  for browser window object is global exceution context
   * Global Execution COntext
    **Function Execution Context
      *** Eval Execution Context
 2. Memory Creation Phase or Creation phase
This phase allots memory 
    Exeution Phase
    1. Global Execution -> It runs with Global exceution and allocates in this
    2. Memory Phase -> all variable are stored in memory phase
    for ex: 1st Cycle
            val1 : undefined
            val2: undefined
            addnum: definition
            result1: undefined
            result2:undefined
    3. Execution Phase->
    for ex: 2nd cycle
           val1:10
           val2: 5
           result1:addnum -> | New variable enivironment |
                     | Execution thread          | it will delete after work
              1. Memory Phase  2. Execution Phase
              val1:undefined     num1: 10
              val2: undefined    num2: 5
              total: undefined       15
              here total value will be return to global exeuction context
              after delete we come to global execution context
              result2: addnum | NVE      |
                                +
                                Thread   |
                              |         |
               total return the value to result 2.


    ******* Call Stack *******
    |              |
    |______________|   // Lifo is used for executing
    |              |
    |______________|
    | three()      |
    |______________|
    |      two()   |
    |______________|                
    |  one()       |
    |______________|
    |Global Context|
    |______________|
*/