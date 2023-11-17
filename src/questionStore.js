// A class representing a store for questions
class QuestionStore {
    // Constructor initializes an empty array to store questions
    constructor() {
      this.questions = [];
    }
  
    // Method to add a new question to the store
    addQuestion(question, subject, topic, difficulty, marks) {
      // Creating a new question object and pushing it to the questions array
      this.questions.push({
        question,
        subject,
        topic,
        difficulty,
        marks,
      });
    }
  
    // Method to get questions based on their difficulty level
    getQuestionsByDifficulty(difficulty) {
      // Using the filter function to retrieve questions with the specified difficulty
      return this.questions.filter((q) => q.difficulty === difficulty);
    }
  }
  
  // Exporting the QuestionStore class to make it available for other modules
  module.exports = QuestionStore;
  