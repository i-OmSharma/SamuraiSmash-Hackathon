import { useState } from 'react';

const QuizTime = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizLink, setQuizLink] = useState('');

  const handleAddQuiz = () => {
    if (quizTitle && quizLink) {
      // Handle quiz creation
      alert(`Quiz "${quizTitle}" added!`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Quiz Time</h1>
      <input
        type="text"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
        placeholder="Enter quiz title"
        className="p-3 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="text"
        value={quizLink}
        onChange={(e) => setQuizLink(e.target.value)}
        placeholder="Enter quiz link"
        className="p-3 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleAddQuiz}
        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-400"
      >
        Add Quiz
      </button>
    </div>
  );
};

export default QuizTime;
