class Tree{
    constructor(x,y){
        var option={
            IsStatic:true
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,this.width,this.height);
        this.width=550;
        this.height=550;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop()
    }
}