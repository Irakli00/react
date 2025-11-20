// const divEl = document.createElement("div");
// divEl.setAttribute("id", "uniqueId");
// divEl.textContent = "text";

// const btnEl = document.createElement("button");
// btnEl.setAttribute("id", "uniqueIddddd");
// btnEl.addEventListener("click", () => (divEl.style.display = "none"));

//------------------------------------------------------------------------------
// const card = document.createElement("div");
// card.setAttribute("id", "card");
// const h2El = document.createElement("h2");
// h2El.textContent = "Gendalf";
// const linkEl = document.createElement("a");
// linkEl.setAttribute("href", "#");
// linkEl.textContent = "Go to profile";

// card.appendChild(h2El);
// card.appendChild(linkEl);

// document.body.insertAdjacentElement("afterbegin", card);

//------------------------------------------------------------------------------
const qHeaderEl = document.getElementById("question");
const optionsArea = document.getElementById("optionsArea");
const resultEl = document.getElementById("result");
let score = 0;
let round = 0;
const questions = [
  {
    question: "What?",
    options: ["Nothin'", "Everythin'", "All at once"],
    correctAnswer: "Nothin'",
  },
  {
    question: "Where?",
    options: ["Here", "There", "What's this quiz?"],
    correctAnswer: "What's this quiz?",
  },
  {
    question: "When?",
    options: ["Zeg", "Today", "soon"],
    correctAnswer: "Zeg",
  },
];

function playGame() {
  if (!questions[round]) {
    resultEl.textContent = `Your score is ${score}`;
  }

  function startNextRound() {
    setTimeout(() => {
      round += 1;
      playGame(round);
    }, 200);
  }

  qHeaderEl.textContent = questions[round]?.question;
  optionsArea.textContent = "";

  questions[round]?.options.forEach((q) => {
    const btn = document.createElement("button");
    btn.textContent = q;
    btn.addEventListener("click", (e) => {
      if (e.target.textContent === questions[round].correctAnswer) {
        btn.classList.add("correct");
        score += 1;
        startNextRound();
      } else {
        btn.classList.add("incorrect");
        startNextRound();
      }
    });
    optionsArea.insertAdjacentElement("afterbegin", btn);
  });
}

playGame();
