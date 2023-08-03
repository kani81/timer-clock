var second=document.getElementById("sec");
var minute=document.getElementById("min");
var hours=document.getElementById("hrs");
var timerstart=document.getElementById("start");
var timerstop=document.getElementById("stop");
var timerreset=document.getElementById("reset");

var a=0;
var b=0;
var c=0;
timerstart.addEventListener("click",function(){
	ms=setInterval(timer,1000);
	
})
timerstop.addEventListener("click",function(){
	clearInterval(ms);
	
})
timerreset.addEventListener("click",function(){
	clearInterval(ms);
	a="00";
	b="00";
	c="00";
	second.innerHTML=a;
	minute.innerHTML=b;
	hours.innerHTML=c;
	
	
	
})
function timer(){
	if(a<9){
		a++;
		second.innerHTML="0"+a;
	}
	else if((a=>9)&&(a<59)){
		a++;
		second.innerHTML=a;
		
	}
	
	else{
		clearInterval(second);
		a=0;
		
		
	if(b<9){
		b++;
		minute.innerHTML="0"+b;
	}
	else if((b=>9)&&(b<59)){
		b++;
		minute.innerHTML=b;
		
	}

	else{
		clearInterval(minute);
		b=0;
		
	if(c<9){
		c++;
		hours.innerHTML="0"+c;
	}
	else if((c=>9)&&(c<59)){
		c++;
		hours.innerHTML=c;
		
	}
	
	else{
		clearInterval(hours);
		c=0;
	}	
	}
	}
	
}



