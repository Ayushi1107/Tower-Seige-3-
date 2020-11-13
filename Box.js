class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
      
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility=255
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;

        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink")
        rect( 0, 0, this.width, this.height);
        pop();
      }
    
    else{
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-5
      tint(255,this.visibility)
      pop();
    }
    }
    Score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
       score++;
      }
}
}
  
    