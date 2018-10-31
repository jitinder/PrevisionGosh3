// set up text to print, each item in array is new line
var aText = new Array(
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula faucibus quam. Etiam in vestibulum tellus. In pellentesque nisi maximus, cursus risus id, tempor justo."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
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
typewriter();

function animateVideo() {
  var vidButton = document.getElementById('play-vid');
    
  const box = document.querySelector('.js-vid')

    let first = 'is-opening'
    , second = 'is-open'

    if (box.classList.contains(first)) {
      [first, second] = [second, first]
    }

    box.classList.toggle(first)
  if(vidButton.src == "https://svgshare.com/i/94V.svg"){
      vidButton.src = "https://svgshare.com/i/95E.svg";
    } else {
      vidButton.src = "https://svgshare.com/i/94V.svg";
    }

    setTimeout(() => {
      box.classList.toggle(second)
    }, 5)
}

function animateSoundBars() {
  for (var i = 0; i < 90; i++) {

    var left = i * 2 + 1;
    var anim = Math.floor(Math.random() * 75 + 400);
    var height = Math.floor(Math.random() * 20 + 3);

    document.querySelector('#bars').innerHTML += '<div class="bar" style="left:' + left + 'px;animation-duration:' + anim + 'ms;height:' + height + 'px"></div>';
  }
}

window.onload = function() {
  animateSoundBars();
};