class Snake {
    snake: HTMLElement;
    snakeHead: HTMLElement;
    snakeBodies: HTMLCollection;

    constructor() {
        this.snake = document.getElementById("snake")!;
        this.snakeHead = this.snake.querySelector("div")!;
        this.snakeBodies = this.snake.getElementsByTagName("div")!;
    }

    get X() {
        return this.snakeHead.offsetLeft;
    }

    get Y() {
        return this.snakeHead.offsetTop;
    }

    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("寄");
        }
        if (this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
                if (value < 0 || value > 290) {
                    throw new Error("寄");
                }
            } else {
                value = this.X + 10;
                if (value < 0 || value > 290) {
                    throw new Error("寄");
                }
            }
        }
        this.moveBody();
        this.snakeHead.style.left = value + "px";
        //更新完头的位置后检查有没有创自己
        this.checkCrush();
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("寄");
        }
        if (this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
                if (value < 0 || value > 290) {
                    throw new Error("寄");
                }
            } else {
                value = this.Y + 10;
                if (value < 0 || value > 290) {
                    throw new Error("寄");
                }
            }
        }
        this.moveBody();
        this.snakeHead.style.top = value + "px";
        this.checkCrush();
    }

    addBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div id='snake-body'></div>");
    }

    moveBody() {
        for (let i = this.snakeBodies.length - 1; i > 0; i--) {
            let preBodyX = (this.snakeBodies[i - 1] as HTMLElement).offsetLeft;
            let preBodyY = (this.snakeBodies[i - 1] as HTMLElement).offsetTop;
            (this.snakeBodies[i] as HTMLElement).style.left = preBodyX + "px";
            (this.snakeBodies[i] as HTMLElement).style.top = preBodyY + "px";
        }

    }
    checkCrush(){
        //获取所有的身体，检查头是否和身体重叠
        for (let i = 1; i < this.snakeBodies.length; i++){
            let bd = this.snakeBodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //创自己了
                throw new Error("寄");
            }
        }
    }

}

export default Snake;