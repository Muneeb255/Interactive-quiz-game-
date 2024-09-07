// Define the quiz questions (10 questions)
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2 // Index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
        answer: 0
    },
    {
        question: "How many continents are there?",
        choices: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1912", "1915", "1905", "1910"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Diamond", "Iron", "Quartz"],
        answer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
        answer: 1
    }
];

// Variables to track the current question and score
let currentQuestion = 0;
let score = 0;

// Get elements from the HTML
const questionEl = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const scoreEl = document.getElementById('score');
const nextButton = document.getElementById('next-question');
const endScreen = document.getElementById('end-screen');
const finalScoreEl = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again');

// Function to show the current question and choices
function showQuestion() {
    const current = questions[currentQuestion]; // Get the current question
    questionEl.textContent = current.question;  // Display the question
    
    // Display each choice on the buttons
    optionButtons.forEach((btn, index) => {
        btn.textContent = current.choices[index]; 
        btn.style.backgroundColor = ''; // Reset button colors
    });
}

// Function to check if the clicked answer is correct
function checkAnswer(event) {
    const chosenBtn = event.target; // The button that was clicked
    const chosenAnswer = Array.from(optionButtons).indexOf(chosenBtn); // Find the clicked button index

    // Check if the selected answer is correct
    if (chosenAnswer === questions[currentQuestion].answer) {
        chosenBtn.style.backgroundColor = 'green'; // Correct answer
        score++; // Increase score
    } else {
        chosenBtn.style.backgroundColor = 'red'; // Wrong answer
    }
    
    // Update the score on the page
    scoreEl.textContent = score;
}

// Move to the next question or end the quiz if finished
function nextQuestion() {
    currentQuestion++; // Go to the next question

    if (currentQuestion < questions.length) {
        showQuestion(); // Show the next question
    } else {
        endQuiz(); // End the quiz
    }
}

// End the quiz and show the final score
function endQuiz() {
    document.getElementById('question-area').style.display = 'none'; // Hide questions
    endScreen.style.display = 'block'; // Show end screen
    finalScoreEl.textContent = score; // Display final score
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = score;
    endScreen.style.display = 'none'; // Hide the end screen
    document.getElementById('question-area').style.display = 'block'; // Show questions
    showQuestion(); // Show the first question
}

// Add event listeners for clicking on answer buttons
optionButtons.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
});

// Add event listener for the "Next Question" button
nextButton.addEventListener('click', nextQuestion);

// Add event listener for the "Play Again" button
playAgainButton.addEventListener('click', restartQuiz);

// Start the quiz by showing the first question
showQuestion();
