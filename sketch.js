
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var player,player1,player2,bg,backgroun,gs,gsimg,board,maze,mazeimg;
var pos1,pos1img,pos2,pos2img,pos3,pos3img,btitle,btitleimg;
var go,goimg;
var world;
var timer=60,score=0,ref;
var gamestate="ready";
var fplayer,wall1,wall2,wall3,wall6,topedge,botedge,ledge,redge,midedge;
var wallgroup,edgegroup,vic,vicimg,trophy,thophyimg;

function preload()
{
	bg=loadImage("bg3.jpg")
	player1=loadImage("player1.png");
	player2=loadImage("player.png")
	board=loadImage("board2.png");
	gsimg=loadImage("gstitle.png");
	mazeimg=loadImage("maze2.png");
	pos1img=loadImage("bpos1.png");
	pos2img=loadImage("bpos2.png");
	pos3img=loadImage("bpos3.png");
	btitleimg=loadImage("btitle.png")
	goimg=loadImage("gameover.png");
	vicimg=loadImage("victory.png")
	trophyimg=loadImage("trophy.png")

}


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;



	ball= new Ball(380,260.5,35,180)
	groundObject=new ground(width/2,670,width,20);
	hoop=new Hoop(1200,311);


	

	player=createSprite(300,450)
	player.addImage("player",player1)
	player.scale=0.20;

	gs=createSprite(700,180)
	gs.addImage("gameshow",gsimg)
	gs.scale=0.5


	maze=createSprite(1000,500)
	maze.addImage("gameshow",mazeimg)
	maze.scale=0.5
	
	btitle=createSprite(700,120)
	btitle.addImage("btitle",btitleimg)
	btitle.scale=0.15

	pos1=createSprite(250,400)
	pos1.addImage("pos1",pos1img)
	pos1.scale=0.35

	pos2=createSprite(1150,430)
	pos2.addImage("gameshow",pos2img)
	pos2.scale=0.4

	backgroun=createSprite(700,350,1400,700)
	backgroun.addImage("bg",board);
	backgroun.scale=1.5

	go=createSprite(700,180)
	go.addImage("gameover",goimg)
	go.scale=0.5


	fplayer=createSprite(200,350,200,400)
	fplayer.addImage("player",player1)
	fplayer.scale=0.08;
	fplayer.setCollider ("rectangle",0,0,600,1300)
	

	wallgroup=new Group()
	edgegroup=new Group();

	topedge=createSprite(700,100,1200,20);
	topedge.shapeColor="black";
	edgegroup.add(topedge)
	botedge=createSprite(700,600,1200,20);
	botedge.shapeColor="black";
	edgegroup.add(botedge)
	ledge=createSprite(100,350,20,520);
	ledge.shapeColor="black";
	edgegroup.add(ledge)
	redge=createSprite(1300,350,20,520);
	redge.shapeColor="black";
	edgegroup.add(redge)
	midedge=createSprite(1000,350,20,520);
	midedge.visible=false


	wall1=createSprite(350,250,15,100);
	wall1.shapeColor="red";
	wallgroup.add(wall1);
	wall2=createSprite(650,300,15,100);
	wall2.shapeColor="red";
	wallgroup.add(wall2);
	wall3=createSprite(950,450,15,100);
	wall3.shapeColor="red";
	wallgroup.add(wall3);


	wall6=createSprite(1200,500,20,20);
	wall6.shapeColor="red";
	wallgroup.add(wall6);

	wall1.velocityY=-7
	wall2.velocityY=7
	wall3.velocityY=-7



	wall6.velocityX=7
	wall6.velocityY=-7


	trophy=createSprite(1200,400)
	trophy.addImage("trophy",trophyimg)
	trophy.scale=0.08


	vic=createSprite(700,180)
	vic.addImage("victory",vicimg)
	vic.scale=0.5



	Engine.run(engine);

	/*render= Render.create({
		element: document.body,
		engine: engine,
		options:{
			width:1400,
			height:700,
			wireframes:false
		}
	});
	Render.run(render);*/
}


function draw() 
{

	wallgroup.bounceOff(edgegroup);
	wall6.bounceOff(midedge)

  rectMode(CENTER);

  gs.visible=false
  maze.visible=false
  player.visible=false
  btitle.visible=false
  pos1.visible=false;
  pos2.visible=false;
  go.visible=false
  backgroun.visible=false
  fplayer.visible=false;
  topedge.visible=false
  botedge.visible=false
  ledge.visible=false
  redge.visible=false
  wall1.visible=false;
  wall2.visible=false
  wall3.visible=false
  vic.visible=false


  wall6.visible=false
  trophy.visible=false

if(gamestate==="ready")
{
	background(board);
	gs.visible=true
	player.visible=true
//	maze.visible=true

if(keyDown("ENTER"))
{
	gamestate="level1ins"
}

}


  if(gamestate==="level1ins")
	{
		gs.visible=false;
		player.visible=false;
		btitle.visible=true;
		pos1.visible=true
		pos2.visible=true

		if(keyDown("SPACE"))
		{
			gamestate="level1";
		}
	
	}


  if(gamestate==="level1")
  {
 
	 background(bg);
	 
	 if(frameCount%30===0)
	 {
		 timer=timer-1
	 }
	  
	  player.addImage("player",player2);
	  player.scale=0.22
	  player.visible=true
  

  if(keyDown("up"))
  {
	  // ball.body.position.x=200
	  Body.setStatic(ball.body,false)
	  Body.applyForce(ball.body,ball.body.position,{x:60,y:-90});
  }
  


  if(ball.body.position.x>1400)
  {
	ball= new Ball(380,260.5,35,180)
  };


  if(ball.body.position.x>1100 && ball.body.position.x<1300 && ball.body.position.y>250 && ball.body.position.y<300)
  {
	score=score+1
	ball.body.position.x=ball.body.position.x+1000

  }
 



if(gamestate==="level1")
{
	fill("yellow");
textSize(80);
text(timer,710,200)
text("0",595,200)
text(Math.round(timer/120),635,200);
text("Score : "+score,70,150)
}



groundObject.display();
ball.display();
hoop.display();

if(score==12)
{
	gamestate="level2"
}

if(timer==0)
{
	gamestate="GO";
}
  }


  if(gamestate==="GO")
{
	backgroun.visible=true
	go.visible=true

	if(keyDown("r"))
	{
		gamestate="ready"
		timer=60
		score=0
	}

}

if(gamestate==="level2")
{
	timer=-5
	background(board);
	fplayer.visible=true;
	topedge.visible=true
	botedge.visible=true
	ledge.visible=true
	redge.visible=true
	wall1.visible=true;
	wall2.visible=true
	wall3.visible=true


	wall6.visible=true
	trophy.visible=true

	if(keyDown("up"))
	{
		fplayer.y=fplayer.y-7
	}
	if(keyDown("down"))
	{
		fplayer.y=fplayer.y+7
	}
	if(keyDown("left"))
	{
		fplayer.x=fplayer.x-7
	}
	if(keyDown("right"))
	{
		fplayer.x=fplayer.x+7
	}
	fplayer.bounceOff(edgegroup)

	if(wallgroup.isTouching(fplayer))
	{
		gamestate="GO"
		fplayer.x=200
	}

	if(fplayer.isTouching(trophy))
	{
		gamestate="win"
	}


}

if(gamestate==="win") 
{
	background(board)
	vic.visible=true
	wall2.visible=false
	wall3.visible=false
	wall6.visible=false

	if(keyDown("r"))
	{
		gamestate="ready"
		timer=60
		score=0
	}

}


drawSprites();




textSize(30)
fill("white")

if(gamestate==="ready")
{
	text("You are in a game show",500,370);
	text("where you have to complete 2 challenges",500,450)
	text("to win the prize.",500,530)
	text("Press 'ENTER' to continue.",500,610)
}
else{
	text("",20,20)
}
 
  if(gamestate==="level1ins")
	{
		text("This is a Basketball challenge.",400,300)
		text("You have to score 12 baskets in 1 minute",400,360)
		text("before the timer runs out.",400,420);
		text("Press 'UP' to throw the ball. ",400,480 )
		text("Press 'SPACE' to Start.",400,540)
	}

if(gamestate==="GO")
{
	text("You Lost the challenge.",520,400);
	text("Press 'R' to restart.",550,500)
}

if(gamestate==="win")
{
	text("You have completed all the challenges",450,350)
	text("and WON the game.",550,450)
	text("Press 'R' to restart.",570,550)
}
}

