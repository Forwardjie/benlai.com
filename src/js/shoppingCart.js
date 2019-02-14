$(function () {
    /*头部顶 开始*/
    $('#welcome_login').on('mouseover','dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('paddingBottom','5px');
        $(this).find('dt').css('borderBottom','none');
        $(this).find('dt a').css('background','url(../css/img/shoppingCart/n_top_ico_e5a1c5b5.png) 70px -12px no-repeat');
    });
    $('#welcome_login').on('mouseout','dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('paddingBottom','0');
        $(this).find('dt').css('borderBottom','1px solid #e8e8e8');
    });


    $('#welcome_login').on('mouseover','dl dd .user_login .fr',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#welcome_login').on('mouseout','dl dd .user_login .fr',function () {
        $(this).css('color','#78a000');
        $(this).css('text-decoration','none');
    });

    $('.head_top').on('mouseover','.head_menu .menu_word a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('.head_top').on('mouseout','.head_menu .menu_word a',function () {
        $(this).css('color','#3e4141');
        $(this).css('text-decoration','none');
    });


    $('.head_top').on('mouseover','.head_menu .towcode dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt a').css('background','url(../css/img/index/header/n_top_ipico02_d931d66e.gif) 11px 4px no-repeat');
    });
    $('.head_top').on('mouseout','.head_menu .towcode dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('background','url(../css/img/index/header/top_ipico01_708559df.gif) 11px 4px no-repeat');
    });
    $('.head_top').on('mouseover','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px -12px no-repeat');
    });
    $('.head_top').on('mouseout','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px 13px no-repeat');
    });
    $('.head_top').on('mouseover','.head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('.head_top').on('mouseout','.head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','none');
        $(this).css('color','#3e4141');
    });
    /*头部顶 结束*/
    




    /*尾部 开始*/
    $('#footers').on('mouseover','dl dd a',function () {
        $(this).css('color','#ff6801');

        $(this).css('text-decoration','underline');
    });
    $('#footers').on('mouseout','dl dd a',function () {
        $(this).css('color','#666');

        $(this).css('text-decoration','none');
    });
    /*尾部 结束*/   
});