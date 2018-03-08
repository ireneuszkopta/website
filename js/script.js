

$(function(){
    
	

	// on scroll nav bar visibility
	if(screen.width >= 1200){
    var set = true;
	$(window).on('scroll',function(){
		var windowScroll = $(window).scrollTop();
		var topheader = $('#header').innerHeight();
		if(windowScroll != 0){
			$('#learnMoreBtn').hide();
		}else{
			$('#learnMoreBtn').fadeIn(900);
		} 
		if(windowScroll == 0 ){
			$('ul').slideUp(500);
		}else if(windowScroll >= topheader ){
			$('ul').css('visibility', 'visible').slideDown();
			
			if(set == true){
			skillsAnimation();
			}
		}
	})

	
	//set underline on active link 
	$(window).on('scroll',function(){
		$('a').each(function(){
			var $this = $(this);
			var partName = $this.text();
		        partName = '#'+partName;
			var part = $(partName);
			if(part.length){
				var test = $(window).scrollTop()  >= part.offset().top - 100;
			if(test){
				$this.addClass('active');
				$('a').not($this).removeClass('active');
			}
			if(!test){
				$this.removeClass('active');
			}
		}
		});
	})

  
	    
	//on click navigation animation
	$('.scroll').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
		"scrollTop" : $('#About').offset().top },1400,function(){$('ul')
		.css('visibility', 'visible')
		.hide()
		.slideDown()});
		
		skillsAnimation();
	})

	  $('li a').on('click',function(e){
	  	var link = $(this).text();
	  	if(link == "About" || link == "Contact"){
	  	e.preventDefault();
	  };
	  	var target = $(this).html();
	  	$('html, body').animate({
	  		"scrollTop" : $('#maincontent').children('#' + target).offset().top },1400
	  	)
	  })

	
	//animation of skills in About div	
	
	function skillsAnimation(){
		if(set){
		$('.skills').each(function(){
			$(this).text('');
			var that = this;
			var skill = $(this);
			var dataAtr = skill.data('skill');
			var newidth = skill.css('max-width',dataAtr);
			var integer = parseInt(dataAtr.slice(0,-1));
			var i = 0;
				if(this.style.width !== newidth){
				setInterval(function(){
					
					if(i < integer){

						skill.text(i + '%');
						i++;
					}
				},20);

				skill.css('width',dataAtr);
				// skill.animate({
				// 	width:newidth
				// 	},3000)
				}
			}
		)
		set = false;
		}
	}

	}

// tablet/mobile 
if(screen.width < 1200){
	//menu 
	$(".menu").on("click",function(){
		$("nav").toggleClass("drop");
	})

	$('li a').on('click',function(e){
	  	var link = $(this).text();
	  	$("nav").toggleClass("drop");
	  	if(link == "About" || link == "Contact"){
	  	e.preventDefault();
	  };
	  	var target = $(this).html();
	  	$('html, body').animate({
	  		"scrollTop" : $('#maincontent').children('#' + target).offset().top },1400
	  	)
	  })
		// adding text to skill bars
		$('.skills').each(function(){
			var skill = $(this);
			var dataAtr = skill.data('skill');
			skill.text(dataAtr);
		})
}

}())


