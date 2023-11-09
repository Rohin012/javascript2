const questions= [
    {
      "questionText": "What is a closure in JavaScript?",
      "options": ["A function that returns a value", "A block of code inside a function", "A function that has access to variables from its outer scope", "A function with no parameters"],
      "correctAnswer": "A function that has access to variables from its outer scope"
    },
    {
      "questionText": "What is the 'this' keyword in JavaScript used for?",
      "options": ["To refer to the current HTML element", "To declare a new variable", "To call a function", "To refer to the current object or context"],
      "correctAnswer": "To refer to the current object or context"
    },
    {
      "questionText": "What is the purpose of the 'JSON' object in JavaScript?",
      "options": ["To format dates", "To manipulate images", "To parse and stringify JSON data", "To create web pages"],
      "correctAnswer": "To parse and stringify JSON data"
    },
    {
      "questionText": "Which built-in JavaScript function is used to add elements to the end of an array?",
      "options": ["push()", "add()", "append()", "concat()"],
      "correctAnswer": "push()"
    },
    {
      "questionText": "In JavaScript, what is the 'NaN' value used to represent?",
      "options": ["Not a Name", "Not a Number", "No Available Nodes", "Not a Null"],
      "correctAnswer": "Not a Number"
    },
    {
      "questionText": "What does the 'setTimeout' function in JavaScript do?",
      "options": ["Clears the screen", "Waits for user input", "Delays the execution of a function", "Triggers an immediate callback"],
      "correctAnswer": "Delays the execution of a function"
    },
    {
      "questionText": "Which operator is used for strict equality comparison in JavaScript?",
      "options": ["==", "===", "!=", "!=="],
      "correctAnswer": "==="
    },
    {
      "questionText": "What is the purpose of the 'document.querySelector()' method in JavaScript?",
      "options": ["To select the first element that matches a CSS selector", "To create a new HTML document", "To add an event listener", "To update the DOM"],
      "correctAnswer": "To select the first element that matches a CSS selector"
    },
    {
      "questionText": "What is the JavaScript event that is fired when an HTML form is submitted?",
      "options": ["onSubmit", "onClick", "onLoad", "onChange"],
      "correctAnswer": "onSubmit"
    },
    {
      "questionText": "What is the purpose of the 'parseInt()' function in JavaScript?",
      "options": ["To parse a floating-point number", "To convert a string to an integer", "To calculate a mathematical expression", "To round a number"],
      "correctAnswer": "To convert a string to an integer"
    }
  ];
  const selectedanws=[];

let index = 0;
    
const display = ()=>{

    document.getElementById('question').innerHTML = questions[index].questionText

    document.getElementById('op1').value= questions[index].options[0]
    document.getElementById('op2').value= questions[index].options[1]
    document.getElementById('op3').value= questions[index].options[2]
    document.getElementById('op4').value= questions[index].options[3]

    document.getElementById('11').innerHTML= questions[index].options[0]
    document.getElementById('12').innerHTML= questions[index].options[1]
    document.getElementById('13').innerHTML= questions[index].options[2]
    document.getElementById('14').innerHTML= questions[index].options[3]


}

const Next =()=>{

  selectedanws[index]= document.querySelector('input[name="ans"]:checked').value;


  let d =  document.querySelector('input[name="ans"]:checked');

   d.checked = false;

    index= index+1
    display()
}
const Pre = ()=>{

    index = index-1
    display()
}
const finalresult = ()=>{

  console.log(selectedanws)

 let d= selectedanws.reduce((pre,value,indexse)=>{

   let findIndex = questions.findIndex((v,index)=>{

     return  indexse ==index && v.correctAnswer ==value;

   })

   if(findIndex >= 0)
   {

       pre = pre +1;
   }

   return pre;

  },0);

  document.getElementById("result").innerHTML =  `${d}/ 10 Final Result`

}

display();