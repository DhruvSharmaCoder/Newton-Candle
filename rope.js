class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		
		var Rop1X = pointA.x;
		var Rop1Y = pointA.y;

		var Rop2X = pointB.x;
		var Rop2Y = pointB.y;

		line(Rop1X,Rop1Y,Rop2X,Rop2Y);
	}

}