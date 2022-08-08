//food
class Food{
    //食物的元素
    element: HTMLElement;
    constructor() {
        //因为是在网页上定义好的，所以不用写参数
        //获取页面中的food元素，加!表示一定不为空
        this.element = document.getElementById("food")!;
    }
    //食物坐标X
    get X(){
        return this.element.offsetLeft;
    }
    //食物坐标Y
    get Y(){
        return this.element.offsetTop;
    }
    //change food position
    change(){
        //random position(300-10=290)
        //食物坐标范围：0-290，蛇移动是+10px，所以坐标是整十
        //0 - 29之间的数字random,然后整体乘以10
        //可以用floor可以用round
        let top = (Math.round(Math.random() * 29))*10;
        let left = (Math.round(Math.random() * 29))*10;

        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}
export default Food;