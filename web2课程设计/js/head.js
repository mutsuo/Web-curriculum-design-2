$(function(){document.body.scrollTop=0;
//语言调整
//只有局部效果

//是否选中
//true-->选中
//false-->未选中
//初始状态为ch被选中
var f1=true;	//ch
var f2=false;	//en
var ch=document.getElementsByClassName("lan_ch")[0];
var en=document.getElementsByClassName("lan_en")[0];

// 选中：#85b8f2
// 滑上：#dce6f5
// 未被为选中： #fff
$(".lan_ch").mouseover(function(){
	if(f1==false){
		ch.style.color='#dce6f5';
	}
});
$('.lan_ch').mouseout(function(){
	if(f1==true){
		ch.style.color='#85b8f2';
	}
	else{
		ch.style.color='#fff';
	}
});
$(".lan_ch").click(function(){
	if(f1==false){
		ch.style.color='#85b8f2';
		en.style.color='#fff';
		f1=true;
		f2=false;
	}
});

$(".lan_en").mouseover(function(){
	if(f2==false){
		en.style.color='#dce6f5';
	}
});
$('.lan_en').mouseout(function(){
	if(f2==true){
		en.style.color='#85b8f2';
	}
	else{
		en.style.color='#fff';
	}
});
$(".lan_en").click(function(){
	if(f2==false){
		en.style.color='#85b8f2';
		ch.style.color='#fff';
		f2=true;
		f1=false;
	}
});

//搜索下拉列表
var main=document.getElementsByClassName('choice_content_ou')[0];
var down=document.getElementsByClassName('choice_content')[0];
main.onmouseover=function(){
	down.style.display='block';
}
main.onmouseout=function(){
	down.style.display='none';
}
$('.choice_content li').mouseover(function(){
	this.style.background='rgba(153,102,51,0.8)';
	this.getElementsByTagName('a')[0].style.color='#fff';
	this.style.fontWeight='bold';
})
$('.choice_content li').mouseout(function(){
	this.style.background='rgba(255,255,255,0.8)';
	this.getElementsByTagName('a')[0].style.color='#000';
	this.style.fontWeight='normal';
});

//下拉列表选项
var c1=document.getElementsByClassName('c1')[0];
var c2=document.getElementsByClassName('c2')[0];
var base=document.getElementsByClassName('base')[0];
$(c1).click(function(){
	console.log(c1.firstChild);
	base.firstChild.innerHTML=c1.firstChild.innerHTML;
	base.firstChild.style.fontWeight='bold';
	down.style.display='none';
});
$(c2).click(function(){
	base.firstChild.innerHTML=c2.firstChild.innerHTML;
	base.firstChild.style.fontWeight='bold';
	down.style.display='none';
});

//搜索确定
var search_enter=document.getElementsByClassName('content')[0];
var wrong=document.getElementsByClassName('search-wrong')[0];
search_enter.onkeyup=function(e){
	console.log(e);
	if(e.keyCode==13 && search_enter.value!=''){
		window.location.href='https://www.baidu.com';
	}
	else if(search_enter.value==''){	
		wrong.style.display='block';
	}
	else{
		wrong.style.display='none';
	}
}
$(search_enter).blur(function(){
	if(search_enter.value!=''){
		wrong.style.display='none';
	}
})
var btn=document.getElementById('search-enter').firstChild;
$(btn).click(function(){
	if(search_enter.value!=''){
		window.location.href='https://www.baidu.com';
		wrong.style.display='none';
	}
	else{
		wrong.style.display='block';
	}
})

//nav & nav go along & go back to the top
var topbtn=document.getElementById('top');
$(".navv ul li").mouseover(function(){
	this.style.backgroundColor='#604020';
});
$(".navv ul li").mouseout(function(){
	this.style.backgroundColor='#996633';
})
window.onscroll=function(){
	var top=document.body.scrollTop;
	var nav=document.getElementById('nav');
	if(top>=700){
		nav.style.position='fixed';
		nav.style.top='0px';
		topbtn.style.display='block';
	}
	else{
		nav.style.position='absolute';
		nav.style.top='620px';
		topbtn.style.display='none';
	}
}
$(topbtn).click(function(){
	document.body.scrollTop=0;
});

//自动修改书籍描述栏宽度
var bookimg=document.getElementsByClassName('cover');
var bookdes=document.getElementsByClassName('des');
for(var i=0;i<bookimg.length;i++){
	if(bookimg[i].currentStyle)
		bookdes[i].style.width=bookimg[i].currentStyle['width'];
	else
		bookdes[i].style.width=getComputedStyle(bookimg[i])['width'];
}

//描述滑入弹出
$('.book').mouseover(function(){
	var des=this.getElementsByClassName('des')[0];
	des.style.display='block';
})
$('.book').mouseout(function(){
	var des=this.getElementsByClassName('des')[0];
	des.style.display='none';
})

//轮播按钮
var al=document.getElementsByClassName('al')[0];
var ar=document.getElementsByClassName('ar')[0];
al.onmouseover=function(){
	al.style.background='rgba(255,255,255,0.8)';
}
ar.onmouseover=function(){
	ar.style.background='rgba(255,255,255,0.8)';
}
al.onmouseout=function(){
	al.style.background='rgba(255,255,255,0.5)';
}
ar.onmouseout=function(){
	ar.style.background='rgba(255,255,255,0.5)';
}

//轮播控制
var index=0;
var box=document.getElementsByClassName('box');
al.onclick=function(){
	box[index].style.display='none';
	index=(index-1+3)%3;
	box[index].style.display='block';
}
ar.onclick=function(){
	box[index].style.display='none';
	index=(index+1)%3;
	box[index].style.display='block';
}})