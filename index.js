import { Column } from "./column.js";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 12;
const columns = [];
const columnsCount = canvas.width / 24;

for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * 24, FONT_SIZE, context, canvas.height));
}

context.font = "bold 24px monospace";

function animate() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "yellow";

    columns.forEach((column) => column.drawSymbol());

    setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
