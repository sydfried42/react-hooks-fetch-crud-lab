import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, setQuestions}) {

  function handleDelete (question) {
    let newQuestionList = questions.filter((item) => item !== question)
    // setQuestions(newQuestionList);
    fetch("http://localhost:4000/questions/" + question.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setQuestions(newQuestionList));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question, index)=>{
        return <QuestionItem 
        handleDelete={handleDelete}
        question={question}
        key={index}
        questions={questions} 
        setQuestions={setQuestions}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
