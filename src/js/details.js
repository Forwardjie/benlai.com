//---------------------------------------------------------------------------------------------------
$(function() {
    /*头部顶 开始*/
    $('.head_top').on('mouseover','.login a',function () {
        $(this).css('text-decoration','underline');
    });
    $('.head_top').on('mouseout','.login a',function () {
        $(this).css('text-decoration','none');
    });
    $('.head_top').on('mouseover','.head_city a',function () {
        $(this).css('border','1px solid #78a000');
    });
    $('.head_top').on('mouseout','.head_city a',function () {
        $(this).css('border','1px solid #eeeee7');
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

    $('.head_logo_box').on('mouseover','.search_word span a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
   
    $('.head_logo_box').on('mouseout','.search_word span a',function () {
        $(this).css('color','#8c8c8c');
        $(this).css('text-decoration','none');
    });

    /*搜索部分 结束*/
    /*导航菜单 开始 */
    /*一级菜单 开始 */
    $('.head_menu_bg').on('mouseover','.head_menu_all_OnlineCategory',function () {
        $(this).find('.tit_sort').css('display','block');
       
    });
    $('.head_menu_bg').on('mouseout','.head_menu_all_OnlineCategory',function () {
        $(this).find('.tit_sort').css('display','none');
        
    });
    $('.head_menu_bg').on('mouseover','.tit_sort dl',function () {
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
        $(this).find('dt').css('background-image','url(../css/img/index/header/n_menu_bg02_oc_b129e9e3.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon13_9285c147.png)');
    });
    $('.head_menu_bg').on('mouseout','.tit_sort dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('color','#4c4c4c');
        $(this).find('dt a').css('font-size','12px');

        $(this).find('dt').css('padding','1px 0 1px 50px');
        $(this).find('dt').css('border','none');
        $(this).find('dt').css('width','154px');

        $(this).find('dt').css('background-image','url(../css/img/index/header/n_menu_bg01_oc_b4237de2.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon12_498beb5a.png)');
    });

    $('.head_menu_bg').on('mouseover','.tit_sort dl a',function () {
        $(this).css('text-decoration','underline');
    });
    $('.head_menu_bg').on('mouseout','.tit_sort dl a',function () {
        $(this).css('text-decoration','none');
    });

    $('.head_menu_bg').on('mouseover','.tit_sort dl dd a',function () {
        $(this).css('color','#ff6801');
    });
    $('.head_menu_bg').on('mouseout','.tit_sort dl dd .list_l a',function () {
        $(this).css('color','#6c8422');
    });
    $('.head_menu_bg').on('mouseout','.tit_sort dl dd .list_r a',function () {
        $(this).css('color','#333');
    });
    /*导航菜单 结束 */
    /*头部菜单 开始 */
    $('.head_menu_big').on('mouseover','ul li a',function () {
        $(this).css('background','#78a000');
    });
    $('.head_menu_big').on('mouseout','ul li a',function () {
        $(this).css('background','#8ab700');
    });
    /*头部菜单 结束 */
    /*主体内容部分 结束 */
    $('#_ProductDetails').on('mouseover','.good15_share dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('border-top','1px solid #e5e5e5');
        $(this).find('dt').css('border-left','1px solid #e5e5e5');
        $(this).find('dt').css('border-right','1px solid #e5e5e5');
        $(this).find('dt').css('background','url(../css/img/goods/n_top_ico_e5a1c5b5.png) 69px -13px no-repeat');
    });
    $('#_ProductDetails').on('mouseout','.good15_share dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('border-top','1px solid #fff');
        $(this).find('dt').css('border-left','1px solid #fff');
        $(this).find('dt').css('border-right','1px solid #fff');
        $(this).find('dt').css('background','url(../css/img/goods/n_top_ico_e5a1c5b5.png) 69px 12px no-repeat');
    });
    $('#_ProductDetails').on('mouseover','.good15_collect a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#_ProductDetails').on('mouseout','.good15_collect a',function () {
        $(this).css('color','#535353');
        $(this).css('text-decoration','underline');
    });
    $('#_ProductDetails').on('mouseover','.intro_app dl',function () {
        $(this).find('dd').css('display','block');
    });
    $('#_ProductDetails').on('mouseout','.intro_app dl',function () {
        $(this).find('dd').css('display','none');
    });
    $('#_ProductDetails').on('mouseover','.good15_today dl',function () {
        $(this).find('dd').css('display','block');
    });
    $('#_ProductDetails').on('mouseout','.good15_today dl',function () {
        $(this).find('dd').css('display','none');
    });

    // var magnifierConfig = {
	// 	magnifier : "#magnifier1",//最外层的大容器
	// 	width : 500,//承载容器宽
	// 	height : 500,//承载容器高
	// 	moveWidth : 175,//如果设置了移动盒子的宽度，则不计算缩放比例
	// 	// zoom : 5//缩放比例
	// };

	// var _magnifier = magnifier(magnifierConfig);


    /*主体内容部分 开始 */

    var _ProductDetails_0 = document.getElementById('_ProductDetails_0');
    var url = '../api/06find_id.php';
    var url2 = decodeURI(window.location.search);
    var data1 = url2.split('=')[1];
    console.log(data1);
    var data = 'id=' + data1;
    ajax('get',url,data,function (str) {
        console.log(str);
        var arr = JSON.parse(str);
        console.log(arr[0]);
        var json = arr[0];
        var html = `<div class="good15_box ">
                        <div id="MagnifierWrap2">
                            <div class="MagnifierMain">
                                <img class="MagTargetImg" src="../${json.img}" data-src="../${json.img}"> 
                            </div>
                            <span class="spe_leftBtn"></span>
                            <span class="spe_rightBtn"></span>
                            <div class="spec-items"> 
                                <ul>
                                    <li class="on"><img src="../${json.img}" data-lsrc="../${json.img}" data-maxSrc="../${json.img}"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="good15_number">
                                商品编号：
                            <span id="Product_ProductID">P0000056212</span>
                        </div>
                        <div class="good15_collect">
                            <a href="javascript:;" class="on">收藏</a>
                        </div>
                        <div class="good15_share">
                            <dl>
                                <dt><s></s>分享到</dt>
                                <dd>
                                    <a href="javascript:;" hidefocus="true" id="site-sina" title="推荐到新浪微博">
                                        <img src="../img/goods/detail_ico13_bd12b9eb.gif" width="16" height="16" alt="">
                                    </a>
                                    <a href="javascript:;" hidefocus="true" onclick="showQQ()" id="site-qq" title="通过QQ发送链接给好友">
                                        <img src="../img/goods/detail_ico15_2642cae0.gif" width="16" height="16" alt="">
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="good15_intro">
                        <div class="intro_name">
                            <h1 id="Product_ProductDetailsName" title="${json.main_title}">${json.main_title}</h1>
                            <p>${json.sub_title}</p>
                        </div>
                        <div class="intro_sales">
                            <div class="intro_price">
                                <div class="drop fl"></div>
                                <div class="price fl">
                                ￥${json.new_price}
                                </div>
                                <div class="notice fl">
                                    <a href="javascript:;" class="on">降价通知</a>
                                </div>
                            </div>
                            <div class="intro_app">
                                <dl>
                                    <dt>
                                        <a href="javascript:;">&nbsp;手机购买</a>
                                    </dt>
                                    <dd>
                                        <p>移动下单，惊喜连连</p>
                                        <img src="../img/goods/App_QR_Code_3de39ad3.png" alt="">
                                        <em>扫描下载客户端</em>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="good15_norm"></div>

                        <div class="good15_buy">
                            <div class="bgright fl">
                                <dl>
                                    <dt>
                                        <input type="text" class="textgt_n" id="textgtSum" maxlength="4" value="1" startsalenum="1">
                                        <a class="up" id="up" href="javascript:void(0);" hidefocus="true"></a>
                                        <a class="down" id="dow" href="javascript:void(0);" hidefocus="true"></a>
                                    </dt>
                                    <dd>
                                        <div id="AddCartDiv" class="buy_btn"><a class="btn01" id="AddCart" href="javascript:void(0);" data-id="${json.goods_id}"> </a></div>
                                        <div class="buy_evaluate">
                                            好评率<font id="span_scoreCount">99%</font>
                                            (<a href="#tabdiv6"><span>1362</span>人评价</a>)
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <ul>
                                <li id="limitDiv" style="display: none;"></li>
                            </ul>
                            <ol>
                                <li><s></s>该商品不支持使用优惠券</li>
                            </ol>
                        </div>
                        <div class="good15_today">
                            <dl>
                                <dt>
                                    <img src="../img/goods/detail_ico02_n_047cc516.gif" width="25" height="23" alt="">今夜达
                                </dt>
                                <dd><span class="ArrivalMsg"><s></s>今夜达：上海市区外环内用户（部分区域除外，以结算页为准）在0:00-11:00下单，可选当日18:00-22:00送达。</span></dd>
                            </dl>
                            <dl>
                                <dt>
                                    <img src="../img/goods/detail_ico08_d67de15f.gif" width="25" height="23" alt="">常温配
                                </dt>
                            </dl>
                            <dl></dl>
                            <div class="clear">
                            </div>
                        </div>
                    </div>`;
                    _ProductDetails_0.innerHTML = html;
    })



    /*主体内容部分 结束 */
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


     /*添加购物车 开始*/
    // var CartNum = 0;
    console.log(999);
    $('#_ProductDetails_0').on('click','#AddCart',function () {
        // $(this).attr('data-id');
        console.log($(this).attr('data-id'));
        var url = '../api/06find_id.php';
        var data = 'id='+ $(this).attr('data-id');

        $('.pop_cart').css('display','block');
        $('#right_cart').css('background','url(../css/img/index/footer/cart_pop01_bf3d2d55.gif) 0 0 no-repeat');
        ajax('get',url,data,function (str) {
            
            var arr = JSON.parse(str);
            console.log(arr);
            var item_added = document.getElementById('item_added');
            // console.log(item_added)
            var html = `<li class="b0">
                            <div class="pic">
                                <img src="../${arr[0].img}" alt="">
                            </div>
                            <div class="name">
                            ${arr[0].main_title}
                                <br>
                                <span>X 1 加入成功</span>
                            </div>
                            <div class="price">￥${arr[0].new_price}</div>
                        </li>`;
            item_added.innerHTML = html;
            // console.log(item_added);
            // ++ CartNum;
            // $('#right_cart').text(CartNum);
            var url2 = '../api/07ShoppingCart.php';
            // console.log(data);
            var user_id = $.cookie('id');
            var data4 = data +'&user_id='+ user_id;
            console.log(data4);
            ajax('post',url2,data4,function (str) {
                console.log(str);
            })
            // shoppingCartNums();
            // $('#right_cart').css('background','url(css/img/index/footer/cart_pop01_bf3d2d55.gif) 0 0 no-repeat');
            /*渲染购物车数量 开始*/
            var url3 = '../api/13user_id_shoppingcart.php';
            var user_id = $.cookie('id');
            var data5 = 'user_id='+ user_id;
            ajax('get',url3,data5,function (str) {
                console.log(str);
                var arr = JSON.parse(str);
                var nums = 0;
                for(i = 0;i < arr.length;i++){
                    nums += arr[i].goods_num * 1
                }
                console.log(nums);
                // var nums = arr.length;
                var HeadCartcount = document.getElementById('HeadCartcount');
                var right_cart = document.getElementById('right_cart');
                HeadCartcount.innerHTML = nums;
                right_cart.innerHTML = nums;
            
            });
            /*清除购物车卡片 开始*/
            setTimeout(() => {
                $('.pop_cart').css('display','none');
                $('#right_cart').css('background','url(../css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
            }, 2000);
            
            
        })
    });
    /*购物车数量 开始*/
    function shoppingCartNums() {
        var url3 = '../api/13user_id_shoppingcart.php';
        var user_id = $.cookie('id');
        var data5 = 'user_id='+ user_id;
        ajax('get',url3,data5,function (str) {
            // console.log(str);
            var arr = JSON.parse(str);
            var nums = 0;
            for(i = 0;i < arr.length;i++){
                nums += arr[i].goods_num * 1
            }
            console.log(nums);
            // var nums = arr.length;
            var HeadCartcount = document.getElementById('HeadCartcount');
            var right_cart = document.getElementById('right_cart');
            HeadCartcount.innerHTML = nums;
            right_cart.innerHTML = nums;
            if(arr.length != 0){
                $('#right_cart').css('background','url(../css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
            }
        });
    }
    shoppingCartNums();
    /*添加购物车 结束*/
});
