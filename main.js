// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("dateShow").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numString = () => {
  let num = document.getElementById("numberString").value
  const numberToString = num.toString()
  document.getElementById("stringShow").innerHTML = numberToString
  console.log(numberToString);
}



// function numString() {
//   let num = 15;
//   const numberToString = num.toString();
// }

// Write a JavaScript program to convert a string to the number.

const stringNum = () => {
  let string = document.getElementById("stringToNumber").value;
  const stringToNumber = parseInt(string)
  document.getElementById("numShow").innerHTML = stringToNumber
  console.log(stringToNumber)
}



// function stringNum () {
//   const a = parseInt ("10")
// }


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

const getTypeOf = () => {
  const imput = document.getElementById("typeOf").value;
  if (input == "true") {
    console.log("You have a Boolean!")
  }
  else if (input == "false") {
    console.log("You have a Boolean!")
  }
  else if (input == "") {
    console.log("You have a Undefined!")
  }
  else (input == "null") {
    console.log("Your input is null")
  }
}


// const getType = () => {
//   let input = document.getElementById("typeOf").value;
//   const type = typeof(input);
//   document.getElementById("typeShow").innerHTML = type;
//   console.log(type)
// }



// const getType = (data) =>{
//   console.log(typeof(data));
//   }
//   getType(5)

  
// Write a JavaScript program that adds 2 numbers together.

const addNumbs = (x,y) => {
  let sum = parseInt(x) + parseInt(y);
  document.getElementById("showAdd").innerHTML = sum;
  console.log(sum);
}


// const add = (x, y) => {
//   return (x + y);
//   console.log()
// }
// add(5,9)


// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true. 

const checkBool = (boolFirst, boolSecond) =>{

  // let boolFirst = document.getElementById("firstBool");
  // let boolSecond = document.getElementById("secondBool");

  if(boolFirst == true && boolSecond == true){
  return "Both values are true";
  console.log(result)
  }
  else if(boolFirst == false && boolSecond == true || boolFirst == true && boolSecond == false){
  return "Only one of these values are true"
  }
  else if(boolFirst == false && boolSecond == false){
  return "Both values are false"
  }
  else{
  return "You did not put a bool in the box! Please only put in either true or false in the input!"
  }
  // let return = result ""
  // document.getElementById("boolshow").innerHTML = return
  }

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
