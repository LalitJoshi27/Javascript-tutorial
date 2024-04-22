
// For Loop *********************************************8
// Used when we have to do  task many times
// Syntax of Loop
 let array= [1,2,3,4,5,6,7,8,9,10]
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element==5){
      console.log("Detected");
      //break;// Use of break keyword only 1,2,3,4 will be printed
      continue;
    }
    console.log(element);
  }

  for (let i = 1; i <= array.length; i++) {
    console.log(`Table of ${i}`);
     for (let j = 1; j <=array.length; j++) {
       console.log(i+`*`+j+`=`+i*j);
     }
    
  }

  // While Loop **************************************************
  // Syntax  
  let num= 0;
  while (num<=10) {
    console.log("Condition is true");
    num=num+1;
  }

  let arr= ['hello','hi','namaste']
  let len=0;
  while (len<arr.length) {
    console.log(arr[len]);
    len= len+1;
  }

  // Do While Loop****************************************888
  // First Work then condition
  // Syntax......
  let score=1;
  do {
    console.log(`Score is ${score}`);
    score++;
  } while (score<=10); // Here output will be 1 to 10
  // What if the score is 11 so the output will be 11 becauser one time the do while will be run