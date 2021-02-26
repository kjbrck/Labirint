var canvas = document.getElementById('platno');
var ctx = canvas.getContext('2d');
//ctx.scale(0.3,0.3);
var y=0;
var x = 145;
var nar=1;
var dx=1;
var dy=1;

var ov = 0;

var villager = new Image();//
villager.src="img/villager.png";//
var audioClick = new Audio('audio/click.mp3');
var audioVillagerHaaa = new Audio('audio/villagerHaaa.mp3');

function imgButton(){
	audioClick.play();
	setInterval(drawIt,25);
}
   
function drawIt() {
	ctx.fillStyle = "red";
	ctx.lineCap="round";
	if(nar==1)
		ctx.fillRect(x,y,1,1);//koordinati + širina in višina
	else if(nar==2){
		ctx.clearRect(x-7,y-7,13,13);
		ctx.drawImage(villager, x-5, y-5, 10, 10); 
	}
	if(ov == 0){
	  	if(x==145&&y<2)
	  		y+=dy;
	  	else if(y==2&&x<155)
	  		x+=dx;
	  	else if(x==155&&y<8)
	  		y+=dy;
	  	else if(y==8&&x>145)
	  		x-=dx;
	  	else if(x==145&&y<22)
	  		y+=dy;
	  	else if(y==22&&x>135)
	  		x-=dx;
	  	else if(x==135&&y<27)
	  		y+=dy;
	  	else if(y==27&&x<153)
	  		x+=dx;
	  	else if(x==153&&y<42)
	  		y+=dy;
	  	else if(y==42&&x<164)
	  		x+=dx;
	  	else if(x==164&&y>38)
	  		y-=dy;
	  	else if(y==38&&x<184)
	  		x+=dx;
	  	else if(x==184&&y<42)
	  		y+=dy;
	  	else if(y==42&&x<193)
	  		x+=dx;
	  	else if(x==193&&y<47)
	  		y+=dy;
	  	else if(y==47&&x<203)
	  		x+=dx;
	  	else if(x==203&&y<52)
	  		y+=dy;
	  	else if(y==52&&x<213)
	  		x+=dx;
	  	else if(x==213&&y<57)
	  		y+=dy;
	  	else if(y==57&&x<223)
	  		x+=dx;
	  	else if(x==223&&y<62)
	  		y+=dy;
	  	else if(y==62&&x>203)
	  		x-=dx;
	  	else if(x==203&&y>58)
	  		y-=dy;
	  	else
	  		ov = 1;
  	}
  	else if(ov == 1){
	  	if(y==58&&x>193)
	  		x-=dx;
	  	else if(x==193&&y>52)
	  		y-=dy;
	  	else if(y==52&&x>186)
	  		x-=dx;
	  	else if(x==186&&y<62)
	  		y+=dy;
	  	else
	  		ov = 2;
  	}
  	else if(ov == 2){
  		if(y==62&&x<193)
	  		x+=dx;
	  	else if(x==193&&y<72)
	  		y+=dy;
	  	else if(y==72&&x>185)
	  		x-=dx;
	  	else if(x==185&&y<82)
	  		y+=dy;
	  	else if(y==82&&x>175)
	  		x-=dx;
	  	else if(x==175&&y<87)
	  		y+=dy;
	  	else if(y==87&&x<203)
	  		x+=dx;
	  	else
	  		ov = 3;
  	}
  	else if(ov == 3){
  		if(x==203&&y<92)
  			y+=dy;
  		else if(y==92&&x<213)
	  		x+=dx;
	  	else if(x==213&&y<112)
	  		y+=dy;
	  	else if(y==112&&x>195)
	  		x-=dx;
	  	else if(x==195&&y<126)
	  		y+=dy;
	  	else if(y==126&&x<204)
	  		x+=dx;
	  	else if(x==204&&y>122)
	  		y-=dy;
	  	else if(y==122&x<214)
	  		x+=dx;
	  	else if(x==214&&y<127)
	  		y+=dy;
	  	else if(y==127&x<224)
	  		x+=dx;
	  	else if(x==224&&y<141)
	  		y+=dy;
	  	else if(y==141&&x>215)
	  		x-=dx;
	  	else if(x==215&&y>132)
	  		y-=dy;
	  	else if(y==132&&x>205)
	  		x-=dx;
	  	else if(x==205&&y<136)
	  		y+=dy;
	  	else
	  		ov = 4;
  	}
  	else if(ov == 4){
  		if(y==136&&x>195)
	  		x-=dx;
	  	else if(x==195&&y>131)
	  		y-=dy;
	  	else if(y==131&&x>185)
	  		x-=dx;
	  	else if(x==185&&y>127)
	  		y-=dy;
	  	else if(y==127&&x>175)
	  		x-=dx;
	  	else if(x==175&&y>122)
	  		y-=dy;
	  	else if(y==122&&x>165)
	  		x-=dx;
	  	else if(x==165&&y<126)
	  		y+=dy;
	  	else if(y==126&&x>146)
	  		x-=dx;
	  	else if(x==146&&y>117)
	  		y-=dy;
	  	else if(y==117&x<155)
	  		x+=dx;
	  	else if(x==155&&y>112)
	  		y-=dy;
	  	else if(y==112&&x>115)
	  		x-=dx;
	  	else
	  		ov = 5;
  	}
  	else if(ov == 5){
  		if(x==115&&y<126)
	  		y+=dy;
	  	else if(y==126&&x>105)
	  		x-=dx;
	  	else if(x==105&&y<132)
	  		y+=dy;
	  	else if(y==132&&x>95)
	  		x-=dx;
	  	else if(x==95&&y<136)
	  		y+=dy;
	  	else if(y==136&x<134)
	  		x+=dx;
	  	else
	  		ov = 6;
  	}
  	else if(ov == 6){
  		if(x==134&&y>132)
	  		y-=dy;
	  	else if(y==132&x<144)
	  		x+=dx;
	  	else if(x==144&&y<146)
	  		y+=dy;
	  	else if(y==146&x<154)
	  		x+=dx;
	  	else if(x==154&&y<149)
	  		y+=dy;
	  	if(x==154&&y==149){
        	x=145;
        	y=0;
        	ov = 0;
			if(nar==1){
    			nar++;
			}
		else{
    		ctx.clearRect(100, 244, 200, 300);   
    		nar++;
    		audioVillagerHaaa.play();
        	setTimeout(function(){
	        	location.reload();
	        	}, 2000);
			}
		}
  	}
}
//setInterval(drawIt,25);