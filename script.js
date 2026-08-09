let currentIndex = 0;
let score = 0;
let answered = false;
let answeredCount = 0;
let activeQuestions = [];

const $ = id => document.getElementById(id);
const startScreen = $("startScreen");
const quizScreen = $("quizScreen");
const resultsScreen = $("resultsScreen");

function shuffledCopy(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildPracticeQuestions() {
  const countValue = $("questionCount").value;
  const requestedCount = countValue === "all" ? questions.length : Number(countValue);
  let pool = $("shuffleQuestions").checked ? shuffledCopy(questions) : [...questions];
  pool = pool.slice(0, Math.min(requestedCount, pool.length));

  return pool.map(q => {
    const optionObjects = q.options.map((text, originalIndex) => ({
      text,
      isCorrect: originalIndex === q.answer
    }));
    const displayedOptions = $("shuffleAnswers").checked ? shuffledCopy(optionObjects) : optionObjects;

    return {
      id: q.id,
      question: q.question,
      explanation: q.explanation,
      options: displayedOptions.map(item => item.text),
      answer: displayedOptions.findIndex(item => item.isCorrect)
    };
  });
}

function startQuiz() {
  activeQuestions = buildPracticeQuestions();
  currentIndex = 0;
  score = 0;
  answered = false;
  answeredCount = 0;
  startScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = activeQuestions[currentIndex];
  const total = activeQuestions.length;

  $("questionNumber").textContent = `Question ${q.id}`;
  $("questionText").textContent = q.question;
  $("progressText").textContent = `${currentIndex + 1} / ${total}`;
  updateScoreStats();

  const progressPercent = ((currentIndex + 1) / total) * 100;
  $("progressFill").style.width = `${progressPercent}%`;
  $("progressFill").parentElement.setAttribute("aria-valuenow", Math.round(progressPercent));

  const options = $("options");
  options.innerHTML = "";
  q.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}.</span><span>${escapeHtml(text)}</span>`;
    b.addEventListener("click", () => selectAnswer(i));
    options.appendChild(b);
  });

  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent = currentIndex === total - 1 ? "Finish Quiz" : "Next Question";
}

function updateScoreStats() {
  $("scoreText").textContent = `${score} / ${answeredCount}`;
  $("accuracyText").textContent = answeredCount ? `${Math.round((score / answeredCount) * 100)}%` : "—";
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  answeredCount++;

  const q = activeQuestions[currentIndex];
  const buttons = [...document.querySelectorAll(".option")];
  buttons.forEach(b => b.disabled = true);

  const correct = index === q.answer;
  if (correct) score++;

  buttons[index].classList.add(correct ? "correct" : "wrong");
  if (!correct) buttons[q.answer].classList.add("reveal");

  const fb = $("feedback");
  fb.className = `feedback ${correct ? "correct" : "incorrect"}`;
  fb.innerHTML = `<strong>${correct ? "✓ Correct" : "✗ Incorrect"}</strong><div>${correct ? "Good job!" : "The correct answer is " + String.fromCharCode(65 + q.answer) + ". " + escapeHtml(q.options[q.answer])}</div><div style="margin-top:8px"><strong>Explanation:</strong> ${escapeHtml(q.explanation)}</div>`;

  updateScoreStats();
  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  // Keep the user's viewport in the same place while switching questions.
  const savedY = window.scrollY;
  currentIndex++;

  if (currentIndex >= activeQuestions.length) {
    showResults(savedY);
    return;
  }

  renderQuestion();
  requestAnimationFrame(() => window.scrollTo({ top: savedY, left: 0, behavior: "auto" }));
}

function showResults(savedY = window.scrollY) {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const pct = Math.round((score / activeQuestions.length) * 100);
  $("finalScore").textContent = `${score} / ${activeQuestions.length} (${pct}%)`;
  $("resultMessage").textContent = pct >= 80
    ? "Excellent work. Keep reviewing the questions you missed."
    : pct >= 60
      ? "Good practice session. Review the explanations for the questions you missed."
      : "Keep practicing. Use the explanations to strengthen the areas you missed.";

  requestAnimationFrame(() => window.scrollTo({ top: savedY, left: 0, behavior: "auto" }));
}

function showSettings() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

$("startBtn").addEventListener("click", startQuiz);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  startQuiz();
});
$("settingsBtn").addEventListener("click", showSettings);
$("homeTop").addEventListener("click", showSettings);
$("restartTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Restart keeps the current practice settings and begins a fresh quiz.
  // When already on the main menu, simply start with the selected settings.
  startQuiz();
});
