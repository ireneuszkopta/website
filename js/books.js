$(function(){

if(screen.width >= 1200){
	$(window).on('scroll',function(){
		var windowScroll = $(window).scrollTop();
		var topheader = $('#header').innerHeight();
		if(windowScroll == 0 ){
			$('ul').slideUp(500);
		}else if(windowScroll >= topheader ){
			$('ul').css('visibility', 'visible').slideDown();
			
			
		}
	})


	 $('a').on('click',function(e){
	  	var link = $(this).text();
	  	if(link == "Reviews"){
	  	e.preventDefault();
	  };
	  	$('html, body').animate({
	  		"scrollTop" : $('body').offset().top },1400
	  	)
	  })
}		
if(screen.width < 1200){
	
		$(".menu").on("click",function(){
		$("nav").toggleClass("drop");
	})

}


}());

