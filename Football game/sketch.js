let points= 0;
let balls = [];

function setup() {
   createCanvas(1200, 650);
   angleMode(RADIANS);
}

function draw(){
  console.log(points);
  //make the field
    background(38, 153, 45);
    stroke(252, 239, 60);
    strokeWeight(5);
    line(553.75,150,646.25,150);
    line(600,150,600,200);
    line(553.75,150,553.75,50);
    line(646.25,150,646.25,50);
    stroke(255);
    strokeWeight(2);
    line(200,203,1000,203);
    line(200,203,80,650);
    line(1000,203,1120,650);
    line(180,282.4,1020,282.4);
    line(158,361.8,1042,361.8);
    line(136,441.2,1064,441.2);
    line(116,520.6,1084,520.6);
    line(94,600,1106,600);

scoreboard();
//	draw all the balls
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].score();







// if you push enter, kick the ball
      if(keyCode===13){
        balls[i].kickBall();


      }

	  }
}

function keyPressed(){
  //every time you push spacebar, make a new ball from the ball class and add it to the balls array
  if (keyCode === 32){
     let  b = new Ball(random(400,800),random(400,600),0);
     balls.push(b);

   }
   //when you push the left arrow, aim left
  if (keyCode === 37){
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimLeft();
      }
  }
   //when you push the right arrow, aim right
  if (keyCode === 39){
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimRight();
      }

  }

}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y, angle){ //every ball needs an x value, a y value, and an angle
		    this.x = x;
    		this.y = y;
        this.angle = angle;
	}
  drawTriangle(){  // draw a triangle on the screen at x,y
     stroke(0);
     fill("red");
     push();//save canvas state
     translate(this.x,this.y); //translate to this.x, this.y
     rotate(this.angle/PI); // rotate
     triangle(0, 0, 10, -20, 20, 0); // draw the triangle at 0,0- because you've moved the center
     pop(); // pop back to normal

}

  score(){
       if (this.x >= 555 && this.x <= 645 && this.y <= 150 && this.y>= 145){
           points = points + 3;
       }
     }

  drawBall(){// draw a football on the screen at x,y
    		stroke(0);
        strokeWeight(1);
    		fill(135, 67, 8);
        push();
		    ellipse(this.x,this.y,21,33);
        stroke(0);
        strokeWeight(0.5);
        line(this.x,this.y+16.5,this.x,this.y-16.5);
        stroke(255);
        strokeWeight(1.5);
        line(this.x,this.y+6,this.x,this.y-6);
        strokeWeight(1);
        line(this.x+2,this.y+6,this.x-2,this.y+6);
        line(this.x+2,this.y+4,this.x-2,this.y+4);
        line(this.x+2,this.y+2,this.x-2,this.y+2);
        line(this.x+2,this.y,this.x-2,this.y);
        line(this.x+2,this.y-2,this.x-2,this.y-2);
        line(this.x+2,this.y-4,this.x-2,this.y-4);
        line(this.x+2,this.y-6,this.x-2,this.y-6);
        rotate(this.angle/PI);
          translate(this.x,this.y);
        pop();
        fill(0);
	}

  aimLeft(){ //change the trajectory angle
    this.angle = this.angle -.5;
    print(this.angle);
  }

  aimRight(){ //change the trajectory angle
    this.angle = this.angle+.5;
    print(this.angle);
  }

	kickBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.angle;
		this.y = this.y-5;
	}


}




 function scoreboard(){
   stroke(0);
   strokeWeight(2);
   fill(0);
   textSize(20);
   text("score = " + points,100,100);
}
