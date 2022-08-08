class Snake{
    //snake container
    snake: HTMLElement;
    //获取蛇头的元素
    snakeHead: HTMLElement;
    //include snake head
    //HTMLAllCollection能自动增加
    snakeBodies: HTMLCollection;

    constructor() {
        this.snake = document.getElementById("snake")!;
        //获取所有div,但是返回值是第一个
        this.snakeHead = this.snake.querySelector("div")!;
        //返回值为HTMLCollection
        this.snakeBodies = this.snake.getElementsByTagName("div")!;
    }
    //get position of snake header
    get X(){
        return this.snakeHead.offsetLeft;
    }
    get Y(){
        return this.snakeHead.offsetTop;
    }
    //set snake
    set X(value){
        this.snakeHead.style.left = value + "px";
    }
    set Y(value){
        this.snakeHead.style.top = value + "px";
    }
    //snake add body
    addBody(){
        //append会导致穿墙
        // const newBody = document.createElement("div");
        // this.snake.appendChild(newBody);
        this.snake.insertAdjacentHTML("beforeend","<div></div>");
    }
}
export default Snake;