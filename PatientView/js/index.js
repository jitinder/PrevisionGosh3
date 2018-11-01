// set up text to print, each item in array is new line
var aText = new Array(
"Le nom du médicament que vous devez prendre est Nitrofurantoïne."
);
var iSpeed = 30; // time delay of print out

var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
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

window.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  if (event.keyCode === 49) { // key 1
    // Trigger the button element with a click
    var row = document.getElementById('a1');
    this.setTimeout(function() {
      row.style.display = row.style.display == "none" ? "table-row" : "none";
    }, 2000);
    typewriter();
  }
  if (event.keyCode === 50) { // key 2
    // Trigger the button element with a click
    var row = document.getElementById('a2');
    var box = document.getElementById('a21');
    this.setTimeout(function() {
      row.style.display = row.style.display == "none" ? "table-cell" : "none";
    }, 3000);
    this.setTimeout(function() {
      box.style.display = box.style.display == "none" ? "block" : "none";
    }, 5000);
    aText = new Array("Vous devriez voir l'information. Pour les adultes 4 fois par jour pendant 7 jours. En outre, rappelez-vous qu'il doit être pris avec de la nourriture et sans alcool.");
    typewriter();
  }

  if (event.keyCode === 51) { // key 3
    aText = new Array("Pour plus d'informations sur la prise de la drogue, regardez la vidéo.");
    typewriter();
  }

  if (event.keyCode === 52) { // key 4
    aText = new Array("Oui, il y a des points communs que vous devez connaître. Voir «Précautions». Vous pourriez ressentir des vertiges et une somnolence, mais c'est normal.");
    typewriter();
  }
});

window.onload = function() {
  animateSoundBars();
};