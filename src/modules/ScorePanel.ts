//score panel
class ScorePanel{
    score = 0;
    level = 1;

    //设置变量限制等级，防止程序过多使用字面量
    maxLevel: number;
    //每多少分升一级
    upLevel: number;

    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;

    //指的是默认值是10
    constructor(maxLevel: number = 10, upLevel: number = 10) {
        this.maxLevel = maxLevel;
        this.upLevel = upLevel;
        this.scoreSpan = document.getElementById("score")!;
        this.levelSpan = document.getElementById("level")!;
    }

    //add score
    addScore(){
        this.score++;
        //把分数显示到页面上，记得拼串
        this.scoreSpan.innerHTML = this.score + "";
        //level应该通过score来控制
        if(this.score % this.upLevel === 0){
            this.levelUp();
        }
    }
    //add level
    levelUp(){
        if(this.level < this.maxLevel){
            this.level++;
            this.levelSpan.innerHTML = this.level + "";
        }
    }
}
export default ScorePanel;