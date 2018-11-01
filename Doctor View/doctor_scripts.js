// Will animate the blue sound bars to simulate a sound wave
function animateSoundBars() {
  for (var i = 0; i < 90; i++) {

    var left = i * 2 + 1;
    var anim = Math.floor(Math.random() * 75 + 400);
    var height = Math.floor(Math.random() * 25 + 3);
    console.log(height);

    document.querySelector('#bars').innerHTML += '<div class="bar" style="left:' + left + 'px;animation-duration:' + anim + 'ms;height:' + height + 'px"></div>';
  }
}


var array = new Array(80,80);
var degrees = 122;
var new_degrees = 0;

// Added keybinds to help with filming the video - different aspects of the view appear based on the keys pressed
window.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  if (event.keyCode === 49) { // key 1
    // Trigger the button element with a click
    aText = new Array("So I take it 4 times a day for 7 days?");
    array = new Array(221,221);
    typewriter();
    animateGauge();
  }
  if (event.keyCode === 50) { // key 2
    // Trigger the button element with a click
    aText = new Array("Yes. ");
    array = new Array(361,361);
    typewriter();
    animateGauge();
  }

  if (event.keyCode === 51) { // key 3
    // Trigger the button element with a click
    aText = new Array("Could you explain it simpler? ");
    array = new Array(122,122);
    typewriter();
    animateGauge();
  }

  if (event.keyCode === 52) { // key 4
    // Trigger the button element with a click
    aText = new Array("No, thank you very much for your help.");
    array = new Array(361,361);
    typewriter();
    animateGauge();
  }
});

// Animate the 'Understandometer'
function animateGauge() {
  // Grab the related elements and set up variables
  var canvas = document.getElementById("gauge");
  var understanding = document.getElementById("understanding");
  var ctx = canvas.getContext("2d");
  var W = canvas.width;
  var H = canvas.height;
  var difference = 0;
  var color = "#BFE9FF91";
  var text;
  var animation_loop, redraw_loop;
  var index = 0;
  //var array = new Array(180, 122, 220, 361);

  // Convert a percentage into a hex colour ranging from red to green
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

  // Setup the drawing of the gauge
  function init()
  {
    ctx.clearRect(0, 0, W, H);
    percentage = Math.floor(degrees/360*100)
    color = perc2color(percentage) + '91';
    understanding.style.color = color;

    // Draw the arc surrounding the text
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

    // Percentage text - 'x% Understanding'
    ctx.fillStyle = color;
    ctx.font = "35px Roboto";
    text = percentage + '%'
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, W/2 - text_width/2, H/2);
  }

  function draw()
  {
    if(typeof animation_loop != undefined) clearInterval(animation_loop);
    // Select the new degrees to move to
    new_degrees = array[index];
    index++;
    if(index >= array.length)
    {
      index = 0;
    }
    // Calculate the difference and set the animation speed accordingly
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 1000/difference);
  }

  function animate_to()
  {
    // Increase degrees closer to the desired value while increasing / decreasing the size of the arc
    if(degrees == new_degrees)
    clearInterval(animation_loop);
    if(degrees < new_degrees)
    degrees++;
    else
    degrees--;
    init();
  }
  draw();
  // Redraw every 6000ms
  redraw_loop = setInterval(draw, 6000);
}

// Animates the EPR to allow for a 'click'
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

// Variables for typewriter
var aText = new Array(
  "Drowsiness…?"
);
var iSpeed = 30;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

// Animates the typewriter
function typewriter() {
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
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

window.onload = function() { // Run all animations on page load
  animateEPR();
  animateGauge();
  animateSoundBars();
  typewriter();
};
