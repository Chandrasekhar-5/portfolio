export function initGridBackground() {
  const canvas = document.createElement("canvas");
  canvas.className = "grid-bg";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  resize();

  window.addEventListener("resize", resize);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(180,180,180,0.06)";
    ctx.lineWidth = 1;

    const gap = 80;
    for (let x = 0; x < canvas.width; x += gap) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gap) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  draw();
}