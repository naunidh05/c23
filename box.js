class Box{
    constructor(x,y,width,height){
var opt={
    restitution:1.2
}
this.body=Bodies.rectangle(x,y,width,height,opt);
this.width=width;
this.height=height;
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this,height);
    }
}
