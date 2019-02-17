$(function () {
    /* 左侧部分 开始*/
    $('.path').on('mouseover','a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('.path').on('mouseout','a',function () {
        $(this).css('text-decoration','none');
        $(this).css('color','#595959');
    });
    
    $('.list15_menu').on('mouseover','dl dt a',function () {
        if($(this).parent().parent().find('dd').css('display') =='none'){
            $(this).css('color','#506a02');
        }
        
    });
    $('.list15_menu').on('mouseout','dl dt a',function () {
        if($(this).parent().parent().find('dd').css('display') =='none'){
            $(this).css('color','#78a000');
        }
        
    });

    
    


    for(var i = 0; i < $('.list15_menu dl dt').length;i++){
        $('.list15_menu dl dt').attr('data-type',1);
    }

    $('.list15_menu').on('click','dl dt',function () {

        // $(this).next().toggle();
        // console.log($(this).attr('data-type'))
        if($(this).attr('data-type') == 1){//1为字符串
            $(this).parent().find('dd').css('display','block');
            $(this).css('background','url(../css/img/list/list_ico_cb3fabd3.png) 22px -63px no-repeat #8ab700');
            $(this).find('a').css('color','#fff');
            $(this).attr('data-type',0);
        }else {
            $(this).attr('data-type',1);
            $(this).find('a').css('color','#78a000');
            $(this).css('background','url(../css/img/list/list_ico_cb3fabd3.png) 22px -32px no-repeat #fff');
            $(this).parent().find('dd').css('display','none');
        }
    });
    /* 左侧部分 结束*/

    /* 右侧部分 开始*/
    $('.list_sequence').on('mouseover','ul li a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('.list_sequence').on('mouseout','ul li a',function () {
        $(this).css('text-decoration','none');
        $(this).css('color','#595959');
    });
    /* 右侧部分 结束*/


    /* 商品部分 开始*/
    $('.list_sku').on('mouseover','dl',function () {
        // $(this).css('display','block');
        $(this).find('.box').css('border','4px solid #eee');
        $(this).find('.pic').css('margin-top','10px');

        $(this).find('.name a span').css('color','#ff6801');

        $(this).find('.price').css('margin-top','20px');
        $(this).find('.quantity').css('display','block');
        $(this).find('.CartBtn').css('top','354px');
    });
    $('.list_sku').on('mouseout','dl',function () {
        // $(this).css('display','none');
        $(this).find('.box').css('border','4px solid #fff');
        $(this).find('.pic').css('margin-top','26px');
        $(this).find('.name').css('margin-top','20px');

        $(this).find('.price').css('margin-top','5px');
        $(this).find('.quantity').css('display','none');
        $(this).find('.CartBtn').css('top','390px');
    });

    $('.list_sku').on('mouseover','dl .name',function () {

        $(this).find('a').css('color','#ff6801');
        $(this).find('a span').css('color','#ff6801');

    });
    $('.list_sku').on('mouseout','dl .name',function () {

        $(this).find('a').css('color','#1b1b15');
        $(this).find('a span').css('color','#929292');

    });

    var url = '../api/10goodslist.php';
    // var data = 
    /* 商品部分 结束*/
    // var url = 'api/01football.php';
    //参数一：页面；参数二：每页加载多少条；
    var data = 'page=1&qty=28';
    var list_sequence = document.getElementsByClassName('list_sequence')[0];
    var list_sequence_dl = list_sequence.getElementsByTagName('dl')[0];
    var content = document.getElementById('content');
    var pageNum = document.getElementById('pageNum');
    function show (arr){
        console.log(arr)
        var res = arr.map(function(item) {
            if(!item.sub_title){
                item.sub_title = '';
            }
            if(!item.old_price){
                item.old_price = '';
            }
            return `<dl>
                        <dd>
                            <div class="box">
                                <div class="pic">
                                    <a href="details.html?id=${item.goods_id}">
                                        <img src="../${item.img}" alt="">
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="details.html?id=${item.goods_id}">
                                        <font>${item.main_title}</font>
                                        <span>${item.sub_title}</span>
                                    </a>
                                </div>
                                <div class="price">￥${item.new_price}</div>
                                <div class="quantity">
                                    <a href="javascript:void(0)" class="jian" data-type="ListMinus"></a>
                                    <input type="text" data-type="ListInput" value="1">
                                    <a href="javascript:void(0)" class="jia" data-type="ListPlus"></a>
                                </div>
                                <div class="CartBtn" data-id="${item.goods_id}">
                                    <a href="javascript:void(0)" status="0" product="30832" data-type="AddCartBtn">
                                        <img src="../img/list/list_btn01_24372028.gif">
                                        </a>
                                </div>
                            </div>
                        </dd>
                    </dl>`;
        }).join('');
        content.innerHTML = res;

    }
    ajax('post',url,data,function(str) {

        var arr = JSON.parse(str);
        show(arr.list);
        // console.log(arr.list);
        // console.log(99);
        var total = arr.total;
        // console.log(total);
        var nums = Math.ceil(total / arr.qty);
        list_sequence_dl.innerHTML = `<dt>
                                相关商品
                                <span data-type="ProductTotalNum">${total}</span>
                                个
                            </dt>
                            <dd>
                                <span href="javascript:;">&lt;</span>
                                <p>
                                    <s data-type="PageSelectNum">1</s><s data-type="TotalPageNum">/${nums}</s>
                                </p>
                                <span href="javascript:;">&gt;</span>
                            </dd>`;
        var html = `<dl>
                        <dt>
                            <p>到第：</p>
                            <input type="text" data-type="pagenumInput" value="1">
                            <p>页</p>
                            <a href="javascript:;" data-type="gotopage">确定</a>
                        </dt>
                        <dd>
                            <span href="javascript:;" class="link_none" data-type="pageprevious">&lt;  上一页</span>`;
        nums = 12;
        if (nums == 0) {
            html = ``;
        }else if(nums < 16){
            var str = ``;
            for(var i = 0;i < nums;i++){
                str += `<a href="javascript:;" data-type="pagenum">${i+1}</a>`;
            }
            str += `<span href="javascript:;" data-type="pagenext">下一页  &gt;</span>
                        </dd>
                    </dl>`
            html += str;
        }else{
            html += `<a href="javascript:;" data-type="pagenum">1</a>
                    <a href="javascript:;" data-type="pagenum">2</a>
                    <a href="javascript:;" data-type="pagenum">3</a>
                    <p>…</p>
                    <a href="javascript:;" data-type="pagenum">${nums}</a>
                    <span href="javascript:;" data-type="pagenext">下一页  &gt;</span>
                </dd>
            </dl>`;
        }
        // console.log(html);
        pageNum.innerHTML = html;
        $('#pageNum dl dd a:nth-child(2)').attr('class','active');
        // pageNum.children[0].className = 'active';
    });
    var number = 1;

    pageNum.onclick = function (ev) {
        var ev = ev || window.event;
        var nums = $('#pageNum dl dd a:last').length;//总页面数
        if(number != nums || number != 0){
            $('#pageNum dl dd span').attr('class','');
        }
        if(ev.target.tagName.toLowerCase() == 'a'){
            number = ev.target.innerHTML;
            console.log(number);
            var data = 'qty=28&page=' +number;
            ajax('post',url,data,function(str) {
                var arr = JSON.parse(str);
                show(arr.list);
            }) ;

            $('#pageNum dl dd a').attr('class','');
            ev.target.className = 'active';

        }
        if(ev.target.tagName.toLowerCase() == 'span'){
            var res = ev.target.innerHTML;
            console.log(res);
            if(res == '&lt;  上一页'){
                --number;
                if(number == 0){
                    $('#pageNum dl dd span').attr('class','link_none');
                }
                var data = 'qty=28&page=' +number;
                ajax('post',url,data,function(str) {
                    var arr = JSON.parse(str);
                    show(arr.list);
                }) ;
                $('#pageNum dl dd a').attr('class','');
                // ev.target.className = 'active';
                var nowNum = number + 1;
                var now = '#pageNum dl dd a:nth-child('+ nowNum +')';
                $(now).attr('class','active');
            }
            if(res == '下一页  &gt;'){
                ++number;
                if(number == nums){
                    $('#pageNum dl dd span').attr('class','link_none');
                }
                var data = 'qty=28&page=' +number;
                ajax('post',url,data,function(str) {
                    var arr = JSON.parse(str);
                    show(arr.list);
                }) ;
                $('#pageNum dl dd a').attr('class','');
                // ev.target.className = 'active';
                var nowNum = number + 1;
                var now = '#pageNum dl dd a:nth-child('+ nowNum +')';
                $(now).attr('class','active');
            }
        }
    }

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



    
     /*添加购物车 开始*/
    // var CartNum = 0;
    $('#content').on('click','.CartBtn',function () {
        if($.cookie('id')){
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
                    $('#right_cart').css('background','url(../css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
                }, 2000);
                
                
            })
        }else {
            window.location.href = 'login.html';
		    alert('温馨提示：请您先登录账号');
        }
        
    });
    /*购物车数量 开始*/
    function shoppingCartNums() {
        var url3 = '../api/13user_id_shoppingcart.php';
        var user_id = $.cookie('id');
        var data5 = 'user_id='+ user_id;
        ajax('get',url3,data5,function (str) {
            // console.log(str);
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
            if(nums != 0){
                $('#right_cart').css('background','url(../css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
            }
        });
    }
    shoppingCartNums();
    /*添加购物车 结束*/
});