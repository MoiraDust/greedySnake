import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //创建一个属性来初始化蛇的移动方向，可以给一个值也可以不给
    direction: string = '';
    //创建属性来记录蛇是否活着
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    //初始化,调用后游戏开始
    init() {
        //按按钮，蛇动起来
        //绑定键盘,回调函数写在外面
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        //调用move方法
        //但是如果只到这里为止的话蛇并不会动。因为switch只会触发一次，并且this.direction的初始值是空
        //所以可以在move里面写一个定时调用move的方法
        this.move();
    }

    //keydown的回调函数
    keydownHandler(event: KeyboardEvent) {
        //js里面的this:谁调用的this就是谁。
        //这里的this是作为document方法的参数，所以是document调用的
        //所以要使用bind绑定第二个参数里面的this
        // console.log(this);
        /*wasd*/
        this.direction = event.key;

    }

    //snake move
    move() {
        /*根据direction改变位置
        * W up: - top
        * S down: + top
        * A left: - left
        * D right: + left
        * */
        //get snake position
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
        //把X和Y赋值给蛇的位置属性
        this.snake.X = X;
        this.snake.Y = Y;

        //开启定时调用,调用的时间参数可以控制蛇移动的速度
        //蛇活着的时候才会开启
        if (this.isLive) {
            setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
        }
    }
}

export default GameController;