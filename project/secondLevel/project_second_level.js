const pull1 = document.querySelector('.pull1');
const pull2 = document.querySelector('.pull2');
const word1 = document.querySelector('#word1');
const word2 = document.querySelector('#word2');
const word3 = document.querySelector('#word3');
const word4 = document.querySelector('#word4');
const word5 = document.querySelector('#word5');
const word6 = document.querySelector('#word6');
const word7 = document.querySelector('#word7');
const word8 = document.querySelector('#word8');
const word9 = document.querySelector('#word9');
const word10 = document.querySelector('#word10');
const word11 = document.querySelector('#word11');
const word12 = document.querySelector('#word12');
const word13 = document.querySelector('#word13');
const word14 = document.querySelector('#word14');
const word15 = document.querySelector('#word15');
var timerElement = document.getElementById("timer");
var intervalId;
var remainingTime = 3 * 30;

function updateTimer() {
    var minutes = Math.floor(remainingTime / 60);
    var seconds = remainingTime % 60;

    var formattedTime =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);

    timerElement.innerHTML = formattedTime;

    if (remainingTime <= 0) {
        clearInterval(intervalId);
            alert("Время кончилось, попробуйте пройти задание еще раз");
            timeout = true;
    } else {
        remainingTime--;
    }
}
intervalId = setInterval(updateTimer, 1000);

function getImage() {
        const random = Math.floor(Math.random() * 4) + 1;   
        return '<img src="/project/images/' + random + '.JPG" border="0" width="300px" height="480px"; /> ';
}

document.getElementById("pic").innerHTML = getImage();

pull1.ondragover = allowDrop;
pull1.ondrop = drop;
pull2.ondragover = allowDrop;
pull2.ondrop = drop;
word1.ondragstart = drag;
word2.ondragstart = drag;
word3.ondragstart = drag;
word4.ondragstart = drag;
word5.ondragstart = drag;
word6.ondragstart = drag;
word7.ondragstart = drag;
word8.ondragstart = drag;
word9.ondragstart = drag;
word10.ondragstart = drag;
word11.ondragstart = drag;
word12.ondragstart = drag;
word13.ondragstart = drag;
word14.ondragstart = drag;
word15.ondragstart = drag;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));
}

const pic = document.querySelector("#pic");

const correctWords1 = ["день", "поле", "облачность", "лето", "цветы"];
const correctWords2 = ["вечер", "горы", "озеро", "елки", "безоблачно", "луна", "осень"];
const correctWords3 = ["ночь", "луна", "озеро", "лето", "елки", "безоблачно"];
const correctWords4 = ["вечер", "горы", "дорога", "облачность", "елки", "зима"];

function checkWords() {
  const imageName = pic.src.substr(pic.src.lastIndexOf("/") + 1);

  const correctWords = [
    imageName === "1.JPG" ? correctWords1 :
    imageName === "2.JPG" ? correctWords2 :
    imageName === "3.JPG" ? correctWords3 :
    correctWords4
  ];

  const words = pull1.querySelectorAll(".d2");
  for (const word of words) {
    if (!correctWords.includes(word.textContent)) {
      return false;
    }
  }
  return true;
}

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", () => {
  if (checkWords()) {
    alert("Вы справились с заданием!");
  } else {
    alert("Неправильные слова подобраны!");
  }
});