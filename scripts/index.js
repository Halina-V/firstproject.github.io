// открытие меню навигации
function myFunction(){
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// выпадающее меню
function dropdownMenu(){
	var x = document.getElementById("myDropdownMenu");
	if (x.className === "dropdown-menu") {
		x.className += " responsive";
	} else {
		x.className = "dropdown-menu";
	}
}

// выпадающее меню для страницы с услугами
function serviceDropdownMenu(){
	var x = document.getElementById("myServiceDropdownMenu");
	if (x.className === "sidebar-submenu-list") {
		x.className += " responsive";
	} else {
		x.className = "sidebar-submenu-list";
	}
}


// меню навигации меняет цвет, кнопка to-top
var navMenu = $(".navigation"); 
var navMenuTop = navMenu.offset().top;
var toTop = $(".arrow-totop"); 
var body = $("html, body");

$(window).on("resize", function() {
	navMenuTop = navMenu.offset().top;
});

$(window).on("scroll", function(){
	var winScrollTopValue = $(window).scrollTop(); 

	if (winScrollTopValue > navMenuTop && winScrollTopValue > 200) {
		navMenu.addClass("navigation-fixed");
	} else {
		navMenu.removeClass("navigation-fixed");
	}
	
	if (winScrollTopValue > 1000) {
		toTop.fadeIn(500); 
	} else if (winScrollTopValue < 1000) {
		toTop.hide(); 
	}
});

toTop.on("click", toTopClicked);


function toTopClicked(e) {
	e.preventDefault(); 
	$("body").toggleClass("test");
	body.animate(
		{ scrollTop: 0 },
		1800
		);
}

// кнопки для строки поиска
function openSearch(){
	document.getElementById("myOverlay").style.width = "120%";
}

function closeSearch(){
	document.getElementById("myOverlay").style.width = "0";
}


