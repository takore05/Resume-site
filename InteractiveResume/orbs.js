var green = function(p){
  p.myCanvas = null;
  p.angle=0;
  p.x =0;
  p.y=0;
  p.body =null;
  p.move = true;
  p.toScroll = null;
  p.scrollY = 0;

  p.setup = function(){
    p.mainpg = document.getElementById("main");
    p.myCanvas = p.createCanvas(p.mainpg.clientHeight*0.075,     p.mainpg.clientHeight*0.075);
    p.myCanvas.position(0,0);
  }

  p.draw = function(){
    p.fill('#39FF14');
    p.noStroke();
    p.circle(p.width/2,p.height/2,p.width-3); 
    if(p.move){
      p.moving();
    }
  }

  p.moving = function(){
    p.body = document.getElementById("main");
    p.x = p.map(p.cos(p.angle),-1,1,0,p.body.clientWidth);
    p.y = p.map(p.sin(p.angle),-1,1,0,p.body.clientHeight);
    p.myCanvas.position(p.x,p.y);
    p.angle+=0.01;
  }

  p.keyPressed = function(){
    if(p.keyCode == p.ENTER){
      if(p.move){
        p.move = false;
      }
      else{
        p.move=true;
      }
    }
  }

  p.mouseClicked = function(){
    if( (0<=p.mouseX && p.mouseX<=p.width) && (0<=p.mouseY && p.mouseY<=p.height)){
      toggleAppear(document.getElementById("award"));
    }
  }

  p.windowResized = function(){
    p.mainpg = document.getElementById("main");
    p.resizeCanvas(p.mainpg.clientHeight*0.075, p.mainpg.clientHeight*0.075);
  }
};

var blue = function(p){
  p.myCanvas = null;
  p.angle=-10;
  p.x =0;
  p.y=0;
  p.body =0;
  p.h =0;
  p.w=0;
  p.move = true;
  
  p.setup = function(){
    p.mainpg = document.getElementById("main");
    p.myCanvas = p.createCanvas(p.mainpg.clientHeight*0.075,     p.mainpg.clientHeight*0.075);
    p.myCanvas.position(0,0);
  }
  
  p.draw = function(){
    p.fill('#4deeea');
    p.noStroke();
    p.circle(p.width/2,p.height/2,p.width-3); 
    if(p.move){
      p.moving();
    }
  }
  
  p.moving = function(){
    p.body = document.getElementById("main");
    p.h = p.body.clientHeight;
    p.w = p.body.clientWidth;
    p.x = p.map(p.cos(p.angle),-1,1,0,p.w);
    p.y = p.map(p.sin(p.angle),-1,1,0,p.h);
    p.myCanvas.position(p.x,p.y);
    p.angle-=0.01;
  }

  p.keyPressed = function(){
    if(p.keyCode == p.ENTER){
      if(p.move){
        p.move = false;
      }
      else{
        p.move=true;
      }
    }
  }

  p.mouseClicked = function(){
    if( (0<=p.mouseX && p.mouseX<=p.width) && (0<=p.mouseY && p.mouseY<=p.height)){
      toggleAppear(document.getElementById("skills"));
    }
  }

  p.windowResized = function(){
    p.mainpg = document.getElementById("main");
    p.resizeCanvas(p.mainpg.clientHeight*0.075, p.mainpg.clientHeight*0.075);
  }
};

var purple = function(p){
  p.myCanvas = null;
  p.angle=10;
  p.x =0;
  p.y=0;
  p.body =0;
  p.h =0;
  p.w=0;
  p.move = true;
  
  p.setup = function(){
    p.mainpg = document.getElementById("main");
    p.myCanvas = p.createCanvas(p.mainpg.clientHeight*0.075,     p.mainpg.clientHeight*0.075);
    p.myCanvas.position(0,0);
  }
  
  p.draw = function(){
    p.fill('#7122fa');
    p.noStroke();
    p.circle(p.width/2,p.height/2,p.width-3); 
    if(p.move){
      p.moving();
    }
  }
  
  p.moving = function(){
    p.body = document.getElementById("main");
    p.h = p.body.clientHeight;
    p.w = p.body.clientWidth;
    p.x = p.map(p.cos(p.angle),-1,1,0,p.w);
    p.y = p.map(p.sin(p.angle),-1,1,0,p.h);
    p.myCanvas.position(p.x,p.y);
    p.angle+=0.01;
  }

  p.keyPressed = function(){
    if(p.keyCode == p.ENTER){
      if(p.move){
        p.move = false;
      }
      else{
        p.move=true;
      }
    }
  }

  p.mouseClicked = function(){
    if( (0<=p.mouseX && p.mouseX<=p.width) && (0<=p.mouseY && p.mouseY<=p.height)){
      toggleAppear(document.getElementById("experience"));
    }
  }

  p.windowResized = function(){
    p.mainpg = document.getElementById("main");
    p.resizeCanvas(p.mainpg.clientHeight*0.075, p.mainpg.clientHeight*0.075);
  }
};

if(window.outerWidth>1200){
  var orb1 = new p5(green);
  var orb2 = new p5(blue);
  var orb2 = new p5(purple);
}
