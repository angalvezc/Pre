var boton = document.getElementById("b1");
var boton2 = document.getElementById("b2");
var boton3 = document.getElementById("b3");
var boton4 = document.getElementById("b4");
var boton5 = document.getElementById("b5");
var boton6 = document.getElementById("b6");
var boton7 = document.getElementById("b7");
var boton8 = document.getElementById("b8");
var boton9 = document.getElementById("b9");
var boton10 = document.getElementById("b10");
var boton11= document.getElementById("b11");
var boton12= document.getElementById("b12");

function checkAnswer(button, isCorrect) {
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("d-none", "alert-success", "alert-danger");
    if (isCorrect) {
        feedback.textContent = "¡Correcto!";
        feedback.classList.add("alert-success");
        boton.style.display="none";
        boton2.style.display="none";
        boton3.style.display="none";
        boton4.style.display="none";
    } else {
        feedback.textContent = "Incorrecto, intenta de nuevo.";
        feedback.classList.add("alert-danger");
        boton.style.display="none";
        boton2.style.display="none";
        boton3.style.display="none";
        boton4.style.display="none";
    }
}
function checkAnswer1(button, isCorrect) {
    const feedback = document.getElementById("feedback1");
    feedback.classList.remove("d-none", "alert-success", "alert-danger");
    if (isCorrect) {
        feedback.textContent = "¡Correcto!";
        feedback.classList.add("alert-success");
        boton5.style.display="none";
        boton6.style.display="none";
        boton7.style.display="none";
        boton8.style.display="none";
    } else {
        feedback.textContent = "Incorrecto";
        feedback.classList.add("alert-danger");
        boton5.style.display="none";
        boton6.style.display="none";
        boton7.style.display="none";
        boton8.style.display="none";;
    }

}
function checkAnswer2(button, isCorrect) {
    const feedback2 = document.getElementById("feedback2");
    feedback2.classList.remove("d-none", "alert-success", "alert-danger");
    if (isCorrect) {
        feedback2.textContent = "¡Correcto!";
        feedback2.classList.add("alert-success");
        boton9.style.display="none";
        boton10.style.display="none";
        boton11.style.display="none";
        boton12.style.display="none";
    } else {
        feedback2.textContent = "Incorrecto";
        feedback2.classList.add("alert-danger");
        boton9.style.display="none";
        boton10.style.display="none";
        boton11.style.display="none";
        boton12.style.display="none";
    }

}