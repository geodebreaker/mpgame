const $ = (x, y = document) => y.querySelector(x);
const $$ = (x, y = document) => y.querySelectorAll(x);
var _ = document.createElement('canvas').getContext('2d');
window.onerror = x => alert(x);
var getime = Date.now();
var WIDTH = innerWidth;
var HEIGHT = innerHeight;

document.addEventListener("DOMContentLoaded", () => {
  start();
  geloop();
});

function rect(x, y, w, h, c) {
  if (c) _.fillStyle = c;
  _.fillRect(x, y, w, h);
}

function geloop() {
  const nt = Date.now();
  const dt = (nt - getime) * 0.001;
  getime = nt;

  WIDTH = $('canvas').width = innerWidth;
  HEIGHT = $('canvas').height = innerHeight;
  _ = $('canvas').getContext('2d');

  _.imageSmoothingEnabled = false;

  loop(dt);

  requestAnimationFrame(geloop);
}