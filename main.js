var time = 10;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'hsla(0,0%,0%,1)';

window.addEventListener(
  'resize',
  function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

function draw() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = 'hsla(0,0%,0%,.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var angle, i, j, radius, radius2;

  angle = Math.sin(time) * 3 * Math.PI;

  for (i = 0; i < 200; ++i) {
    radius = 180 * Math.sin(i * angle);
    ctx.globalCompositeOperation = '';
    ctx.fillStyle = 'hsla(' + (i * 2 + 50) + ',100%, 70%,1)';
    ctx.beginPath();
    ctx.arc(
      Math.sin(i) * radius + canvas.width / 2,
      Math.cos(i) * radius + canvas.height / 2,
      2,
      0,
      Math.PI * 3
    );
    ctx.fill();
  }

  for (j = 0; j < 100; ++j) {
    radius2 = 90 * Math.sin(j * angle * 2);
    ctx.globalCompositeOperation = '';
    ctx.fillStyle = 'hsla(' + (j * 5 + 150) + ',100%, 80%,1)';
    ctx.beginPath();
    ctx.arc(
      Math.sin(j * 1.5) * radius2 + canvas.width / 2,
      Math.cos(j * 1.5) * radius2 + canvas.height / 2,
      1.5,
      0,
      Math.PI * 3
    );
    ctx.fill();
  }

  time += 0.00005;
  return (time %= 3 * Math.PI);
}

function run() {
  window.requestAnimationFrame(run);
  draw();
}
run();
