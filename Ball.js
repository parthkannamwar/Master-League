class Ball
{
    constructor(x,y,radius,angle){
    
       var boptions = {

            isStatic:true,
            restitution:0.7,
            density:1.2,
            friction:0.5,
            visibility:false
        }

        
        this.body=Bodies.circle(x,y,radius,boptions)
        this.angle=angle
        this.body.angle=this.body.angle+2
        this.radius=radius;
        this.image = loadImage("ball.png");
        this.visibility=0;




        World.add(engine.world, this.body)


    }

    display()
    {
       
        
            var angle=this.body.angle
            push();       
          
            translate(this.body.position.x,this.body.position.y) 
            rotate(angle)
            imageMode(CENTER);
            image(this.image, 0,0, 100, 100);
         
            pop();
        
    }
}