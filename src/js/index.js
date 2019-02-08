
$(function() {
    /*头部顶 开始*/
    $('#benlai .head_top').on('mouseover','.login a',function () {
        $(this).css('text-decoration','underline');
    });
    $('#benlai .head_top').on('mouseout','.login a',function () {
        $(this).css('text-decoration','none');
    });
    $('#benlai .head_top').on('mouseover','.head_city a',function () {
        $(this).css('border','1px solid #78a000');
    });
    $('#benlai .head_top').on('mouseout','.head_city a',function () {
        $(this).css('border','1px solid #eeeee7');
    });
    $('#benlai .head_top').on('mouseover','.head_menu .menu_word a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .menu_word a',function () {
        $(this).css('color','#3e4141');
        $(this).css('text-decoration','none');
    });
    $('#benlai .head_top').on('mouseover','.head_menu .towcode dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt a').css('background','url(css/img/header/n_top_ipico02_d931d66e.gif) 11px 4px no-repeat');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .towcode dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('background','url(css/img/header/top_ipico01_708559df.gif) 11px 4px no-repeat');
    });
    $('#benlai .head_top').on('mouseover','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('background','url(css/img/header/n_top_ico_e5a1c5b5.png) 65px -12px no-repeat');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('background','url(css/img/header/n_top_ico_e5a1c5b5.png) 65px 13px no-repeat');
    });
    $('#benlai .head_top').on('mouseover','.head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','none');
        $(this).css('color','#3e4141');
    });
    /*头部顶 结束*/
    /*头部轮播图 开始*/
    var timer1 = null;
    var  head_top_bar = document.getElementsByClassName('head_top_bar')[0];
    var num = 0;
    var barimgs = head_top_bar.children;
    // console.log(head_top_bar);
    // console.log(barimgs);
    var next = () => {
        for(var i = 0;i < 3;i++){
            css(barimgs[i],'opacity','0');
            css(barimgs[i],'z-index','0');
        }
        css(barimgs[num],'z-index','100');        
        css(barimgs[num],'opacity','1');
        num = ++num >= 3 ? 0 : num;
    }
    timer1 = setInterval(next,2000);


    /*头部轮播图 结束*/
    /*搜索部分 开始*/

    $('#benlai .head_logo_box').on('mouseover','.search_word span a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
   
    $('#benlai .head_logo_box').on('mouseout','.search_word span a',function () {
        $(this).css('color','#8c8c8c');
        $(this).css('text-decoration','none');
    });

    /*搜索部分 结束*/
    /*导航菜单 开始 */
    /*一级菜单 开始 */
    $('#benlai .head_menu_bg').on('mouseover','.tit_sort dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt a').css('color','#739206');
        $(this).find('dt a').css('font-size','14px');
        $(this).find('dt').css('padding','0 0 0 50px');
        $(this).find('dt').css('border-top','1px solid #91be16');
        $(this).find('dt').css('border-bottom','1px solid #91be16');
        $(this).find('dt').css('border-left','2px solid #91be16');
        // $(this).find('dt').css('padding-left','2px');
        // $(this).find('dt').css('border-right','4px solid #fff');
        $(this).find('dt').css('width','157px');

        $(this).find('dt').css('background-image','url(css/img/header/n_menu_bg02_oc_b129e9e3.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon13_9285c147.png)');
    });
    $('#benlai .head_menu_bg').on('mouseout','.tit_sort dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('color','#4c4c4c');
        $(this).find('dt a').css('font-size','12px');

        $(this).find('dt').css('padding','1px 0 1px 50px');
        $(this).find('dt').css('border','none');
        $(this).find('dt').css('width','154px');

        $(this).find('dt').css('background-image','url(css/img/header/n_menu_bg01_oc_b4237de2.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon12_498beb5a.png)');
    });

    $('#benlai .head_menu_bg').on('mouseover','.tit_sort dl a',function () {
        $(this).css('text-decoration','underline');
    });
    $('#benlai .head_menu_bg').on('mouseout','.tit_sort dl a',function () {
        $(this).css('text-decoration','none');
    });

    $('#benlai .head_menu_bg').on('mouseover','.tit_sort dl dd a',function () {
        $(this).css('color','#ff6801');
    });
    $('#benlai .head_menu_bg').on('mouseout','.tit_sort dl dd .list_l a',function () {
        $(this).css('color','#6c8422');
    });
    $('#benlai .head_menu_bg').on('mouseout','.tit_sort dl dd .list_r a',function () {
        $(this).css('color','#333');
    });
    /*导航菜单 结束 */
    /*头部菜单 开始 */
    $('#benlai .head_menu_big').on('mouseover','ul li a',function () {
        $(this).css('background','#78a000');
    });
    $('#benlai .head_menu_big').on('mouseout','ul li a',function () {
        $(this).css('background','#8ab700');
    });
    /*头部菜单 结束 */
    /*大轮播图 开始 */

    var IndexBanner = document.getElementById('IndexBanner');
    var index_control = IndexBanner.getElementsByClassName('index_control')[0];
    var pis = IndexBanner.getElementsByClassName('pis')[0];
    var banner_nav = IndexBanner.getElementsByClassName('banner_nav')[0];
    var picture = IndexBanner.getElementsByClassName('picture')[0];
    RotationChart (IndexBanner,picture,banner_nav,pis);
    /*大轮播图 结束 */
    /*新品上线 开始 */

    $('#benlai .index_new').on('mouseover','.index15_tab dl',function () {
        $('dd').css('display','none');
        $('dt').attr('class','');
        $(this).find('dt').addClass('on');
        $(this).find('dd').css('display','block');
    });
   
    $('#benlai .index_new').on('mouseover','.index15_tab dl dd ul li',function () {
        $(this).find('.btn').css('top','223px');
        $(this).find('.box').css('border','4px solid #f7f9ec');
        $(this).find('.box .pic').css('margin-top','11px');
        $(this).find('.box .name').css('margin-top','4px');
        $(this).find('.box .price').css('margin-top','2px');
    });
    $('#benlai .index_new').on('mouseout','.index15_tab dl dd ul li',function () {
        $(this).find('.btn').css('top','260px');
        $(this).find('.box').css('border','4px solid #fff');
        $(this).find('.box .pic').css('margin-top','15px');
        $(this).find('.box .name').css('margin-top','15px');
        $(this).find('.box .price').css('margin-top','7px');
    });
    $('#benlai .index_new').on('mouseover','.index15_tab dl dd .name a',function () {
        $(this).css('color','#ff6801');
        $(this).find('span').css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#benlai .index_new').on('mouseout','.index15_tab dl dd .name a',function () {
        $(this).css('color','#3e4141');
        $(this).find('span').css('color','#898989');
        $(this).css('text-decoration','none');
    });
    
    /*新品上线 结束*/
    /*公告信息 开始*/
    $('#benlai .index15_ann').on('mouseover','ul li a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#benlai .index15_ann').on('mouseout','ul li a',function () {
        $(this).css('color','#615a54');
        $(this).css('text-decoration','none');
    });
    /*公告信息 结束*/
    /*产地直销 开始*/
    $('#benlai .index15_origin').on('mouseover','.index15_sku2 ul li',function () {
        $(this).find('.btn').css('top','242px');
        $(this).css('background','#fff');
        $(this).css('box-shadow','1px 1px 3px rgba(0,0,0,.2),-1px 1px 3px rgba(0,0,0,.2)');
        // $(this).find('.box').css('border','4px solid #f7f9ec');
        // $(this).find('.pic').css('margin-top','11px');
        // $(this).find('.name').css('margin-top','4px');
        // $(this).find('.price').css('margin-top','2px');
    });
    $('#benlai .index15_origin').on('mouseout','.index15_sku2 ul li',function () {
        $(this).find('.btn').css('top','280px');
        $(this).css('background','');
        $(this).css('box-shadow','');
        // $(this).find('.box').css('border','4px solid #fff');
        // $(this).find('.pic').css('margin-top','15px');
        // $(this).find('.name').css('margin-top','15px');
        // $(this).find('.price').css('margin-top','7px');
    });
    $('#benlai .index15_origin').on('mouseover','.index15_sku2 ul li .name a',function () {
        $(this).css('color','#ff6801');
        $(this).find('span').css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#benlai .index15_origin').on('mouseout','.index15_sku2 ul li .name a',function () {
        $(this).css('color','#2d322e');
        $(this).find('span').css('color','#2d322e');
        $(this).css('text-decoration','none');
    });
    /*产地直销 结束*/
});
   