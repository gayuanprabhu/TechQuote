
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function render() {
  const text = document.getElementById("textInput").value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // glowing text
  ctx.font = "28px 'Courier New'";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#00ff66";
  ctx.shadowColor = "#00ff66";
  ctx.shadowBlur = 20;

  const lines = text.split("\\n");
  const lineHeight = 40;
  const startY = canvas.height / 2 - (lines.length - 1) * lineHeight / 2;

  lines.forEach((line, i) => {
    ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
  });
}

function download() {
  const link = document.createElement("a");
  link.download = "dp.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

render();
