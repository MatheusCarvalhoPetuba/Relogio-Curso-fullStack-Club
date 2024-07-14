const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

function setClock() {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(hoursHand, hoursPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(secondsHand, secondsPercentage);
}

function setRotation(element, rotationPercentage) {
  element.style.setProperty("--rotation", rotationPercentage * 360);
}

setClock();

setInterval(setClock, 1000);
