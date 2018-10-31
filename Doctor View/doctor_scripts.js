function animateSoundBars() {
  for (var i = 0; i < 90; i++) {

    var left = i * 2 + 1;
    var anim = Math.floor(Math.random() * 75 + 400);
    var height = Math.floor(Math.random() * 25 + 3);
    console.log(height);

    document.querySelector('#bars').innerHTML += '<div class="bar" style="left:' + left + 'px;animation-duration:' + anim + 'ms;height:' + height + 'px"></div>';
  }
}

function animateGauge() {
  var canvas = document.getElementById("gauge");
  var understanding = document.getElementById("understanding");
  var ctx = canvas.getContext("2d");
  var W = canvas.width;
  var H = canvas.height;
  var degrees = 0;
  var new_degrees = 0;
  var difference = 0;
  var color = "#BFE9FF91";
  var text;
  var animation_loop, redraw_loop;
  var index = 0;
  var array = new Array(180, 122, 220, 361);

  function perc2color(perc) {
    var r, g, b = 0;
    if(perc < 50) {
      r = 255;
      g = Math.round(5.1 * perc);
    }
    else {
      g = 255;
      r = Math.round(510 - 5.10 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
  }
  function init()
  {
    ctx.clearRect(0, 0, W, H);
    percentage = Math.floor(degrees/360*100)
    color = perc2color(percentage) + '91';
    understanding.style.color = color;

    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF00";
    ctx.lineWidth = 30;
    ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false);
    ctx.stroke();

    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 30;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = "35px Roboto";
    text = percentage + '%'
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, W/2 - text_width/2, H/2);
  }

  function draw()
  {
    if(typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = array[index];
    index++;
    if(index >= array.length)
    {
      index = 0;
    }
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 1000/difference);
  }

  function animate_to()
  {
    if(degrees == new_degrees)
    clearInterval(animation_loop);
    if(degrees < new_degrees)
    degrees++;
    else
    degrees--;
    init();
  }
  draw();
  redraw_loop = setInterval(draw, 6000);
}

function animateEPR() {
  const button = document.querySelector('.js-button')

  button.addEventListener('click', function() {
    const box = document.querySelector('.js-box')

    let first = 'is-opening'
    , second = 'is-open'

    if (box.classList.contains(first)) {
      [first, second] = [second, first]
    }

    box.classList.toggle(first)

    setTimeout(() => {
      box.classList.toggle(second)
    }, 400)
  })
}

var aText = new Array(
  "- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "- Habitant morbi tristique senectus et netus et. Enim ut sem viverra aliquet.",
  "- Aliquam ultrices sagittis orci a scelerisque purus. "
);
var iSpeed = 100;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter()
{
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typedtext");

  while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
  if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

window.onload = function() {
  animateEPR(); // TODO add timers to scan first, then have the popups
  animateGauge();
  animateSoundBars();
  typewriter();
};
