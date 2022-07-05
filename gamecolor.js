
function startgame() {
  let elem1 = document.getElementById('block1');
  let elem2 = document.getElementById('block2');
  let elem3 = document.getElementById('block3');
  let elem4 = document.getElementById('block4');
  let botmessage = document.getElementById('endmessage');
  elem1.style.background = 'red';
  elem2.style.background = 'yellow';
  elem3.style.background = 'green';
  elem4.style.background = 'purple';
  botmessage.innerHTML = 'Click here to check answer';
}

function newColor(elem) {
  let x = elem.style.background;
    switch (x) {
      case 'red':
        elem.style.background = 'yellow';
        break;

      case 'yellow':
        elem.style.background = 'green';
        break;

      case 'green':
        elem.style.background = 'purple';
        break;

      case 'purple':
        elem.style.background = 'red';
         break;

      default:
        alert('Click starting message to begin');
    }

    
 }

function box1function () {
  let elem = document.getElementById('block1');
  newColor(elem);
}

function box2function () {
  let elem = document.getElementById('block2');
  newColor(elem);
}

function box3function () {
  let elem = document.getElementById('block3');
  newColor(elem);
}

function box4function () {
  let elem = document.getElementById('block4');
  newColor(elem);
}
function messageUpdate() {
  let elem1 = document.getElementById('block1');
  let elem2 = document.getElementById('block2');
  let elem3 = document.getElementById('block3');
  let elem4 = document.getElementById('block4');
  let color1 = elem1.style.background;
  let color2 = elem2.style.background;
  let color3 = elem3.style.background;
  let color4 = elem4.style.background;
  let yourMessage = document.getElementById('endmessage');
    if (color1 === color2 && color2 === color3 && color3 === color4) {
      yourMessage.innerHTML = "All the colors match!";
    } else {
    yourMessage.innerHTML = "Keep trying. Click here to check";
    }
}