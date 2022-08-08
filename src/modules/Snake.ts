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
        //如果被GC中的move调用后新值和旧值一样，直接return
        if (this.X === value) {
            return;
        }
        //蛇是否创墙。X的合法范围：0-290，检查X是否在这个范围内
        if (value < 0 || value > 290) {
            //说明蛇创了,得把这个值传给controller
            throw new Error("寄");
        }
        //身体跟着移动
        this.moveBody();
        //因为是从后往前移动身体，所以head的移动也应该写在move整个body后面
        this.snakeHead.style.left = value + "px";
    }

    set Y(value) {
        //如果被GC中的move调用后新值和旧值一样，直接return
        if (this.Y === value) {
            return;
        }
        //蛇是否创墙。Y的合法范围：0-290，检查Y是否在这个范围内
        if (value < 0 || value > 290) {
            //说明蛇创了,得把这个值传给controller，可以抛出异常
            throw new Error("寄");
        }
        //身体跟着移动
        this.moveBody();
        this.snakeHead.style.top = value + "px";
    }

    addBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div id='snake-body'></div>");
    }

    //snake move body
    moveBody() {
        //后面的身体要移到前面那个身体之前的位置
        //从后往前改,不然身体会合到一块.
        //后面身体等于前面一节的位置
        //遍历获取所有身体.i = 0是蛇头位置，他已经有在keydown的时候就被set了
        for (let i = this.snakeBodies.length - 1; i > 0; i--) {
            //前面身体的位置
            let preBodyX = (this.snakeBodies[i - 1] as HTMLElement).offsetLeft;
            let preBodyY = (this.snakeBodies[i - 1] as HTMLElement).offsetTop;
            //将这个值设置到目前身体位置
            (this.snakeBodies[i] as HTMLElement).style.left = preBodyX + "px";
            (this.snakeBodies[i] as HTMLElement).style.top = preBodyY + "px";
        }

    }

}

export default Snake;