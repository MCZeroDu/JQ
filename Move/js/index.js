
window.onload = function(){
	var img_ul = document.getElementsByClassName("tu")[0];
	var img_li = img_ul .getElementsByTagName("li");
	var span = document.getElementsByClassName("tt")[0];
	var sp = span.getElementsByTagName("span");
	var num =0;
	for (var i=0;i<sp.length;i++) {
		sp[i].index = i;
		sp[i].onclick = function(){
			tua(this.index);
		}
	}
	function tua(num){
		for (var i=0;i<sp.length;i++) {
				 sp[i].className = "";
				 img_li[i].className = ""
			}
			sp[num].className = "hu";
			img_li[num].className = "tu_01";
	}
	function huo(){
		num++;
		if (num>3) 
			num=0;
		tua(num);
	}
	setInterval(huo,1000);
	
	//初始化手指坐标
	var azx = 0;
	var bzx = 0;
	//手指按下
	var box = document.querySelector(".active")//大盒子
	box.addEventListener("touchstart",function(e){
		azx = e.changedTouches[0].pageX;
		bzx = img_ul.offsetLeft;
//		console.log(bzx);
	})
	//手指滑动
	box.addEventListener("touchmove",function(e){
		var c = e.changedTouches[0].pageX; // 滑动的坐标
		var disX = c - azx; // 滑动的 坐标 减去 按下去的坐标 
		var lef = bzx + disX;
		box.style.left = lef + 'px';
		console.log(lef);
	})
}


