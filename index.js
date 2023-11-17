// Importing QuestionStore and QuestionPaperGenerator classes
const QuestionStore = require('./src/questionStore');
const QuestionPaperGenerator = require('./src/questionPaperGenerator');

const questionStore = new QuestionStore();

// Adding questions to the QuestionStore , also we can do it by connecting with database 
questionStore.addQuestion("What is the speed of light", "Physics", "Waves", "Easy", 5);
questionStore.addQuestion("How does photosynthesis work", "Biology", "Ecology", "Medium", 8);
questionStore.addQuestion("Solve for x: 2x + 5 = 15", "Mathematics", "Algebra", "Medium", 10);
questionStore.addQuestion("Who wrote 'Romeo and Juliet'", "Literature", "Shakespeare", "Hard", 12);
questionStore.addQuestion("What is the capital of France", "Geography", "World Capitals", "Easy", 4);
questionStore.addQuestion("Define Newton's First Law of Motion", "Physics", "Mechanics", "Medium", 8);
questionStore.addQuestion("What is the powerhouse of the cell", "Biology", "Cell Biology", "Easy", 6);
questionStore.addQuestion("Find the derivative of y = 3x^2", "Mathematics", "Calculus", "Hard", 15);
questionStore.addQuestion("Who is the author of 'To Kill a Mockingbird'", "Literature", "American Literature", "Medium", 10);
questionStore.addQuestion("What is the largest mammal on Earth", "Biology", "Marine Biology", "Easy", 7);
questionStore.addQuestion("Solve the quadratic equation: x^2 - 4x + 4 = 0", "Mathematics", "Algebra", "Medium", 12);
questionStore.addQuestion("In which year did World War II end", "History", "World War II", "Medium", 10);
questionStore.addQuestion("Who discovered penicillin", "Science", "Medicine", "Hard", 12);
questionStore.addQuestion("What is the currency of Japan", "Economics", "World Currencies", "Easy", 5);
questionStore.addQuestion("What is the atomic number of carbon", "Chemistry", "Periodic Table", "Medium", 8);
questionStore.addQuestion("Who painted the Mona Lisa", "Art", "Renaissance Art", "Hard", 15);
questionStore.addQuestion("Name the longest river in the world", "Geography", "Rivers", "Easy", 6);
questionStore.addQuestion("What is the speed of sound in air", "Physics", "Acoustics", "Medium", 10);
questionStore.addQuestion("What is the function of the liver", "Biology", "Anatomy", "Easy", 7);
questionStore.addQuestion("Simplify the expression: (3x + 2) * (x - 5)", "Mathematics", "Algebra", "Hard", 14);
questionStore.addQuestion("Who was the first President of the United States", "History", "US Presidents", "Easy", 5);
questionStore.addQuestion("What is the chemical symbol for gold", "Chemistry", "Elements", "Medium", 9);
questionStore.addQuestion("Who wrote '1984'", "Literature", "Dystopian Fiction", "Hard", 13);
questionStore.addQuestion("What is the capital of Australia", "Geography", "World Capitals", "Easy", 4);
questionStore.addQuestion("Define the Law of Supply and Demand", "Economics", "Microeconomics", "Medium", 11);
questionStore.addQuestion("What is the structure of a DNA molecule", "Biology", "Genetics", "Hard", 15);
questionStore.addQuestion("Solve the equation: 2sin(x) - 1 = 0", "Mathematics", "Trigonometry", "Medium", 10);
questionStore.addQuestion("Who wrote 'The Great Gatsby'", "Literature", "American Literature", "Hard", 12);
questionStore.addQuestion("What is the largest planet in our solar system", "Astronomy", "Planets", "Easy", 6);
questionStore.addQuestion("What is the boiling point of water in Celsius", "Chemistry", "Physical Chemistry", "Medium", 9);
questionStore.addQuestion("Who painted Starry Night", "Art", "Post-Impressionist Art", "Hard", 14);
questionStore.addQuestion("Name the largest desert in the world", "Geography", "Deserts", "Easy", 5);

// Creating an instance of QuestionPaperGenerator with the initialized QuestionStore
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Specifying the total marks for the question paper and the difficulty distribution
const totalMarks = 100;
const difficultyDistribution = {
  Easy: 20,
  Medium: 50,
  Hard: 30,
};

// Generating the question paper based on the total marks and difficulty distribution
const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Displaying the generated question paper
console.log("Generated Question Paper:", generatedQuestionPaper);
