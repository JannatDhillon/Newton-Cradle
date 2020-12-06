class Bob
{
    constructor(x,y,r)
    {
        var options={
            restitution:0.5,
            friction:0.7,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);

    }
    display()
    {
    var paperpos=this.body.position;

    push()
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill("black");
    stroke("white");
    ellipse(paperpos.x,paperpos.y,this.r);
    pop()

    }
    
}