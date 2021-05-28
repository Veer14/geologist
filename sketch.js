const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane, roof, wall1, wall2;
var stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8
stonex, stonexi, stonexii;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    
    plane = new Plane(600,height,1200,60);
roof = new Plane(600, 10, 1200, 30);
        wall1 = new Plane(10, 300, 60, 600);
    wall2 = new Plane(1200, 300, 60, 600);
            stone1 = new Stone(650, 300, 50, 50);
        stone2 = new Stone(700, 300, 50, 50);
                stone6 = new Stone(500, 300, 50, 50);
            stone7 = new Stone(400, 300, 50, 50);
                    stone8 = new Stone(450, 300, 50, 50);
                stone9 = new Stone(300, 300, 50, 50);
                        stonex = new Stone(350, 300, 50, 50);
                    stonexi = new Stone(200, 300, 50, 50);
                            stonexii = new Stone(250, 300, 50, 50);
           
             /*doughnut
        doughnutdoughnutdoughnut
    doughnutdoughnutdoughnutdoughnut
doughnutdoughnutdoughnutdoughnutdoughnut
doughnutdough           doughnutdoughnut
doughnutdough           doughnutdoughnut    
doughnutdoughn          oughnutdoughnutd
 doudoughnutdougnutdoughughnutdoughnutd
    doughnutdoughnutdoughnutdoughnut
        doughnutdoughnutdoughnut
              doughnut*/
            
              /*doughnut
        doughnutdoughnutdoughnut
    doughnutdoughnutdoughnutdoughnut
doughnutdoughnutdoughnutdoughnutdoughnut
doughnutdough           doughnutdoughnut
doughnutdough           doughnutdoughnut    
doughnutdoughn          oughnutdoughnutd
 doudoughnutdougnutdoughughnutdoughnutd
    doughnutdoughnutdoughnutdoughnut
        doughnutdoughnutdoughnut
              doughnut*/
            
              /*doughnut
        doughnutdoughnutdoughnut
    doughnutdoughnutdoughnutdoughnut
doughnutdoughnutdoughnutdoughnutdoughnut
doughnutdough           doughnutdoughnut
doughnutdough           doughnutdoughnut    
doughnutdoughn          oughnutdoughnutd
 doudoughnutdougnutdoughughnutdoughnutd
    doughnutdoughnutdoughnutdoughnut
        doughnutdoughnutdoughnut
              doughnut*/
            
              /*doughnut
        doughnutdoughnutdoughnut
    doughnutdoughnutdoughnutdoughnut
doughnutdoughnutdoughnutdoughnutdoughnut
doughnutdough           doughnutdoughnut
doughnutdough           doughnutdoughnut    
doughnutdoughn          oughnutdoughnutd
 doudoughnutdougnutdoughughnutdoughnutd
    doughnutdoughnutdoughnutdoughnut
        doughnutdoughnutdoughnut
              doughnut*/
                
                
            







    
    
    hammer = new Hammer(10,200);
    
    
    
    
    rubber = new Rubber(300, 100, 70);
  
//rubber.setCollider(130);

}

function draw(){
    background("lightBlue"); 
    Engine.update(engine);
    
 stonex.display();
  stonexi.display();
   rubber.display();
     plane.display();
      hammer.display();
        roof.display();
         wall1.display();
         wall2.display();
          stone1.display();
           stone2.display();
          stone3.display();
         stone5.display();
        stone4.display();
       stone6.display();
      stone7.display();
     stone8.display();
  stonexii.display();
    //console.log(hammer.x);
    //console.log(hammer.y);
     
    
 
}