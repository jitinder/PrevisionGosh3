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
  var ctx = canvas.getContext("2d");
  var W = canvas.width;
  var H = canvas.height;
  var degrees = 0;
  var new_degrees = 0;
  var difference = 0;
  var color = "#18CAE6";
  var text;
  var animation_loop, redraw_loop;
  function init()
  {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = color;
    ctx.font = "50px Roboto";
    text = Math.floor(degrees/360*100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
  }

  function draw()
  {
    if(typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = Math.round(Math.random()*360);
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 3000/difference);
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
  redraw_loop = setInterval(draw, 15000);
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
