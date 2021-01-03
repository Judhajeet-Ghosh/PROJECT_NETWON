class Thread{
    constructor(bodyA,pointB){
      var options = {
          bodyA : bodyA,
          pointB : pointB,
          length : 200,
          stiffness : 0.5
      }
      this.pointB = pointB;
         this.thread = Constraint.create(options)
         World.add(world,this.thread)
    }

    
    
    display(){
      

      
      var pointA = this.thread.bodyA.position
      var pointB = this.pointB
        strokeWeight(2)
        fill(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
      
    }
}
