class Stone {
    constructor(x,y,width,height) {
      var options = {
        'density':2,
			'friction': 5.0,
			   'restitution':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };