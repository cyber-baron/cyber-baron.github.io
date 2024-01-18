const puzzle = document.querySelector('.puzzle');
    const puzzleRect = puzzle.getBoundingClientRect();
    const puzzleLeft = puzzleRect.left;
    const puzzleTop = puzzleRect.top;
    const puzzleWidth = puzzleRect.width;
    const puzzleHeight = puzzleRect.height;

element1.onmousedown = function(event) {

  let shiftX = event.clientX - element1.getBoundingClientRect().left;
  let shiftY = event.clientY - element1.getBoundingClientRect().top;
  element1.style.position = 'absolute';
  element1.style.zIndex = 1000;
  document.body.append(element1);
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    const windowRect = document.documentElement.getBoundingClientRect();
    const windowTop = windowRect.top + 640;
    const windowHeight = windowRect.height;

    const element1Width = element1.offsetWidth;
    const element1Height = element1.offsetHeight;

    const maxLeft = puzzleLeft + puzzleWidth - element1Width;
    const maxTop = windowTop + puzzleHeight - element1Height;

    element1.style.left = Math.min(Math.max(pageX - shiftX, puzzleLeft), maxLeft) + 'px';
    element1.style.top = Math.min(Math.max(pageY - shiftY, windowTop), maxTop) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

    document.addEventListener('mousemove', onMouseMove);

    element1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element1.onmouseup = null;
  };

    angle1 = 0;
    document.addEventListener('keydown', function(event) {
      if (event.key === '1') {
          angle1 += 90;
        element1.style.transform = `rotate(${angle1}deg)`;
      }
    });
};

element1.ondragstart = function() {
  return false;
};

element2.onmousedown = function(event) {

  let shiftX = event.clientX - element2.getBoundingClientRect().left;
  let shiftY = event.clientY - element2.getBoundingClientRect().top;

  element2.style.position = 'absolute';
  element2.style.zIndex = 1000;
  document.body.append(element2);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    const windowRect = document.documentElement.getBoundingClientRect();
    const windowTop = windowRect.top + 640;
    const windowHeight = windowRect.height;

    const element1Width = element2.offsetWidth;
    const element1Height = element2.offsetHeight;

    const maxLeft = puzzleLeft + puzzleWidth - element1Width;
    const maxTop = windowTop + puzzleHeight - element1Height;

    element2.style.left = Math.min(Math.max(pageX - shiftX, puzzleLeft), maxLeft) + 'px';
    element2.style.top = Math.min(Math.max(pageY - shiftY, windowTop), maxTop) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

    document.addEventListener('mousemove', onMouseMove);

    element2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element2.onmouseup = null;
  };

    angle2 = 0;
    document.addEventListener('keydown', function(event) {
      if (event.key === '2') {
          angle2 += 90;
        element2.style.transform = `rotate(${angle2}deg)`;
      }
    });
};

element2.ondragstart = function() {
  return false;
};

element3.onmousedown = function(event) {

  let shiftX = event.clientX - element3.getBoundingClientRect().left;
  let shiftY = event.clientY - element3.getBoundingClientRect().top;

  element3.style.position = 'absolute';
  element3.style.zIndex = 1000;
  document.body.append(element3);

  function moveAt(pageX, pageY) {
    const windowRect = document.documentElement.getBoundingClientRect();
    const windowTop = windowRect.top + 640;
    const windowHeight = windowRect.height;

    const element1Width = element3.offsetWidth;
    const element1Height = element3.offsetHeight;

    const maxLeft = puzzleLeft + puzzleWidth - element1Width;
    const maxTop = windowTop + puzzleHeight - element1Height;

    element3.style.left = Math.min(Math.max(pageX - shiftX, puzzleLeft), maxLeft) + 'px';
    element3.style.top = Math.min(Math.max(pageY - shiftY, windowTop), maxTop) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

    document.addEventListener('mousemove', onMouseMove);

    element3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element3.onmouseup = null;
  };

    angle3 = 0;
    document.addEventListener('keydown', function(event) {
      if (event.key === '3') {
          angle3 += 90;
        element3.style.transform = `rotate(${angle3}deg)`;
      }
    });
};

element3.ondragstart = function() {
  return false;
};


element4.onmousedown = function(event) {

  let shiftX = event.clientX - element4.getBoundingClientRect().left;
  let shiftY = event.clientY - element4.getBoundingClientRect().top;

  element4.style.position = 'absolute';
  element4.style.zIndex = 1000;
  document.body.append(element4);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    const windowRect = document.documentElement.getBoundingClientRect();
    const windowTop = windowRect.top + 640;
    const windowHeight = windowRect.height;

    const element1Width = element4.offsetWidth;
    const element1Height = element4.offsetHeight;

    const maxLeft = puzzleLeft + puzzleWidth - element1Width;
    const maxTop = windowTop + puzzleHeight - element1Height;

    element4.style.left = Math.min(Math.max(pageX - shiftX, puzzleLeft), maxLeft) + 'px';
    element4.style.top = Math.min(Math.max(pageY - shiftY, windowTop), maxTop) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

    document.addEventListener('mousemove', onMouseMove);

    element4.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element4.onmouseup = null;
  };

    angle4 = 0;
    document.addEventListener('keydown', function(event) {
      if (event.key === '4') {
          angle4 += 90;
        element4.style.transform = `rotate(${angle4}deg)`;
      }
    });
};

element4.ondragstart = function() {
  return false;
};

element5.onmousedown = function(event) {

  let shiftX = event.clientX - element5.getBoundingClientRect().left;
  let shiftY = event.clientY - element5.getBoundingClientRect().top;

  element5.style.position = 'absolute';
  element5.style.zIndex = 1000;
  document.body.append(element5);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    const windowRect = document.documentElement.getBoundingClientRect();
    const windowTop = windowRect.top + 640;
    const windowHeight = windowRect.height;
      
    const element1Width = element5.offsetWidth;
    const element1Height = element5.offsetHeight;

    const maxLeft = puzzleLeft + puzzleWidth - element1Width;
    const maxTop = windowTop + puzzleHeight - element1Height;

    element5.style.left = Math.min(Math.max(pageX - shiftX, puzzleLeft), maxLeft) + 'px';
    element5.style.top = Math.min(Math.max(pageY - shiftY, windowTop), maxTop) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

    document.addEventListener('mousemove', onMouseMove);

    element5.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element5.onmouseup = null;
  };

    angle5 = 0;
    document.addEventListener('keydown', function(event) {
      if (event.key === '5') {
          angle5 += 90;
        element5.style.transform = `rotate(${angle5}deg)`;
      }
    });
};

element5.ondragstart = function() {
  return false;
};