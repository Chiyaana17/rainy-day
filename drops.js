class drops{
    constructor(x,y,r){
    this.radius=r
    this.body=Matter.Bodies.circle(x,y,r/*,properties*/)
    Matter.World.add(world,this.body)
}
display(){
    fill("#5F93E3")
   ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
   }
update(){
    if(this.body.position.y>700){
    Matter.Body.setPosition(this.body,{x:random(0,800),y:0})
    }
}
}