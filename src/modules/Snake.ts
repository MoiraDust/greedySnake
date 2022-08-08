class Snake{
    snake: HTMLElement;
    snakeHead: HTMLElement;
    snakeBodies: HTMLCollection;

    constructor() {
        this.snake = document.getElementById("snake")!;
        this.snakeHead = this.snake.querySelector("div")!;
        this.snakeBodies = this.snake.getElementsByTagName("div")!;
    }
    get X(){
        return this.snakeHead.offsetLeft;
    }
    get Y(){
        return this.snakeHead.offsetTop;
    }
    set X(value){
        //如果被GC中的move调用后新值和旧值一样，直接return
        if(this.X === value){
            return;
        }
        //蛇是否创墙。X的合法范围：0-290，检查X是否在这个范围内
        if(value < 0 || value > 290){
            //说明蛇创了,得把这个值传给controller
            throw new Error("寄");
        }
        this.snakeHead.style.left = value + "px";
    }
    set Y(value){
        //如果被GC中的move调用后新值和旧值一样，直接return
        if(this.Y === value){
            return;
        }
        //蛇是否创墙。Y的合法范围：0-290，检查Y是否在这个范围内
        if(value < 0 || value > 290){
            //说明蛇创了,得把这个值传给controller，可以抛出异常
            throw new Error("寄");
        }
        this.snakeHead.style.top = value + "px";
    }
    addBody(){
        this.snake.insertAdjacentHTML("beforeend","<div id='snake-body'></div>");
    }

}
export default Snake;