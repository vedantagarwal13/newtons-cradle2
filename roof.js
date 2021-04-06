class Roof{

    constructor(x,y,width,height) {
     
       var optionsroof={
           isStatic:true
       }
    
      this.body=Bodies.rectangle(x,y,width,height,optionsroof);
    
      this.width=width;
      this.height=height;
    
    
      World.add(world,this.body);
    
    
    }
    
     display(){
         var pos=this.body.position
         
         
         
        rectMode(CENTER)
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
        
     }
    }
