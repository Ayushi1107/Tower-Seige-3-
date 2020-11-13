class Slingshot{
    constructor(bA, p1, p2){
        var options = {
            bodyA: bA,
            pointB: {x:p1, y:p2},
            stiffness: 0.04,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);     
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(A){
        this.sling.bodyA = A;
    }

    display(){
        if(this.sling.bodyA){
            var pA=this.sling.bodyA.position
            var pB=this.sling.pointB

            strokeWeight(5)
            //fill("pink")
        line(pA.x, pA.y, pB.x, pB.y);
        }
    
    }
}
