import React, {useState} from "react";

function QuestionItem({ question, /*key, questions, setQuestions,*/ handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const [corIndex, setCorIndex] = useState(correctIndex)

  function handleChangeAnswer(e) {
    // setCorIndex(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }), 
    })
    .then((res)=>res.json())
    .then((data)=>setCorIndex(data.correctIndex))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChangeAnswer} value={corIndex}>{options}</select>
      </label>
      <button onClick={() => handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;


