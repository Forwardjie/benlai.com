//---------------------------------------------------------------------------------------------------
$(function() {



    if($.cookie('id')){
        var url = '../api/11update.php';
        var id = $.cookie('id')
        var data = 'user_id='+ id;
        console.log(data);
        ajax('get',url,data,function (str) {
            console.log(str);
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
                                            <a href="javascript:;" id="SignOut" class="fr"  style="color: #78a000">[退出登录]</a>
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
                                                    <img src="../img/head/App_QR_Code_3de39ad3.png" alt="">
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
            // $.cookie('id',null, { expires: -7, path: '/' });
            // $('#SignOut').on('click',function () {
                // $.cookie('id',null, { expires: -7, path: '/' });
            // });
        });
    }



    /*头部顶 开始*/
    $('#benlai').on('mouseover','.head_top .login a',function () {
        $(this).css('text-decoration','underline');
    });
    $('#benlai').on('mouseout','.head_top .login a',function () {
        $(this).css('text-decoration','none');
    });
    $('#benlai').on('mouseover','.head_top .head_city a',function () {
        $(this).css('border','1px solid #78a000');
    });
    $('#benlai').on('mouseout','.head_top .head_city a',function () {
        $(this).css('border','1px solid #eeeee7');
    });



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



    
    $('#headerView').on('mouseover','.head_top .head_menu .menu_word a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#headerView').on('mouseout','.head_top .head_menu .menu_word a',function () {
        $(this).css('color','#3e4141');
        $(this).css('text-decoration','none');
    });


    $('#headerView').on('mouseover','.head_top .head_menu .towcode dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt a').css('background','url(../css/img/index/header/n_top_ipico02_d931d66e.gif) 11px 4px no-repeat');
    });
    $('#headerView').on('mouseout','.head_top .head_menu .towcode dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('background','url(../css/img/index/header/top_ipico01_708559df.gif) 11px 4px no-repeat');
    });

    $('#headerView').on('mouseover','.head_top .head_menu .head_service dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px -12px no-repeat');
    });
    $('#headerView').on('mouseout','.head_top .head_menu .head_service dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px 13px no-repeat');
    });
    $('#headerView').on('mouseover','.head_top .head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('#headerView').on('mouseout','.head_top .head_menu .head_service dl dd p a',function () {
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



    /*右浮动 开始*/
    $('#two_code').attr('data-type',1);
    $('#two_code').on('click','',function () {
        console.log($('#two_code').attr('data-type'))
        if($(this).attr('data-type') == 1){//1为字符串
            $('#twocodeParent').css('display','block');
            $(this).attr('data-type',0);
        }else {
            $('#twocodeParent').css('display','none');
            $(this).attr('data-type',1);
        }
    });
    /*回到顶部 开始*/
    $('#go_top').on('mouseover','',function () {
        $(this).css('backgroundPosition','-43px 8px');
    });
    $('#go_top').on('mouseout','',function () {
        $(this).css('backgroundPosition','-43px -43px');
    });
    var go_top = document.getElementById('go_top');
    
    function GoTop(ele) {
        window.onscroll = function() {
            var scrollTop = window.scrollY;
            // console.log(scrollTop);
            if(scrollTop >= 500){
                ele.style.display = 'block';
            }else{
                ele.style.display = 'none';
            }
        }
        
        //2.点击回到顶部，能快速的回到顶部
        ele.onclick = function() {
            window.scrollTo(0, 0);
        }
    }
    GoTop(go_top);

    $('#right_cart').on('mouseover','',function () {
        $(this).css('text-decoration','underline');
    });
    $('#right_cart').on('mouseout','',function () {
        $(this).css('text-decoration','none');
    });
    $('#two_code').on('mouseover','',function () {
        $(this).css('backgroundPosition','-96px 5px');
    });
    $('#two_code').on('mouseout','',function () {
        $(this).css('backgroundPosition','-96px -46px');
    });
    /*右浮动 结束*/

});
