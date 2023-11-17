// A class representing a Question Paper Generator
class QuestionPaperGenerator {
    // Constructor takes a QuestionStore instance as a parameter
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    // Method to generate a question paper based on total marks and difficulty distribution
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      // Array to store the generated question paper
      const questionPaper = [];
  
      // Array containing difficulty levels based on the provided distribution
      const difficultyLevels = Object.keys(difficultyDistribution);
  
      // Iterating through each difficulty level
      difficultyLevels.forEach((difficulty) => {
        // Calculating the required marks for the current difficulty level
        const requiredMarks = (totalMarks * difficultyDistribution[difficulty]) / 100;
  
        // Retrieving questions from the QuestionStore based on the difficulty level
        const questions = this.questionStore.getQuestionsByDifficulty(difficulty);
  
        // Displaying a warning if no questions are found for the current difficulty level
        if (questions.length === 0) {
          console.warn(`No questions found for difficulty level: ${difficulty}`);
          return;
        }
  
        // Variables to track cumulative marks and select random questions
        let cumulativeMarks = 0;
  
        // Selecting random questions until the required marks are reached
        while (cumulativeMarks < requiredMarks) {
          // Randomly selecting a question from the available questions
          const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  
          // Adding the selected question to the question paper and updating cumulative marks
          if (randomQuestion) {
            questionPaper.push(randomQuestion);
            cumulativeMarks += randomQuestion.marks;
          }
        }
      });
  
      // Returning the generated question paper
      return questionPaper;
    }
  }
  
  // Exporting the QuestionPaperGenerator class to make it available for other modules
  module.exports = QuestionPaperGenerator;
  