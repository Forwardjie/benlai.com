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

        $(this).find('.price').css('margin-top','29px');
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
        var res = arr.map(function(item) {
            if(!item.sub_title){
                item.sub_title = '';
            }
            return `<dl>
                        <dd>
                            <div class="box">
                                <div class="pic">
                                    <img src="../${item.img}" alt="">
                                </div>
                                <div class="name">
                                    <a href="javascript:;">
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


});