var questions = [{
	"question": "What is your Faculty?",
	"option1": "ICS",
	"option2": "ENG",
	"option3": "Business",
	"option4": "Mass Comm",
	
}, {
	"question": "What is your favorite movie type?",
	"option1": "Horror",
	"option2": "Action",
	"option3": "Comedie",
	"option4": "Drama",

}, {
	"question": "What do you expect to get back from reading?",
	"option1": "Fun",
	"option2": "Knowledge",
	"option3": "Wasting Time",
	"option4": "None of those",
}];

var currentQuestion = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var OpenButton = document.getElementById('OpenButton');
var resultCont = document.getElementById('result');
var pressDN = 0; var pressUN = 0;
var pressDC = 0; var pressUC = 0;
var pressDM = 0; var pressUM = 0;
var pressDB = 0; var pressUB = 0;
var pressR = 0; var pressL = 0;

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};
function OPEN (){
    window.open('Quot.html');
}

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
        OpenButton.style.display = '';
        resultCont.textContent = 'Now chose from those qouts: ';
        nextButton.textContent = 'Next';
        return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);


function GoDownN(){
            pressDN++;
            if(pressDN == 1){
             firstN.style.display = "none";
            }
            if(pressDN == 2){
                secondN.style.display = "none";
                pressDN = 0;
            }
        }
function GotopN(){
            pressUN++;
            if(pressUN == 1){
                secondN.style.display = "block";
            }
            if(pressUN == 2){
                firstN.style.display = "block";
                pressUN = 0;
            }
        }
function GoDownC(){
            pressDC++;
            if(pressDC == 1){
             firstC.style.display = "none";
            }
            if(pressDC == 2){
                secondC.style.display = "none";
                pressDC = 0;
            }
        }
function GotopC(){
            pressUC++;
            if(pressUC == 1){
                secondC.style.display = "block";
            }
            if(pressUC == 2){
                firstC.style.display = "block";
                pressUC = 0;
            }
        }
function GoDownM(){
            pressDM++;
            if(pressDM == 1){
             firstM.style.display = "none";
            }
            if(pressDM == 2){
                secondM.style.display = "none";
                pressDM = 0;
            }
        }
function GotopM(){
            pressUM++;
            if(pressUM == 1){
                secondM.style.display = "block";
            }
            if(pressUM == 2){
                firstM.style.display = "block";
                pressUM = 0;
            }
        }
function GoDownB(){
            pressDB++;
            if(pressDB == 1){
             firstB.style.display = "none";
            }
            if(pressDB == 2){
                secondB.style.display = "none";
                pressDB = 0;
            }
        }
function GotopB(){
            pressUB++;
            if(pressUB == 1){
                secondB.style.display = "block";
            }
            if(pressUB == 2){
                firstB.style.display = "block";
                pressUB = 0;
            }
        }
function Goright(){
    pressR++;
    if(pressR == 1){
        img10.style.display = "none";
    }
    if(pressR == 2){
        img11.style.display = "none";
    }
    if(pressR == 3){
        img12.style.display = "none";
        pressR = 0;
    }
}
function Goleft(){
    pressL++;
    if(pressL == 1){
        img12.style.display = "block";
    }
    if(pressL == 2){
        img11.style.display = "block";
    }
    if(pressL == 3){
        img10.style.display = "block";
        pressL = 0;
    }
}

function ff(){
    window.open("Preference.html");
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
function myFunction(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show");},3000);
}
function ResetFunction(){
    var x = document.getElementById("msg");
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show");},3000);
}