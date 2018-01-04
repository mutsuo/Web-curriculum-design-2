var num=document.getElementById("input-1");
var paw=document.getElementById("input-2");

var p1=document.getElementsByClassName("point")[0];
var p2=document.getElementsByClassName("point")[1];
var wr=document.getElementsByClassName("wrong")[0];
var btn=document.getElementById("btn");

$(num).keyup(function(){
	if(num.value==''){
		p1.style.display='block';
	}
	else{
		p1.style.display='none';
	}
});
$(num).keyup(function(){
	for(var i=0;i<num.value.length;i++){
		if(num.value[i]<'0'||num.value[i]>'9')
			break;
	}
	if(i<num.value.length){
		wr.style.display='block';
	}
	else{
		wr.style.display='none';	
	}
});

$(paw).keyup(function(){
	if(paw.value==''){
		p2.style.display='block';
	}
	else{
		p2.style.display='none';
	}
});

document.body.onkeyup=function(e){
	if(p1.style.display=='none' && p2.style.display=='none' && wr.style.display=='none'){
		btn.style.display='block';
		if(e.keyCode==13){
			location.href='head.html';
		}
	}
	else{
		btn.style.display='none';
	}
}
$(btn).click(function(){
	location.href='head.html';
});