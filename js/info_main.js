$(window).bind('load', function() {
    AOS.init();

    steam_link_btn();

    get_init_width();

    resize_all();

    toggle_menu_bar();

})

function steam_link_btn() {
    $('.steam_logo').click(function() {
        // console.log(1)
        window.open('https://store.steampowered.com/')
    })
}

function get_init_width() {
    var init_w = $(window).width();
    // console.log(init_w)
    if (init_w < 768) {
        $('.card').removeAttr('data-aos-delay')
    }

}

function resize_all() {
    // $('style').text('.timeline::before{height:'+($('.timeline').height()+100)+'px !important;}')
    $(window).resize(function() {

        // get_timeline_h()

        var w = $(window).width();
        if (w >= 768) {
            menu_open = false;
            $('.menu-btn').removeClass('open')
            $('.menu_list').hide()
            $('nav').addClass('nav_close')
            $('nav').css('height', '60px')

            var i = 0;
            $('.card').each(function() {
                $(this).attr('data-aos-delay', i)
                i += 250

            })
        } else {
            $('.card').removeAttr('data-aos-delay')
            $('nav').removeClass('nav_close')
        }
    });
}

function toggle_menu_bar(menu_open) {
    // let menu_open = false;
    $('.menu-btn').click(function() {
        if (!menu_open) {
            $(this).addClass('open');
            menu_open = true;
            $('nav').animate({ height: '100vh' });
            $('.menu_list').fadeIn(200)
        } else {
            $('nav').animate({ height: '60px' });
            $(this).removeClass('open')
            $('.menu_list').fadeOut(200)
            menu_open = false;
        }
    })
}