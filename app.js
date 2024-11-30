function checkAnswer(button, isCorrect) {
    const feedback = document.getElementById("feedback");

    // Clear previous feedback
    feedback.classList.remove("d-none", "alert-success", "alert-danger");

    if (isCorrect) {
        feedback.textContent = "¡Correcto!";
        feedback.classList.add("alert-success");
    } else {
        feedback.textContent = "Incorrecto, intenta de nuevo.";
        feedback.classList.add("alert-danger");
    }
}