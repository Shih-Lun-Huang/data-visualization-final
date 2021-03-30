$(window).bind('load', function(){
	AOS.init();

	steam_link_btn();

})

function steam_link_btn(){
	$('.steam_logo').click(function(){
		// console.log(1)
		window.open('https://store.steampowered.com/')
	})
}