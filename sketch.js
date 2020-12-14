const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13,Box14,Box15,Box16,Box17,Box18,Box19,Box20;
var ball,rope;
var ground;

function setup()
{
    
    var canvas = createCanvas(1800,600);
    engine = Engine.create();
    world = engine.world;


    Box1= new Build(800,380,50,70);
    Box2= new Build(850,380,50,70);
    Box3= new Build(900,380,50,70);
    Box4= new Build(950,380,50,70);
    Box5= new Build(1000,380,50,70);
    Box6= new Build(1050,380,50,70);
    Box7= new Build(825,310,50,70);
    Box8= new Build(875,310,50,70);
    Box9= new Build(925,310,50,70);
    Box10= new Build(975,310,50,70);
    Box11= new Build(1025,310,50,70);
    Box12= new Build(837.5,240,50,70);
    Box13= new Build(887.5,240,50,70);
    Box14= new Build(937.5,240,50,70);
    Box15= new Build(987.5,240,50,70);
    Box16= new Build(843.25,170,50,70);
    Box17= new Build(893.25,170,50,70);
    Box18= new Build(943.25,170,50,70,);
    Box19= new Build(843.375,100,50,70);
    Box20= new Build(893.375,100,50,70);

    ball= new Ball(200,200,80,80);

    rope= new Rope(ball.body,{x:500,y:50})

    ground= new Ground(600,600,1900,20)

}

function draw()
{


   
    background("white");


    Engine.update(engine);



    fill("brown")
    ground.display();

    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();
    Box13.display();
    Box14.display();
    Box15.display();
    Box16.display();
    Box17.display();
    Box18.display();
    Box19.display();
    Box20.display();

    rope.display();


    fill("black");
    ball.display();

    




}

function mouseDragged()
{

  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}