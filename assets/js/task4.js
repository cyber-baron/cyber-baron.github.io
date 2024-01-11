const dragstart = function(event) {
        event.dataTransfer.setData("text", event.target.id);
};

const dragover = function(event) {
        if(event.target.nodeName.toLowerCase() === "img") {
          return true;
        }
        event.preventDefault();
};

const drop = function(event) {
        event.preventDefault();
        let imageId = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(imageId));
};

const cells = document.getElementsByClassName("col");
      Array.from(cells).forEach((element) => {
        element.addEventListener('dragover',dragover);
        element.addEventListener('drop',drop);
});      

const images = document.getElementsByTagName("img");
      Array.from(images).forEach((element) => {
        element.addEventListener('dragstart',dragstart);
});

const foo.onclick = function(){
	this.classList.toggle('rotate')
};

function rotateImage(event) {
    var image = event.target;
    var currentRotation = image.getAttribute("data-rotation") || 0;
    var newRotation = (parseInt(currentRotation) + 90) % 360;
    image.setAttribute("data-rotation", newRotation);
    image.style.transform = "rotate(" + newRotation + "deg)";
}

function checkPuzzle() {
    for (const basket of baskets) {
        const imagesInBasket = basket.querySelectorAll("img");
        isSameType = true;
        const type = imagesInBasket[0].getAttribute("type");
        
        for (const image of imagesInBasket) {
            if (type !== image.getAttribute("type")) {
                isSameType = false;
                break;
            }
        }
        if(!isSameType) break;
    }
    if (isSameType) {
        alert("Вы успешно собрали пазл!");
    }
}

// Итератор случайных уникальных - Random Unique
function getRUIterator(max) {
  let buffer = [];
  
  const ruIterator = {
    next: function() {
      if (buffer.length === 0) { // если колода пуста
        for (let i = 0; i < max; i++) buffer.push(i); // открываем новую 0..max
      }

      const index = Math.floor(Math.random() * buffer.length);
      return buffer.splice(index, 1)[0]; // вынимаем из колоды случайную карту
    }
  }
  
  return ruIterator;
}

/**
 * генерим в каждый див по случайной картинке
 * как можно дольше без повторов
 */
function placeRandomImages(iTotal, aDivs) {  
  function placeImage(n, id) {
    const img = new Image();
    img.src = 'pazzle/${n}.png';
    img.border = '0';
    img.draggable = 'true';
    document.getElementById(id).appendChild(img);
  }
  
  // будет генерить случайные неповторяющиеся
  const RUI = getRUIterator(iTotal);
  
  for (let i = 0; i < aDivs.length) {
    placeImage( RUI(), aDivs[i]);
  }
}

placeRandomImages(9, ["puzz1", "puzz2", "puzz3", "puzz4", "puzz5", "puzz6", "puzz7", "puzz8", "puzz9"]);
