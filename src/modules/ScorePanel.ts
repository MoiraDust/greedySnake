class ScorePanel{
    score = 0;
    level = 1;

    maxLevel: number;
    upLevel: number;

    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;

    constructor(maxLevel: number = 10, upLevel: number = 10) {
        this.maxLevel = maxLevel;
        this.upLevel = upLevel;
        this.scoreSpan = document.getElementById("score")!;
        this.levelSpan = document.getElementById("level")!;
    }

    addScore(){
        this.score++;
        this.scoreSpan.innerHTML = this.score + "";
        if(this.score % this.upLevel === 0){
            this.levelUp();
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.level++;
            this.levelSpan.innerHTML = this.level + "";
        }
    }
}
export default ScorePanel;