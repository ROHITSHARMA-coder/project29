
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function preload(){
poly=loadImage("polygon.png");
}


function setup(){
    createCanvas(800,600);
    engine=Engine.create();
    world=engine.world;

ground=new Stand(400,580,800,20);
stand1=new Stand(300,400,150,10)
stand2=new Stand(600,300,150,10);

box1=new Block(300,390)
box2=new Block(270,390);
box3=new Block(330,390);

box4=new Block(300,350);


box5=new Block(600,290);
box6=new Block(570,290);
box7=new Block(630,290);

box8=new Block(600,250);

ball=Bodies.circle(200,350,30);
World.add(world,ball);

sling=new Slingshot(this.ball,{x:200,y:300})

}

function draw(){
    background("blue");
    
    Engine.update(engine);
    
ground.display();


stand1.display();  
stand2.display();
fill("pink");
box1.display();
box2.display();
box3.display();

fill("red");
box4.display();
fill("green");
box5.display();
box6.display();
box7.display();
fill("white");
box8.display();

sling.display();

imageMode(CENTER);
image(poly,ball.position.x,ball.position.y,30,30)


}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();

}
function keyPressed(){
    if(keyCode===32){
        sling.attach(this.ball);
    }
}







































