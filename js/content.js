
var current = 0;
var article = 0;
var category = "all";
	
//projects
var imgArray = [
	"FA-Guide_160-1.jpg", "design", "FRASER ACADEMY, STUDENT & PARENT GUIDES", "place-holder"
	, "psyl_160.jpg", "type", "PEARSON SEMINAR ON YOUTH LEADERSHIP", "place-holder"
	, "BeluWater_160.jpg", "design", "BELU WATER", "place-holder"
	, "EarthCharter_160.jpg", "design", "EARTH CHARTER", "place-holder"
	, "Navitas_160.jpg", "design", "NAVITAS", "place-holder"
	, "Democracy_160.jpg", "type", "DEMOCRACY", "place-holder"
	, "Designing_160.jpg", "design", "DESIGNING THE FUTURE", "place-holder"
	, "Mio_160.png", "type", "MIO ALBUM COVER", "place-holder"
	, "Axis_160.jpg", "design", "AXIS RESOLVE", "place-holder"
	, "CrazyCritter_160.png", "design", "CRAZY CRITTER CARDS", "place-holder"
	, "Qantm_160.png", "web", "QANTM", "place-holder"
	, "MountainGoat_160.jpg", "design", "MOUNTAIN GOAT BEER", "place-holder"
	, "PingsPlace_160.jpg", "design", "PING'S PLACE BUSINESS CARDS", "place-holder"
	, "Shot_160.jpg", "design", "SHOT OF ROCK", "place-holder"
	, "Foreseeable_160.png", "type", "A FORESEEABLE FUTURE", "place-holder"
	, "Fuse_160.jpg", "type", "FUSE MAGAZINE POSTER", "place-holder"
	
];
var imgLength = imgArray.length;

//news articles
var newsArray = [
	"NOVEMBER, 2011", "LONELY PLANET PUBLISHES INFO GRAPHIC IN NEW BOOK",
	"NOVEMBER, 2010", "FABRICA",
	
];
var newsLength = newsArray.length;

//main function
function Content(url) {
    Initialize();
	Helpers();
	Links();
	Navigation();
	//Social();
	Bookmarks(url);
}

function Initialize() {    
    for (var i = 0; i < imgLength; i+=4) {
    	$('#show').append($('<img class="viewer"/>').attr({'src':'images/'+imgArray[i], 'id':[i]}));
    }	 
    $('.viewer').wrap('<div class="div-img"/>')
    			.wrap("<ul class='image-overlay'/>")
			    .wrap('<li/>')
			    .wrap('<a/>');
	
    $('.viewer').after('<h3 class="title"></h3>');
	
    $('.title').wrap('<div class="caption"/>')
			   .after('<p>&nbsp;</p>');	
	
	for (var i = 0; i < imgLength; i+=4) {
		$('#'+i).parent().find('h3').text(imgArray[i+2]);
	}	
	//helper add class's
	for (var i = 0; i < imgLength; i+=4) {
		$('#'+i).parent().parent().parent().addClass('pic'+i);
		$('#'+i).parent().parent().parent().addClass(imgArray[i+1]);		
	}	
	for (var i = 0; i < newsLength; i+=2) {
    	$('#news').append($('<div class="viewer"/>').attr({'id':'news'+[i]}));
    }
	for (var i = 0; i < newsLength; i+=2) {
    	$('#news'+i).append('<h4></h4><h5 class="article"></h5>');
    }
	for (var i = 0; i < newsLength; i+=2) {
		$('#news'+i).find('h4').text(newsArray[i]);
	}
	for (var i = 0; i < newsLength; i++) {
		$('#news'+i).find('h5').text(newsArray[++i]);
	}	
	//news 'more' roll over
	for (var i = 0; i < newsLength; i+=2) {
		$('#news'+i).hover(function() {
			$(this).addClass('bkimg');		
		}, function() {
			$(this).removeClass('bkimg');			
		});
	}
}

function Helpers() {	
	//helper - project action when clicked
    $('.image-overlay').live('click', function() {
		$('#about').hide();
		$('#news').hide();
		$('#show').hide();
		$('#category_nav').show();
		$('#category').show();
	});	
	//helper - article action when clicked
    $('div.viewer').live('click', function() {
		$('#about').hide();
		$('#news').hide();
		$('#show').hide();
		$('#category_nav').hide();
		$('#news_nav').show();
		$('#category').show();
	});	
	//helper - keep border on rollover for project images
	$('.caption').hover(function() {
		$('ul.image-overlay li a img').css('border-top', '3px solid');
	}, function() {
		$('ul.image-overlay li a img').css('border-top', '3px solid');
	});
}

function Links() {	
	//messy project links
	$('.pic0').live('click', function() {$('#category').load("projects/project1.html");current=0;}); //1
	$('.pic4').live('click', function() {$('#category').load("projects/project2.html");current=4}); //2
	$('.pic8').live('click', function() {$('#category').load("projects/project3.html");current=8}); //3
	$('.pic12').live('click', function() {$('#category').load("projects/project4.html");current=12}); //4
	$('.pic16').live('click', function() {$('#category').load("projects/project5.html");current=16}); //5
	$('.pic20').live('click', function() {$('#category').load("projects/project6.html");current=20}); //6
	$('.pic24').live('click', function() {$('#category').load("projects/project7.html");current=24}); //7
	$('.pic28').live('click', function() {$('#category').load("projects/project8.html");current=28}); //8
	$('.pic32').live('click', function() {$('#category').load("projects/project9.html");current=32}); //9
	$('.pic36').live('click', function() {$('#category').load("projects/project10.html");current=36}); //10
	$('.pic40').live('click', function() {$('#category').load("projects/project11.html");current=40}); //11
	$('.pic44').live('click', function() {$('#category').load("projects/project12.html");current=44}); //12
	$('.pic48').live('click', function() {$('#category').load("projects/project13.html");current=48}); //13
	$('.pic52').live('click', function() {$('#category').load("projects/project14.html");current=52}); //14
	$('.pic56').live('click', function() {$('#category').load("projects/project15.html");current=56}); //15
	$('.pic60').live('click', function() {$('#category').load("projects/project16.html");current=60}); //16
	
	//messy news links
	$('#news0').live('click', function() {$('#category').load("news/news1.html");article = 0;}); //1
	$('#news2').live('click', function() {$('#category').load("news/news2.html");article=2;}); //2
	$('#news4').live('click', function() {$('#category').load("news/news3.html");article=4;}); //3
	$('#news6').live('click', function() {$('#category').load("news/news4.html");article=6;}); //4
	$('#news8').live('click', function() {$('#category').load("news/news5.html");article=8;}); //5
	$('#news10').live('click', function() {$('#category').load("news/news6.html");article=10;}); //6
	$('#news12').live('click', function() {$('#category').load("news/news7.html");article=12;}); //7
	$('#news14').live('click', function() {$('#category').load("news/news8.html");article=14;}); //8
	$('#news16').live('click', function() {$('#category').load("news/news9.html");article=16;}); //9
	$('#news18').live('click', function() {$('#category').load("news/news10.html");article=18;}); //10
	$('#news20').live('click', function() {$('#category').load("news/news11.html");article=20;}); //11
	$('#news22').live('click', function() {$('#category').load("news/news12.html");article=22;}); //12
	$('#news24').live('click', function() {$('#category').load("news/news13.html");article=24;}); //13
	$('#news26').live('click', function() {$('#category').load("news/news14.html");article=26;}); //14
	$('#news28').live('click', function() {$('#category').load("news/news15.html");article=28;}); //15
	$('#news30').live('click', function() {$('#category').load("news/news16.html");article=30;}); //16
}

function Navigation() {	
	//project nav - next category
	$('p.link-next').live('click', function() {
		current+=4;
		var maxCategory = 0;
		var minCategory = 0;	
		//no category
		if (category == "all") {
			if (current < imgLength) {
				$('.pic'+current).trigger('click');
				return;
			}
		}
		//max project in category
		for (var i = 0; i < imgLength; i++) {
			if ($('.pic'+i).hasClass(category)) {
				maxCategory = i; 
			}
		}
		//min project in category
		for (var i = 0; i < imgLength; i++) {
			if ($('.pic'+i).hasClass(category)) {
				minCategory = i;
				break;
			}
		}
		//first
		if (current > maxCategory) {
			$('.pic'+minCategory).trigger('click');
		} else {
			//next project
			for (var i = current; i < imgLength; i++) {
				if ($('.pic'+i).hasClass(category)) {
					$('.pic'+i).trigger('click');
					break;
				}
			}
		}
    });
	
	//project nav - previous category
	$('p.link-back').live('click', function() {		
		current-=4;
		var maxCategory = 0;
		var minCategory = 0;
		//no category
		if (category == "all") {
			if (current < 0) {
				$('.pic'+(imgLength-4)).trigger('click');
				return;
			} else {
				$('.pic'+current).trigger('click');
				return;
			}
		}
		//max project in category
		for (var i = 0; i < imgLength; i++) {
			if ($('.pic'+i).hasClass(category)) {
				maxCategory = i; 
			}
		}
		//min project in category
		for (var i = 0; i < imgLength; i++) {
			if ($('.pic'+i).hasClass(category)) {
				minCategory = i;
				break;
			}
		}
		//previous project in category or last
		if (current < minCategory) {
			$('.pic'+maxCategory).trigger('click');
		} else {			
			for (var i = current; i > -1; i--) {
				if ($('.pic'+i).hasClass(category)) {
					$('.pic'+i).trigger('click');
					break;
				}
			}
		}
    });
	//show all
	$('p.link-home').live('click', function() {
		$('p.link-show').trigger('click');
    });	
	//news article nav
	$('p.link-next_news').live('click', function() {
		if (article < (newsLength-2)) {
			article+=2;		
		} else {
			article = 0;
		}
		$('#news'+article).trigger('click');
    });
	$('p.link-back_news').live('click', function() {
		if (article > 0) {
			article-=2;
		} else {
			article = (newsLength-2);
		}
		$('#news'+article).trigger('click');	
    });
	$('p.link-home_news').live('click', function() {
		$('p.link-news').trigger('click');
    });	
	//Back to top
	$('h4.back').live('click', function() {
		window.scrollTo(0,0);
	});	
	//extra home link
	$('h5.home').live('click', function() {
		$('p.link-show').trigger('click');
	});	
	
    $('p.link-about').live('click', function() {
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#show').hide();
        $('#news').hide();		
        $('#content').css('border-top', '3px solid')
					 .css('border-bottom', '1px solid #999')
					 .css('width', '540px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', 'none');		
        $('#right_info').show();
        $('#about').show();
        $('#line-about').show();
    });

    $('p.link-news').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#show').hide();
        $('#about').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '785px');		
		$('#footer_right').css('width', '755px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');
        $('#news').show();
    });
    
    $('p.link-show').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
    	$('#about').hide();
        $('#news').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '770px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');
        $('.div-img').show();       
        $('#show').show();
        category = "all";
    });
    
    $('p.link-design').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#about').hide();
        $('#news').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '770px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');       
        $('.div-img').hide();        
        for (var i = 0; i < imgLength; i+=4) {        	
        	if (imgArray[i+1] == 'design') {
        		$('#'+i).parent().parent().parent().parent().show();
        	}
        }        
        $('#show').show();
        category = "design";
    });
    
    $('p.link-type').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#about').hide();
        $('#news').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '770px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');
        $('.div-img').hide();        
        for (var i = 0; i < imgLength; i+=4) {        	
        	if (imgArray[i+1] == 'type') {
        		$('#'+i).parent().parent().parent().parent().show();
        	}
        }
        $('#show').show();
        category = "type";
    });
    
    $('p.link-web').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#about').hide();
        $('#news').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '770px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');
        $('.div-img').hide();        
        for (var i = 0; i < imgLength; i+=4) {        	
        	if (imgArray[i+1] == 'web') {
        		$('#'+i).parent().parent().parent().parent().show();
        	}
        }
        $('#show').show();
        category = "web";
    });
    
    $('p.link-photo').live('click', function() {
    	$('#line-about').hide();
		$('#news_nav').hide();		
    	$('#category_nav').hide();
    	$('#category').hide();
        $('#about').hide();
        $('#news').hide();
        $('#right_info').hide();		
        $('#content').css('border-top', 'none')
					 .css('width', '770px');		
		$('#footer_right').css('width', '735px')
						  .css('border-top', '1px solid #999');		
		$('#content').css('border-bottom', 'none');
        $('.div-img').hide();        
        for (var i = 0; i < imgLength; i+=4) {       	
        	if (imgArray[i+1] == 'photo') {
				$('#'+i).parent().parent().parent().parent().show();
			}
		}
        $('#show').show();
        category = "photo";
    });
}

function Social() {	
	$('img.link-twitter').live('click', function() { 
			window.open ('http://twitter.com/home?status=Currently Viewing http://jeniferbulcock.com/','_blank', false)		
	});
	$('img.link-facebook').live('click', function() {
		window.open ('http://www.facebook.com/share.php?u=http://jeniferbulcock.com/&t=Jenifer%20Bulcock','_blank', false)
	});
	$('img.link-google').live('click', function() {
		window.open ('https://accounts.google.com/ServiceLogin?service=oz&continue=https://plus.google.com/','_blank', false)
	});
}

function Bookmarks(url) {
	
	var query = url.split("#");
	if (query[1] != null) {
		
		if (query[1] == "news") {$('link-news').trigger('click'); return;}
		if (query[1] == "about") {$('link-about').trigger('click'); return;}
	}
	
	//if (url == "#News") {
//		alert(url);
//		$('news-link').trigger('click');
//	}
}

