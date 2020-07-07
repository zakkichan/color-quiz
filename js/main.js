"use strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");
   
  const quizSet = shuffle([
    {q: "あか", c:["あお", "あか", "きいろ", "くろ"] },
    {q: "あお", c:["あか", "あお", "くろ", "みどり"] },
    {q: "みどり", c:["あか", "みどり", "きいろ", "あお"] },
    {q: "くろ", c:["あか", "くろ", "きいろ", "あお"] },
    {q: "きいろ", c:["あか", "きいろ", "みどり", "あお"] },

    {q: "あか ", c:["みどり", "あか", "きいろ", "くろ"] },
    {q: "あお ", c:["みどり", "あお", "あか", "くろ"] },
    {q: "みどり ", c:["あお", "みどり", "きいろ", "あか"] },
    {q: "くろ ", c:["あお", "くろ", "きいろ", "あか"] },
    {q: "きいろ ", c:["あお", "きいろ", "みどり", "あか"] },

    {q: "あか  ", c:["きいろ", "あか", "あお", "くろ"] },
    {q: "あお  ", c:["きいろ", "あお", "あか", "くろ"] },
    {q: "みどり  ", c:["きいろ", "みどり", "くろ", "あお"] },
    {q: "きいろ  ", c:["みどり", "きいろ", "くろ", "あお"] },
    {q: "くろ  ", c:["きいろ", "くろ", "みどり", "あお"] },

    {q: "あか   ", c:["くろ", "あか", "きいろ", "あお"] },
    {q: "あお   ", c:["くろ", "あお", "あか", "みどり"] },
    {q: "みどり   ", c:["くろ", "みどり", "きいろ", "あお"] },
    {q: "きいろ   ", c:["くろ", "きいろ", "みどり", "あお"] },
    {q: "くろ   ", c:["みどり", "くろ", "きいろ", "あお"] },
  ]);

  let currentNum = 0;
  let isAnswered;
  let score = 0;
  

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add("correct");
      score++;
    } else {
      li.classList.add("wrong");
    }

    btn.classList.remove("disabled");
  }

  function setQuiz(){
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
    if (question.textContent === "あか") {
      question.style.color = 'blue';
    } else if (question.textContent === "あお") {
      question.style.color = 'red';
    } else if (question.textContent === "みどり") {
      question.style.color = 'red';
    } else if (question.textContent === "きいろ") {
      question.style.color = 'red';
    } else if (question.textContent === "くろ") {
      question.style.color = 'red';
    } 
      else if (question.textContent === "あか ") {
      question.style.color = 'green';
    } else if (question.textContent === "あお ") {
      question.style.color = 'green';
    } else if (question.textContent === "みどり ") {
      question.style.color = 'blue';
    } else if (question.textContent === "きいろ ") {
      question.style.color = 'blue';
    } else if (question.textContent === "くろ ") {
      question.style.color = 'blue';
    } 
      else if (question.textContent === "あか  ") {
      question.style.color = 'yellow';
    } else if (question.textContent === "あお  ") {
      question.style.color = 'yellow';
    } else if (question.textContent === "みどり  ") {
      question.style.color = 'yellow';
    } else if (question.textContent === "きいろ  ") {
      question.style.color = 'green';
    } else if (question.textContent === "くろ  ") {
      question.style.color = 'yellow';
    }
      else if (question.textContent === "あか   ") {
      question.style.color = 'black';
    } else if (question.textContent === "あお   ") {
      question.style.color = 'black';
    } else if (question.textContent === "みどり   ") {
      question.style.color = 'black';
    } else if (question.textContent === "きいろ   ") {
      question.style.color = 'black';
    } else if (question.textContent === "くろ   ") {
      question.style.color = 'green';
    }

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
  
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    // if (currentNum === quizSet.length - 1) {
    //   btn.textContent = "全問終了！結果は!?";
    // }
    if (currentNum === 5) {
      btn.textContent = "全問終了！結果は!?";
    }
  }

  setQuiz();
  
  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) {
      return;
    }
    btn.classList.add("disabled");

    // if (currentNum === quizSet.length - 1 && score === quizSet.length) {
    //     scoreLabel.textContent = `おめでとう！全問正解！`;  
    //     result.classList.remove("hidden");
    //   } else if (currentNum === quizSet.length - 1){
    //     scoreLabel.textContent = `${quizSet.length} 問中 ${score} 問正解`;
    //     result.classList.remove("hidden");
    //   }
      if (currentNum === 4 && score === 5) {
        scoreLabel.textContent = `おめでとう！全問正解！`;  
        result.classList.remove("hidden");
      } else if (currentNum === 4){
        scoreLabel.textContent = `5 問中 ${score} 問正解`;
        result.classList.remove("hidden");
      } else {
      currentNum++;
      setQuiz();
    }
  });5
}

