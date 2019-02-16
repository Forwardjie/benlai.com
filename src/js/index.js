
$(function() {

    if($.cookie('id')){
        var url = 'api/11update.php';
        var id = $.cookie('id')
        var data = 'user_id='+ id;
        // console.log(data);
        ajax('get',url,data,function (str) {
            // console.log(str);
            var arr = JSON.parse(str);
            var head_top = document.getElementsByClassName('head_top')[0];
            var html = `<div class="box990">
                            <div class="login accountNumber" id="welcome_login">
                                <dl>
                                    <dt>
                                        <a href="javascript:;">
                                            <p>您好，</p>
                                            <em>${arr[0].user_name}</em>
                                        </a>
                                    </dt>
                                    <dd>
                                        <div class="user_login">
                                            <a href="javascript:;" class="fl">
                                                <p>${arr[0].user_name}</p>   
                                            </a>
                                            <a href="javascript:;" class="fr"  style="color: #78a000">[退出登录]</a>
                                        </div>
                                        <em><a href="javascript:;">
                                            级别<br>
                                            <span class="user_lh">注册会员</span>
                                        </a></em>
                                        <em><a href="javascript:;">
                                            积分<br>
                                            <span>0分</span>
                                            <br>
                                            <font>(0.0元)</font>
                                        </a></em>
                                        <em style="border-right: none"><a href="javascript:;">
                                            优惠券
                                            <br>
                                            <span class="user_lh">0张</span>
                                        </a></em>
                                    </dd>
                                </dl>
                            </div>
                            <div class="head_menu">
                                <ul>
                                    <li>
                                        <div class="menu_word">
                                            <a href="html/shoppingCart.html">我的订单</a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div class="towcode">
                                            <dl>
                                                <dt>
                                                    <a href="javascript:;">掌上本来</a>
                                                    <div class="head_bg"></div>
                                                </dt>
                                                <dd>
                                                    <img src="img/head/App_QR_Code_3de39ad3.png" alt="">
                                                    <p>扫描下载客户端</p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="head_service">
                                            <dl>
                                                <dt>
                                                    <a href="javascript:;">客户服务</a>
                                                    <div class="head_bg"></div>
                                                </dt>
                                                <dd>
                                                    <p><a href="javascript:;">在线客服</a></p>
                                                    <p><a href="javascript:;">联系客服</a></p>
                                                    <p><a href="javascript:;">销售热线</a></p>
                                                    <p><a href="javascript:;">帮助中心</a></p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>`;
            head_top.innerHTML = html;
        });
    }







    var OnlineHomePage = document.getElementById('OnlineHomePage');

    function show1(arr) {
        var res = arr.map(function(item,index) {//遍历所有的li
            if(!item.sub_title){
                item.sub_title = '';
            }
            if(!item.old_price){
                item.old_price = '';
            }
            return `<li>
                        <div class="box">
                            <p class="pic"><a href="html/details.html?id=${item.goods_id}">
                                <img src="${item.img}" alt="">
                            </a></p>
                            <p class="name"><a href="html/details.html?id=${item.goods_id}">
                                <font>${item.main_title}</font>
                                <span>${item.sub_title}</span>
                            </a></p>
                            <p class="price">
                            ${item.new_price}
                                <span>${item.old_price}</span>
                            </p>
                            <p class="btn"><a class="ico00"  data-id="${item.goods_id}" href="javascript:;">
                            </a></p>
                        </div>
                    </li>`;
        }).join('');
        return res;
    }
    var run = false;// 模拟线程锁机制，防止多次请求(是否正在请求)
    var moduleNum = 1;
    var html = [];
    show('module=时令鲜果');
    function show(data) {
       
        // var url = 'api/09chaxun.php';
        // var data = 'module=时令鲜果';
        
        ajax('post','api/09chaxun.php',data,function(str) {
            // console.log(111)
            moduleNum+=1;
            run = false;
            var arr = JSON.parse(str);
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            arr.map(function(item,index) {//遍历所有的留言
                if(item.name == '新品上线'){
                    arr1.push(item);
                }else if (item.name == '热销爆款') {
                    arr2.push(item);
                }else if (item.name == '进口水果') {
                    arr3.push(item);
                }else if (item.name == '国产水果') {
                    arr4.push(item);
                }

            });
            // list.innerHTML = html.join('') ;  
            // console.log(arr1)
            var html1 = `<div class="index_ad3">
                            <a href="javascript:;" target="_blank">
                                <img src="${arr1[0].cd_img}" alt="" style="display: inline; opacity: 1;">
                            </a>
                        </div>`;
            var html2 = show1(arr1);
            var html3 = show1(arr2);
            var html4 = show1(arr3);
            var html5 = show1(arr4);
            // console.log
            var currentHtml = `<div class="index_ad3">
                            <a href="javascript:;" target="_blank">
                                <img src="${arr1[0].cd_img}" alt="" style="display: inline; opacity: 1;">
                            </a>
                        </div>
                        <div class="index_recommend" data-point="${arr1[0].point}">
                            <div class="index_tab2">
                                <div class="tit">
                                    <a href="javascript:;">
                                        <em class="ico3"></em>
                                        ${arr1[0].module}
                                    </a>
                                </div>
                                <s></s>
                                <div class="index_label">
                                    <a href="javascript:;">
                                        <img src="img/OnlineHomePage/fruit/b23fb5ea-3d56-4a8b-9557-8acbe63e1882.webp" alt="" style="display: inline; opacity: 1;">
                                    </a>
                                    <ul>
                                        <li><a href="javascript:;" class="four" target="_blank">酸甜橙桔</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">香滑芒果</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">奇异果</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">菠萝凤梨</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">甜蜜瓜果</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">红颜草莓</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">健康苹果</a></li>
                                        <li><a href="javascript:;" class="four" target="_blank">云南枇杷</a></li>
                                    </ul>
                                </div>
                                <div benlai-effect="tab">
                                    <dl>
                                        <dt class="on">
                                            <a href="javascript:;">新品上线</a>
                                        </dt>
                                        <dd style="display: block;">
                                            <div class="index_sku  box530">
                                                <ul>
                                                ${html2}
                                                </ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt class="">
                                            <a href="javascript:;">热销爆款</a>
                                        </dt>
                                        <dd>
                                            <div class="index_sku  box530">
                                                <ul>
                                                ${html3}
                                                </ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt class="">
                                            <a href="javascript:;">进口水果</a>
                                        </dt>
                                        <dd>
                                            <div class="index_sku  box530">
                                                <ul>
                                                ${html4}
                                                </ul>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt class="">
                                            <a href="javascript:;">国产水果</a>
                                        </dt>
                                        <dd>
                                            <div class="index_sku  box530">
                                                <ul>
                                                ${html5}
                                                </ul>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>`;
                        // console.log(html)
            // html+=currentHtml;
            html.push(currentHtml);
            // console.log(html)            
            // OnlineHomePage.innerHTML = html;
            if(moduleNum ==2){
                // console.log(2)
                show('module=蔬菜菌菇');
            }else if(moduleNum ==3){
                // console.log(3)
                show('module=水产海鲜');
            }else if(moduleNum ==4){
                // console.log(4)
                show('module=肉禽蛋品');
            }else if(moduleNum ==5){
                // console.log(5)
                show('module=居家优选');
            }else if(moduleNum ==6){
                // console.log(6)
                show('module=熟食面点');
            }else if(moduleNum ==7){
                // console.log(7)
                show('module=休闲零食');
            }else if(moduleNum ==8){
                // console.log(8)
                show('module=厨房用品');
                // console.log(html)
                // console.log(html.join(','))
                OnlineHomePage.innerHTML = html;
                // console.log(html)
            }
            
        });
        
        // OnlineHomePage.innerHTML = html;
    }
    // show('module=时令鲜果');
    // show('module=蔬菜菌菇');
    // show('module=水产海鲜');
    // show('module=肉禽蛋品');
    // show('module=居家优选');
    // show('module=熟食面点');
    // show('module=休闲零食');
    // show('module=厨房用品');

    /*添加购物车 开始*/
    // var CartNum = 0;
    $('#OnlineHomePage').on('click','.ico00',function () {
        // $(this).attr('data-id');
        // console.log($(this).attr('data-id'));
        var url = 'api/06find_id.php';
        var data = 'id='+ $(this).attr('data-id');
        $('.pop_cart').css('display','block');
        $('#right_cart').css('background','url(css/img/index/footer/cart_pop01_bf3d2d55.gif) 0 0 no-repeat');
        ajax('get',url,data,function (str) {
            
            var arr = JSON.parse(str);
            // console.log(arr);
            var item_added = document.getElementById('item_added');
            // console.log(item_added)
            var html = `<li class="b0">
                            <div class="pic">
                                <img src="${arr[0].img}" alt="">
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
            var url2 = 'api/07ShoppingCart.php';
            console.log(data);
            var user_id = $.cookie('id');
            var data4 = data +'&user_id='+ user_id;
            console.log(data4);
            ajax('post',url2,data4,function (str) {
                console.log(str);
            })
            // shoppingCartNums();
            // $('#right_cart').css('background','url(css/img/index/footer/cart_pop01_bf3d2d55.gif) 0 0 no-repeat');
            /*渲染购物车数量 开始*/
            var url3 = 'api/13user_id_shoppingcart.php';
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
            
            });
            /*清除购物车卡片 开始*/
            setTimeout(() => {
                $('.pop_cart').css('display','none');
                $('#right_cart').css('background','url(css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
            }, 2000);
            
            
        })
    });
    /*购物车数量 开始*/
    function shoppingCartNums() {
        var url3 = 'api/13user_id_shoppingcart.php';
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
            if(nums != 0){
                $('#right_cart').css('background','url(css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
            }
        });
    }
    shoppingCartNums();
    /*添加购物车 结束*/

    /*头部顶 开始*/
    $('#headerView').on('mouseover','#welcome_login dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('paddingBottom','5px');
        $(this).find('dt').css('borderBottom','none');
        $(this).find('dt a').css('background','url(css/img/shoppingCart/n_top_ico_e5a1c5b5.png) 114px -12px no-repeat');
    });
    $('#headerView').on('mouseout','#welcome_login dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('paddingBottom','0');
        $(this).find('dt').css('borderBottom','1px solid #e8e8e8');
        $(this).find('dt a').css('background','url(css/img/shoppingCart/n_top_ico_e5a1c5b5.png) 114px 13px no-repeat');
    });
    $('#headerView').on('mouseover','#welcome_login dl dd .user_login .fr',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#headerView').on('mouseout','#welcome_login dl dd .user_login .fr',function () {
        $(this).css('color','#78a000');
        $(this).css('text-decoration','none');
    });


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
        $(this).find('dt a').css('background','url(css/img/index/header/n_top_ipico02_d931d66e.gif) 11px 4px no-repeat');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .towcode dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('background','url(css/img/index/header/top_ipico01_708559df.gif) 11px 4px no-repeat');
    });

    $('#benlai .head_top').on('mouseover','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('background','url(css/img/index/header/n_top_ico_e5a1c5b5.png) 65px -12px no-repeat');
    });
    $('#benlai .head_top').on('mouseout','.head_menu .head_service dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('background','url(css/img/index/header/n_top_ico_e5a1c5b5.png) 65px 13px no-repeat');
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

        $(this).find('dt').css('background-image','url(css/img/index/header/n_menu_bg02_oc_b129e9e3.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon13_9285c147.png)');
    });
    $('#benlai .head_menu_bg').on('mouseout','.tit_sort dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('color','#4c4c4c');
        $(this).find('dt a').css('font-size','12px');

        $(this).find('dt').css('padding','1px 0 1px 50px');
        $(this).find('dt').css('border','none');
        $(this).find('dt').css('width','154px');

        $(this).find('dt').css('background-image','url(css/img/index/header/n_menu_bg01_oc_b4237de2.png)');
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
        $(this).find('.pic').css('margin-top','15px');
        $(this).find('.name').css('margin-top','10px');
        $(this).find('.price').css('margin-top','3px');
    });
    $('#benlai .index15_origin').on('mouseout','.index15_sku2 ul li',function () {
        $(this).find('.btn').css('top','280px');
        $(this).css('background','');
        $(this).css('box-shadow','');
        // $(this).find('.box').css('border','4px solid #fff');
        $(this).find('.pic').css('margin-top','25px');
        $(this).find('.name').css('margin-top','15px');
        $(this).find('.price').css('margin-top','7px');
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
    /*优选 开始*/
    $('#OnlineHomePage').on('mouseover','.index_label ul li',function () {
        $(this).find('a').css('background-color','#a6ca44');
        $(this).find('a').css('color','#fff');
    });
    $('#OnlineHomePage').on('mouseout','.index_label ul li',function () {
        $(this).find('a').css('background-color','#fff');
        $(this).find('a').css('color','#78a000');
    });
    $('#OnlineHomePage').on('mouseover','.index_tab2 dl',function () {
        $(this).parent().find('dd').css('display','none');
        $(this).parent().find('dt').attr('class','');
        $(this).find('dt').addClass('on');
        $(this).find('dd').css('display','block');
    });
   
    $('#OnlineHomePage').on('mouseover','.index_tab2 dl dd ul li',function () {
        $(this).find('.btn').css('top','223px');
        $(this).find('.box').css('border','4px solid #f7f9ec');
        $(this).find('.box .pic').css('margin-top','11px');
        $(this).find('.box .name').css('margin-top','4px');
        $(this).find('.box .price').css('margin-top','2px');
    });
    $('#OnlineHomePage').on('mouseout','.index_tab2 dl dd ul li',function () {
        $(this).find('.btn').css('top','260px');
        $(this).find('.box').css('border','4px solid #fff');
        $(this).find('.box .pic').css('margin-top','15px');
        $(this).find('.box .name').css('margin-top','15px');
        $(this).find('.box .price').css('margin-top','7px');
    });
    $('#OnlineHomePage').on('mouseover','.index_tab2 dl dd .name a',function () {
        $(this).css('color','#ff6801');
        $(this).find('span').css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#OnlineHomePage').on('mouseout','.index_tab2 dl dd .name a',function () {
        $(this).css('color','#3e4141');
        $(this).find('span').css('color','#898989');
        $(this).css('text-decoration','none');
    });
    /*优选 结束*/







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



    /*客服 开始*/
    $('#goTop').on('mouseover','.zhiCustomBtn',function () {
        $(this).css('background','url(css/img/index/footer/gotop_service_d114e897.gif) -60px 0 no-repeat');
    });
    $('#goTop').on('mouseout','.zhiCustomBtn',function () {
        $(this).css('background','url(css/img/index/footer/gotop_service_d114e897.gif) 0 0 no-repeat');
    });
});
   