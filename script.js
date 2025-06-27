function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (userAnswer === "париж") {
        result.textContent = "Правильно!";
        result.style.color = "green";
    } else {
        result.textContent = "Неправильно. Попробуй ещё.";
        result.style.color = "red";
    }
}
