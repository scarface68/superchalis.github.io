const quizDB = [
    {
        question: "Q1: Whose nickname was 'JANA'?",
        a: "PRT",
        b: "Bismay",
        ans: "ans1"
    },
    {
        question: "Q2: Who was the Ramanujan of our class?",
        a: "Surya",
        b: "Sarthak",
        ans: "ans2"
    },
    {
        question: "Q3: Who had the best food in almirah?",
        a: "Malla",
        b: "Pratik",
        ans: "ans1"    
    },
    {
        question: "Q4: Whose name was 'GEHU'?",
        a: "Sai Chandan",
        b: "Bramha",
        ans: "ans2"
    },
    {
        question: "Q5: If someone comes to your room looking for stuffs whose room do u send him to?",
        a: "Sai Satyam",
        b: "Khuntia",
        ans: "ans1"
    },
    {
        question: "Q6: Who was the best singer?",
        a: "Soumyadeep",
        b: "Aniruddha",
        ans: "ans1"
    },
    {
        question: "Q7: Who was formerly called 'KAMLESH'?",
        a: "Smruti",
        b: "Shourya Buku",
        ans: "ans2"
    },
    {
        question: "Q8: Who is the husband of Sradha Mam?",
        a: "Chirag",
        b: "Whoever actually is",
        ans: "ans1"
    },
    {
        question: "Q9: Who stole Ruturaj's mobile?",
        a: "Guru",
        b: "Sai, Amiya, Ronak literally everyone else",
        ans: "ans1"
    },
    {
        question: "Q10: Whose presence was mandatory at birthday bombs?",
        a: "Akhil",
        b: "Ainesh",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question; 

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnsElement) => {
        if(currentAnsElement.checked){
            answer = currentAnsElement.id;
        }
    }); 
    return answer;
};

const deselect = () => {
    answers.forEach((currentAnsElement) => currentAnsElement.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }

    questionCount++;


    deselect();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} &#x1F60D</h3>
        <button class="btn" onclick="location.reload()">TRY AGAIN</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});

