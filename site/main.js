var t;
var v;
var oi;

function start() {
  t = 0;
  v = 0.01;
  var i = new Image();
  i.src = "img/icon.png";
  i.id = "shme";
  $('body').appendChild(i);
}

function loop(dt) {
  v += 0.01 * 0.01 * (2 - Math.sin(t));
  t += v;
  draw();
}

function draw() {
  var size = 80;
  var mh = HEIGHT / 2;
  var mw = WIDTH / 2;
  var dis = Math.sin(t) * 50 + 150;
  var third = Math.PI * 2 / 3;
  var n;
  if (t < 400) {
    _.save();
    if (t < 200)
      _.translate((Math.random() - 0.5) * t / 8, (Math.random() - 0.5) * t / 8);
    else
      _.translate(
        (Math.random() - 0.5) * Math.max(400 - t, 0) / 4,
        (Math.random() - 0.5) * Math.max(400 - t, 0) / 4);
    if (oi) _.putImageData(oi, 0, 0);
    n = Math.min(t, 10) / 10;
    n = Math.floor((Math.sin(t) * 4 + 4) * n).toString(16).repeat(3);
    rect(-50, -50, WIDTH + 50, HEIGHT + 50, "#" + n + "2");
    var pos = [
      [mw + Math.cos(t) * dis, mh + Math.sin(t) * dis],
      [mw + Math.cos(t + third) * dis, mh + Math.sin(t + third) * dis],
      [mw + Math.cos(t + third * 2) * dis, mh + Math.sin(t + third * 2) * dis],
    ];
    _.drawImage($('#shme'), pos[0][0] - size / 2, pos[0][1] - size / 2, size, size);
    _.drawImage($('#shme'), pos[1][0] - size / 2, pos[1][1] - size / 2, size, size);
    _.drawImage($('#shme'), pos[2][0] - size / 2, pos[2][1] - size / 2, size, size);
    size = Math.min(t, 300);
    n = Math.floor(Math.min(t, 400) / 400 * 255).toString(16);
    n = n.length == 1 ? "0" + n : n;
    n = n.repeat(4);
    rect(-50, -50, WIDTH + 50, HEIGHT + 50, "#" + n);
    _.drawImage($('#shme'), mw - size / 2, mh - size / 2, size, size);
    oi = _.getImageData(0, 0, WIDTH, HEIGHT);
    _.restore();
  } else {
    if (t < 500) {
      n = Math.floor(Math.max(500 - t, 0) / 100 * 255).toString(16);
      n = n.length == 1 ? "0" + n : n;
      n = n.repeat(3);
      rect(0, 0, WIDTH, HEIGHT, "#" + n);
    }
    if (t < 580) {
      _.drawImage($('img'), mw - 150, mh - 150, 300, 300);
    }
    if (t > 550) {
      if (!$('#goob')) {
        var i = new Image();
        i.src = "img/explosion.gif";
        i.id = "goob";
        $('body').appendChild(i);
      }
      n = Math.floor(Math.max(t - 560, 0) / 20 * 255).toString(16);
      n = n.length == 1 ? "0" + n : n;
      rect(0, 0, WIDTH, HEIGHT, "#000000" + n);
    }
    if (t > 610) {
      $('#goob').style.display = "none";
    }
  }
}