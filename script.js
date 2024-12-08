const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);
let saveInterval = null;
let i = 0;

const resize = () => {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
};

function drawLine(ystart, xend) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(0, ystart);
  ctx.bezierCurveTo(canvasWidth / 2, 0, canvasWidth / 2, canvasHeight, xend, 0);
  ctx.stroke();
}

function drawCanvas() {
  saveInterval = setInterval(() => {
    if (i < 120) {
      drawLine(canvasHeight - i * 10, canvasWidth - i * 10);
      ctx.save();
      ctx.translate(canvasWidth, 0);

      ctx.scale(-1, 1);
      drawLine(canvasHeight - i * 10, canvasWidth - i * 10);
      ctx.restore();
      i++;
    } else {
      clearInterval(saveInterval);
    }
  }, 50);
}

document.addEventListener('DOMContentLoaded', e => {
  drawCanvas();
});

window.addEventListener('resize', e => {
  i = 0;
  saveInterval = null;
  resize();
  drawCanvas();
});
