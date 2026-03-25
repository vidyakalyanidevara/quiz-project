let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next");
const result = document.getElementById("result");

function loadQuestion(){

let q = questions[currentQuestion];

questionElement.innerText = q.question;

options.forEach((button,index)=>{
button.innerText = q.options[index];

button.onclick = function(){
checkAnswer(index);
};
});

}

function checkAnswer(selected){

if(selected === questions[currentQuestion].answer){
score++;
}

}

nextButton.onclick = function(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

showResult();

}

}

function showResult(){

document.getElementById("quiz-container").innerHTML =
"<h2>Your Score: " + score + " / " + questions.length + "</h2>";

}

loadQuestion();