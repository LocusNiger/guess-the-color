const colourValue = document.getElementById("colourValue");
const buttons = document.getElementsByClassName("colourButton"); //array de botones

function setButtonColour(button, red, green, blue) {
  //le asigno a un botón 3 valores rgb
  button.setAttribute("style", `background-color: rgb(${red},${green},${blue})`);
}

function makeRandomColour() {
  // retorna un RGB random
  return Math.round(Math.random() * 255);
}

const answerMessage = document.getElementById("answer");

function startGame() {
  answerMessage.innerHTML = "";
  const answerButton = Math.round(Math.random() * (buttons.length - 1));
  //Variable que guarda el nro. de botón que será el ganador
  for (let i = 0; i < buttons.length; i++) {
    //loop que recorre el array de botones y cambia 1x1 el color
    const red = makeRandomColour();
    const green = makeRandomColour();
    const blue = makeRandomColour();

    setButtonColour(buttons[i], red, green, blue);

    //Muestra el hex de la respuesta correcta
    if (answerButton === i) colourValue.innerHTML = `(${red}, ${green}, ${blue})`;

    //Muestra el resultado
    buttons[i].addEventListener("click", function () {
      if (this === buttons[answerButton]) answerMessage.innerHTML = "Respuesta correcta!";
      else answerMessage.innerHTML = "Respuesta incorrecta. Prueba de nuevo!";
    });
  }
}

startGame();
document.getElementById("resetButton").addEventListener("click", startGame);
