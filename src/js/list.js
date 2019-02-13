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
        $(this).css('color','#506a02');
    });
    $('.list15_menu').on('mouseout','dl dt a',function () {
        $(this).css('color','#78a000');
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
        $(this).find('.name').css('margin-top','5px');
        $(this).find('.name a').css('color','#ff6801');
        $(this).find('.name a span').css('color','#ff6801');

        $(this).find('.price').css('margin-top','29px');
        $(this).find('.quantity').css('display','block');
        $(this).find('.CartBtn').css('top','354px');
    });
    $('.list_sku').on('mouseout','dl',function () {
        // $(this).css('display','none');
        $(this).find('.box').css('border','4px solid #fff');
        $(this).find('.pic').css('margin-top','26px');
        $(this).find('.name').css('margin-top','20px');
        $(this).find('.name a').css('color','#1b1b15');
        $(this).find('.name a span').css('color','#929292');
        $(this).find('.price').css('margin-top','5px');
        $(this).find('.quantity').css('display','none');
        $(this).find('.CartBtn').css('top','390px');
    });


    var url = '../api/10goodslist.php';
    // var data = 
    /* 商品部分 结束*/
    // var url = 'api/01football.php';
    //参数一：页面；参数二：每页加载多少条；
    var data = 'page=1&qty=28';
    var content = document.getElementById('content');
    function show (arr){
        var res = arr.map(function(item) {
            return `<dl>
                        <dd>
                            <div class="box">
                                <div class="pic">
                                    <img src="../img/list/01/c264f58f-ad9f-4639-95f9-932d2a0dffa4.jpg" alt="">
                                </div>
                                <div class="name">
                                    <a href="javascript:;">
                                        <font>冠珠绿豆粉丝500g</font>
                                        <span>美味 安全 便捷</span>
                                    </a>
                                </div>
                                <div class="price">￥18.80</div>
                                <div class="quantity">
                                    <a href="javascript:void(0)" class="jian" data-type="ListMinus"></a>
                                    <input type="text" data-type="ListInput" value="1">
                                    <a href="javascript:void(0)" class="jia" data-type="ListPlus"></a>
                                </div>
                                <div class="CartBtn">
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
        console.log(arr.list)
       

        // var total = arr.total;
        // console.log(total);
        // var num = Math.ceil(total / arr.qty);

        // var html = '';
        // for(var i = 0;i < num;i++){
        //     html += `<span>${i+1}</span>`;
        // }
        // pageNum.innerHTML = html;
        // pageNum.children[0].className = 'active';
    });
});