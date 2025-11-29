import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleChange(e) {
    onUpdate(id, parseInt(e.target.value)); 
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>

      <label>
        Correct Answer:
        <select value={correctIndex.toString()} onChange={handleChange}>
          {answers.map((answer, index) => (
            <option key={index} value={index.toString()}>
              {answer}
            </option>
          ))}
        </select>
      </label>

      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
