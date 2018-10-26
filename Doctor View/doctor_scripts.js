function animateSoundBars() {
  for (var i = 0; i < 90; i++) {

    var left = i * 2 + 1;
    var anim = Math.floor(Math.random() * 75 + 400);
    var height = Math.floor(Math.random() * 25 + 3);
    console.log(height);

    document.querySelector('#bars').innerHTML += '<div class="bar" style="left:' + left + 'px;animation-duration:' + anim + 'ms;height:' + height + 'px"></div>';
  }
}
