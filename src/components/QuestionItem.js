import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleChangeCorrectAnswer(e) {
    onUpdate(id, e.target.value);
  }

  function handleDeleteClick() {
    onDelete(id);
  }

  return (
    <li>
      <h4>{prompt}</h4>

      <label htmlFor={`correct-answer-${id}`}>Correct Answer</label>

      <select
        id={`correct-answer-${id}`}
        aria-label="Correct Answer"
        value={correctIndex} 
        onChange={handleChangeCorrectAnswer}
      >
        {answers.map((answer, index) => (
          <option key={index} value={index.toString()}>
            {answer}
          </option>
        ))}
      </select>

      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
