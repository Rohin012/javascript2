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

    const quize = document.querySelector('#quize');
    const answerEle = document.querySelectorAll('.answer');
    const[questionEle, option_1, option_2, option_3, option_4]=
            document.querySelectorAll('#question, option_1, option_2, option_3, option_4');
    const submitbtn = document.querySelector('#submit');

    let currentQuiz = '0';
   let score = '0';

    const loadQuiz = () =>{ 

        const{ questionText, options}=questions[currentQuiz];
        console.log(questionText)

        questionEle.innerText= `${currentQuiz +1} :  ${questionText} `;

        options.forEach(
            (currentOption, index)=>(window[ `option_${index + 1}`].innerText= currentOption));
    }

    loadQuiz();

    const getSelectOption = ()=>{

        let answerElement = Array.from(answerEle)
         return answerElement.findIndex((currentEle)=>(currentEle.checked));
    }

    const deselectedOption = ()=>{

       return answerEle.forEach((currentEle)=>( currentEle.checked =false));
    }

    submitbtn.addEventListener('click',()=>{

        const selectedOptinElement = getSelectOption()
        console.log(selectedOptinElement);

        if(selectedOptinElement=== questions[currentQuiz].correctAnswer){

            score = score+1;
        }

        currentQuiz++;

        if(currentQuiz < questions.length){
            deselectedOption();
            loadQuiz();
        }
        else
        {
            quize.innerHTML = `
            <div class='result'>
            <h2>${score}/${questions.length}</h2>
            <button class="reload_button" onclick='location.reload()'>Play Again</button>
            </div>`;
        }
        
    })

  
