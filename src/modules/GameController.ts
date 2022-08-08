import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.move();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "w":
                Y = Y - 10;
                break;
            case "s":
                Y = Y + 10;
                break;
            case "a":
                X = X - 10;
                break;
            case "d":
                X = X + 10;
                break;
        }

        //调用checkEat,因为吃东西是move的时候会触发的方法
        this.checkEat(X,Y);

        try{
            //调用了set
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            alert((e as Error).message + ": game over!");
            this.isLive = false;
        }

        if (this.isLive) {
            setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
        }
    }
    //定义一个方法检查蛇是否吃到食物.X Y是蛇的坐标
    checkEat(X:number, Y:number){
        if( X === this.food.X && Y === this.food.Y){
            console.log("eat food");
            //食物位置改变
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //增加身体长度
            this.snake.addBody();
        }
    }

}

export default GameController;