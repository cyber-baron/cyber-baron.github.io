const elm0 = document.getElementById('elm0'),
  elm1 = document.getElementById('elm1'),
  elm2 = document.getElementById('elm2'),
  elm3 = document.getElementById('elm3'),
  elm4 = document.getElementById('elm4'),
  elmsItem = Array.from(document.querySelectorAll('#items > div')),
  elmPoint = document.getElementById('elm-point');

let connectMode, line;

function updateLine(event) {
  elmPoint.style.left = `${event.clientX + pageXOffset}px`;
  elmPoint.style.top = `${event.clientY + pageYOffset}px`;
  line.position();
}

document.addEventListener('click', event => {
  if (connectMode) {
    const elmTarget = elmsItem.find(elm => elm === event.target);
    if (elmTarget) {
      line.setOptions({
        end: elmTarget,
        endPlug: 'behind',
        dash: false
      });
    } else { // Abort
      line.remove();
    }
    elmPoint.style.display = 'none';
    document.body.classList.remove('connect-mode');
    connectMode = false;

  } else if (event.target === elm0) { // Start
    elmPoint.style.display = 'block';
    line = new LeaderLine(elm0, elmPoint, {
      endPlug: 'disc',
      dash: {
        animation: true
      }
    });
    document.body.classList.add('connect-mode');
    connectMode = true;
    updateLine(event);
  } else if (event.target === elm1) { // Start
    elmPoint.style.display = 'block';
    line = new LeaderLine(elm1, elmPoint, {
      endPlug: 'disc',
      dash: {
        animation: true
      }
    });
    document.body.classList.add('connect-mode');
    connectMode = true;
    updateLine(event);
  } else if (event.target === elm2) { // Start
    elmPoint.style.display = 'block';
    line = new LeaderLine(elm2, elmPoint, {
      endPlug: 'disc',
      dash: {
        animation: true
      }
    });
    document.body.classList.add('connect-mode');
    connectMode = true;
    updateLine(event);
  } else if (event.target === elm3) { // Start
    elmPoint.style.display = 'block';
    line = new LeaderLine(elm3, elmPoint, {
      endPlug: 'disc',
      dash: {
        animation: true
      }
    });
    document.body.classList.add('connect-mode');
    connectMode = true;
    updateLine(event);
  } else if (event.target === elm4) { // Start
    elmPoint.style.display = 'block';
    line = new LeaderLine(elm4, elmPoint, {
      endPlug: 'disc',
      dash: {
        animation: true
      }
    });
    document.body.classList.add('connect-mode');
    connectMode = true;
    updateLine(event);
  } 
});

document.addEventListener('mousemove', event => {
  if (connectMode) {
    updateLine(event);
  }
});

let selectedItem;

function select(item, unselect) {
  if (unselect) {
    item.line.setOptions({outline: false, endPlugOutline: false});
    item.isSelected = false;
    selectedItem = null;
  } else if (item.line) {
    if (selectedItem) { select(selectedItem, true); }
    item.line.setOptions({
      outline: true,
      outlineColor: '#2ca4fa',
      endPlugOutline: true
    });
    item.isSelected = true;
    selectedItem = item;
  }
}

function removeSelected() {
  if (selectedItem) {
    selectedItem.line.remove();
    selectedItem.line = null;
    selectedItem.isSelected = false;
    selectedItem = null;
  }
}

document.querySelector('button').addEventListener('click', removeSelected);

document.addEventListener('keyup', event => {
  if (event.code === 'Delete') {
    removeSelected();
    event.preventDefault();
  }
});

var timerElement = document.getElementById("timer");
var intervalId;
var remainingTime = 2 * 60;

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

var buttonCheck = document.getElementById("checkButton");
var scoresAdded = false;
var timeout = false;

buttonCheck.addEventListener("click", function () {
    
});