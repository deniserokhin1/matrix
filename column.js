const CHARACTERS =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

export class Column {
    constructor(x, fontSize, context, canvasHeight) {
        this.x = x;
        this.y = 0;
        this.context = context;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
    }

    drawSymbol() {
        if (this.y === 0 && Math.random() < 0.99) return;

        const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
        const symbol = CHARACTERS[characterIndex];

        this.context.fillText(symbol, this.x, this.y);
        this.y += this.fontSize;

        this.y > this.canvasHeight ? (this.y = 0) : (this.y += this.fontSize);
    }
}
