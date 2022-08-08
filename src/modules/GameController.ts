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

        this.checkEat(X,Y);

        try{
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
    checkEat(X:number, Y:number){
        if( X === this.food.X && Y === this.food.Y){
            console.log("eat food");
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameController;