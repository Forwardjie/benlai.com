$(function () {
    
/*
	登录
	方式：post
		api/login.php
			
            user_name : 要登录的用户名
            user_password : 密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息具体返回信息
			}
*/

    var true1 = false;
    var true2 = false;
    var istrue = false;
    var val1;
    var val2;
    $('#phoneTxt').on('blur',function(){
        val1 = $('#phoneTxt').val().trim();
    });
    $('#passTxt').on('blur',function(){
        val2 = $('#passTxt').val().trim();

    });
    // $('#storage_Mes').on('click',function () {
    //     if(!istrue){
    //         istrue = true;
    //     }else {
    //         istrue = false;
    //     }
    // })
    $('#loginBtn').on('click',function(){
        if(val1){
            $('#nameMes').css('color','#58bc58');
            $('.name').find('s').attr('class','yes');
            true1 = true;
            $('#nameMes').html('');
        }else{
            $('#nameMes').css('color','red');
            $('.name').find('s').attr('class','no');
            true1 = false;
            $('#nameMes').html('账号格式不正确，请重新输入！');
        }
        if(val2){
            $('#passMes').css('color','#58bc58');
            $('.password').find('s').attr('class','yes');
            true2 = true;
            $('#passMes').html('!');
        }else{
            $('#passMes').css('color','red');
            $('.password').find('s').attr('class','no');
            true2 = false;
            $('#passMes').html('密码至少6位，最多16位!');
        }
        if(true1 && true2){
            $.ajax({
                type:"POST",
                url:"../api/03login.php",
                async:true,
                data: {
                    user_name : $('#phoneTxt').val(),
                    user_password : $('#passTxt').val()
                },
                success:function(str){
                    checkname(str);
                }
            });
        }

        function checkname(str){
            console.log(str);
            var arr = JSON.parse(str);
            // console.log(arr.code);
            var id = arr.content[0].user_id;
            console.log(id);
            console.log(!arr.code);
            console.log(istrue);
            if(!arr.code){
                // if(istrue){
                    // var name = $('#phoneTxt').val().trim();
                    // var pswVal = $('#passTxt').val().trim();
                    // var now = new Date();//日   now.getDate()
                    // now.setDate(now.getDate()+7);

                    //存：两个数据存进cookie里面
                    // cookie.set('usn', name, {expires : now});
                    // cookie.set('psw', pswVal, {expires : now});
                    // ajax('')
                    
                    console.log(id);
                    $.cookie('id',id, { expires: 7, path: '/' });
                    // $.cookie('id');
                    // $.cookie('id',null, { expires: -7, path: '/' });
                    // decodeURIComponent();
                // }
                // alert('登录成功！');
                window.location.href = '../01.html';

            }else{
                alert('登录失败！');
            }

        }
    });


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

    /*头部  登录注册地址 开始*/
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
    /*头部  登录注册地址 结束*/





    $('#benlai').on('mouseover','.head_top .head_menu .menu_word a',function () {
        $(this).css('color','#ff6801');
        $(this).css('text-decoration','underline');
    });
    $('#benlai').on('mouseout','.head_top .head_menu .menu_word a',function () {
        $(this).css('color','#3e4141');
        $(this).css('text-decoration','none');
    });
    $('#benlai').on('mouseover','.head_top .head_menu .towcode dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt a').css('background','url(../css/img/index/header/n_top_ipico02_d931d66e.gif) 11px 4px no-repeat');
    });
    $('#benlai').on('mouseout','.head_top .head_menu .towcode dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('background','url(../css/img/index/header/top_ipico01_708559df.gif) 11px 4px no-repeat');
    });

    $('#benlai').on('mouseover','.head_top .head_menu .head_service dl',function () {
        $(this).find('dd').css('display','block');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px -12px no-repeat');
    });
    $('#benlai').on('mouseout','.head_top .head_menu .head_service dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt').css('background','url(../css/img/index/header/n_top_ico_e5a1c5b5.png) 65px 13px no-repeat');
    });
    $('#benlai').on('mouseover','.head_top .head_menu .head_service dl dd p a',function () {
        $(this).css('text-decoration','underline');
        $(this).css('color','#ff6801');
    });
    $('#benlai').on('mouseout','.head_top .head_menu .head_service dl dd p a',function () {
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

        $(this).find('dt').css('background-image','url(css/img/index/header/n_menu_bg02_oc_b129e9e3.png)');
        // $(this).find('dt:after').css('background-image','url(css/img/header/n_icon13_9285c147.png)');
    });
    $('.head_menu_bg').on('mouseout','.tit_sort dl',function () {
        $(this).find('dd').css('display','none');
        $(this).find('dt a').css('color','#4c4c4c');
        $(this).find('dt a').css('font-size','12px');

        $(this).find('dt').css('padding','1px 0 1px 50px');
        $(this).find('dt').css('border','none');
        $(this).find('dt').css('width','154px');

        $(this).find('dt').css('background-image','url(css/img/index/header/n_menu_bg01_oc_b4237de2.png)');
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


});