class Player{
    constructor(x, y, width, height, angle){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 

    }
    display(){
        fill("#676e6a")
        push()
        translate(this.x, this.y)
        rotate(this.angle)
        rect(-10, -20, this.width, this.height)
        pop()
    }
}