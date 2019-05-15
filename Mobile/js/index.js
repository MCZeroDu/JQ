$(function(){
		var canvas = $('canvas');
		console.log(canvas);
		canvas.each(function(index,element){
		var context = canvas.get(index).getContext('2d');
			var img = new Image();
			setInterval(function(){
				img.src = "images/product/product1.png";
				context.drawImage(img,-5,-10,300,150);
			},2000);
				
		});
 		
		 var swiper = new Swiper('.swiper-container',{
	    	loop:true,
	    	autoplay: {
		      delay: 2000,
		      disableOnInteraction: false,
		      waitForTransition: false,
	    	},
    	});
    })