var load=document.getElementById('beforeonload').getElementsByTagName('li');
var lay=document.getElementById('beforeonload');
var color=new Array('#339933','#ffcc33','#336699');
var index=1;

var id=setInterval(fn,1);
function fn(){
	for(var i=0;i<load.length;i++){
		load[i].style.color=color[(index+i+1)%3];
	}
	index=(index+1)%3;
}

window.onload=function(){
	clearInterval(id);
	lay.style.display='none';
}