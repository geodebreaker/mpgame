var t;
var v;

function start() {
  t = 0;
  v = 0;
}

function loop(dt) {
  v += dt * 0.01;
  t += v;
  draw();
}

function draw() {
  var size = 80;
  var dis = Math.sin(t) * 50 + 150;
  var mh = HEIGHT / 2 - size / 2;
  var mw = WIDTH / 2 - size / 2;
  var third = Math.PI * 2 / 3;
  _.drawImage($('img'), mw + Math.cos(t) * dis, mh + Math.sin(t) * dis, size, size);
  _.drawImage($('img'), mw + Math.cos(t + third) * dis, mh + Math.sin(t + third) * dis, size, size);
  _.drawImage($('img'), mw + Math.cos(t + third * 2) * dis, mh + Math.sin(t + third * 2) * dis, size, size);
}