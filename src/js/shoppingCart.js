$(function () {
	var myCart = document.getElementById('myCart');
    if($.cookie('id')){
		var url3 = '../api/13user_id_shoppingcart.php';
        var user_id = $.cookie('id');
        var data5 = 'user_id='+ user_id;
        ajax('get',url3,data5,function (str) {
			console.log(str);
			var arr = JSON.parse(str);
			console.log(arr);
			// for(i = 0;i < arr.length;i++){
			// 	var goods_id = arr[i].goods_id;
			// 	var url = '../api/06find_id.php';
			// 	var data = 'id='+goods_id;
			// 	ajax('get',url,data,function (str) {
			// 		var arr2 = JSON.parse(str);
			// 	});
			// }
			if(arr.length != 0){
				var res = arr.map(function(item) {
					return `<li data-id="${item.goods_id}">
								<div class="check good_check">
									<input type="checkbox" id="cbxSelectProduct">
								</div>
								<div class="pic">
									<a href="javascript:;">
										<img src="../${item.img}" alt="">
									</a>
								</div>
								<div class="name good_name">
									<a href="javascript:;">${item.main_title}</a>
								</div>
								<div class="price good_price">￥${item.new_price}</div>
								<div class="c_quantity">
									<p>
										<a href="javascript:;" class="cutnum">
											<img src="../img/shoppingCart/dey_03_0c4d2417.gif" alt="">
										</a>
									</p>
									<p class="mt0">
										<input type="text" class="textgt_n nownum" value="${item.goods_num}">
									</p>
									<p>
										<a href="javascript:;" class="addnum">
											<img src="../img/shoppingCart/dey_04_0e745786.gif" alt="" >
										</a>
									</p>
								</div>
								<div class="subtotal">￥34.90</div>
								<div class="operating">
									<a href="javascript:;">收藏</a>
									<a href="javascript:;" class="mt5 good_del">删除</a>
								</div>
							</li>`;
				}).join('');
				var html = `<div class="cart_alltit" style="margin-top: 10px;" data-type="CartGroup" data-freeshipdiffprice="0" data-shipprice="0">        
								<p>常温配</p>        
								<em>已包邮</em>    
							</div>
							<div class="cart_n">
								<div class="cart_tit">
									<input type="checkbox" id="cbxGroupSelectAll" data-type="GroupSelectAll">
									<span style="width: 75px;">全选</span>
									<span style="width: 390px;">商品</span>
									<span style="width: 120px;">单价</span>
									<span style="width: 100px;">购买数量</span>
									<span style="width: 120px;">小计</span>操作
								</div>
								<ul>
									${res}
								</ul>
							</div>
							<div class="hzcart">
								<div class="del_all">
									<div class="check allchecked">
										<input type="checkbox">
									</div>
									<a href="javascript:;" class="select">全选</a>
									<a href="javascript:;" class="delete">
										<img src="../img/shoppingCart/dele_859bd7ec.gif" alt="" style="width: 13px;height: 15px;">
									</a>
								</div>
								<div class="details">
									<span>
										运费<font>￥10.00</font>
									</span>
									<span>
										商品金额：<font   id="totalprice">￥0.00</font>
									</span>
									<span>
										促销抵扣金额：<font>￥0.00</font>
									</span>
									<span>
										优惠券抵扣金额：<font>￥0.00</font> 元
									</span>
								</div>
								<div class="all_price">
									已选择 <em  id="allnum">0</em> 件商品，金额（包含运费）= 
									<span id="Payment">¥0.00</span>
								</div>
								<div class="butn">
									<input type="button" class="fr butn19" data-type="Pay" title="去结算">
									<a class="continue" href="javascript:history.back(-1);'">继续购物</a>
								</div>
							</div>`;
				myCart.innerHTML = html;
			}
			
			/*购物车 开始*/ 
			/*
				需求：
					* 点击加减改变数量
					* 小计
					* 删除当行
					* 全选、不选
					* 全删
					* 总数量、总价格
			*/

			//1.点击增加数量
			$('#myCart').on('click','.addnum',function(){
				var val = $(this).parent().prev().children().eq(0).val();//获取当前点击节点的前一个节点表单中的值
				val++;//自加一
				if(val >= 5){//最多购买量
					val = 5;//等于5
				}
				$(this).parent().prev().children().eq(0).val(val);//把自增后的值重新赋给表单
				var url6 = '../api/08Cart.php';
				var user_id = $.cookie('id');
				var goods_id = $(this).parent().parent().parent().attr('data-id');
				var data6 = 'user_id='+ user_id + '&id=' + goods_id + '&a=add';
				ajax('post',url6,data6,function (str) {
					console.log(str);
				});
				// console.log($(this))
				goodTotal($(this));
				NumPrice();
				shoppingCartNums();
			});
			//2.点击减少数量
			$('#myCart').on('click','.cutnum',function(){
				var val = $(this).parent().next().children().eq(0).val();//获取当前点击节点的前一个节点表单中的值
				val--;//自减一
				if(val <= 1){//最少购买量
					val = 1;//等于1
				}
				$(this).parent().next().children().eq(0).val(val);//把自增后的值重新赋给表单
				if(val > 1){
					var url6 = '../api/08Cart.php';
					var user_id = $.cookie('id');
					var goods_id = $(this).parent().parent().parent().attr('data-id');
					var data6 = 'user_id='+ user_id + '&id=' + goods_id + '&m=red';
					ajax('post',url6,data6,function (str) {
						console.log(str);
					});
					shoppingCartNums();
				}
				goodTotal($(this));
				NumPrice();
			});
			//3.小计的运算：单价*数量
			function goodTotal(now) {
				var num = now.parent().parent().find('input').val() * 1;//获取数量
				var price = now.parent().parent().prev().text().substring(1);//获取单价
				// console.log(price)
				var total = (num * price).toFixed(2);//计算商品小计的价格
				// console.log(total)
				now.parent().parent().next().html('￥&nbsp;'+total);//将计算的值赋给小计
			}
			//4.删除单行
			$('#myCart').on('click','.good_del',function() {
				var res = confirm('您确定要删除所选商品吗？');
				if(res){
					$(this).parent().parent().remove();
					var url6 = '../api/08Cart.php';
					var user_id = $.cookie('id');
					var goods_id = $(this).parent().parent().attr('data-id');
					var data6 = 'user_id='+ user_id + '&id=' + goods_id + '&d=del';
					ajax('post',url6,data6,function (str) {
						console.log(str);
					});
					NumPrice();
					Update();//判断是否删完了	
					shoppingCartNums();
				}
			});
			// Update();
			function Update() {
				if($('.good_del').size() == 0){
					// $('#myCart').css('display','none');
					var myCart = document.getElementById('myCart');
					myCart.innerHTML = ` <div class="cart_none"><img src="../img/shoppingCart/cart_none.png"><p>您还没有购买过商品，<a href="../index.html">去逛逛吧</a></p></div>`;
				}
			}
			//5.选中单行
			$('#myCart').on('click','.good_check input',function() {
				NumPrice();
			});
			//存被选中行的下标
			var arr = [];
			function NumPrice() {
				arr = [];
				for(var i = 0;i < $('.good_check input').size();i++){
					if($('.good_check input').eq(i).prop('checked')){
						arr.push(i);
					}
				}
				// console.log(arr)
				if(arr.length == $('.good_check input').size()){
					$('.allchecked input').prop('checked','checked');
				}else{
					$('.allchecked input').removeAttr('checked');
				}
				var priceAll = 0;//总价
				var numAll = 0;//总数量

				console.log(arr);
				console.log($('.subtotal'));
				for(var i = 0;i < arr.length;i++){
					numAll += $('.nownum').eq(arr[i]).val() * 1;
					priceAll += $('.subtotal').eq(arr[i]).text().substring(1) * 1;
				}
				$('#allnum').html(numAll);
				$('#totalprice').html('￥' + priceAll.toFixed(2));
				$('#Payment').html( '￥'+(10 * 1 + priceAll).toFixed(2));
				console.log(priceAll);
			}
			//6.全选、全不选
			$('#myCart').on('click','.allchecked input',function(){
				if($(this).prop('checked')){
					$('.good_check input').prop('checked','checked');
				}else{
					$('.good_check input').removeAttr('checked');
				}
				NumPrice();
			});
			//店铺商品全选、全不选
			$('#myCart').on('click', '#cbxGroupSelectAll',function(){
				if($(this).prop('checked')){
					$('.good_check input').prop('checked','checked');
				}else{
					$('.good_check input').removeAttr('checked');
				}
				NumPrice();
			});
			//7、全删
			$('#myCart').on('click','.delete',function(){
				if(arr.length != 0){
					var res = confirm('您确定删除全部内容吗？');
					if(res){
						console.log(arr);
						for(var i = arr.length - 1; i >= 0;i--){
							$('#myCart li').eq(arr[i]).remove();
							NumPrice();
							Update();
							// window.location.reload();

						}
						var url6 = '../api/08Cart.php';
						var user_id = $.cookie('id');
						// var goods_id = $(this).parent().parent().attr('data-id');
						var data6 = 'user_id='+ user_id + '&allDel=all';
						ajax('post',url6,data6,function (str) {
							console.log(str);
							shoppingCartNums();
						});
						
					}
				}else {
					alert('请选择需要删除的');
				}
				
			});
			//8.手动输入
			$('#myCart').on('input','.nownum',function(){
				NumPrice();
				goodTotal($(this));
				// if($('.nownum').eq(arr[i]).val() == ''){
				// 	$('.nownum').eq(arr[i]).val(1);
				// }

			});



			/*购物车 结束*/
			
			


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
					// var HeadCartcount = document.getElementById('HeadCartcount');
					var right_cart = document.getElementById('right_cart');
					// HeadCartcount.innerHTML = nums;
					right_cart.innerHTML = nums;
					if(arr.length != 0){
						$('#right_cart').css('background','url(../css/img/index/footer/cart_pop04_7d8dece4.gif) 0 0 no-repeat');
					}
				});
			}
			shoppingCartNums();
			/*添加购物车 结束*/
		});
       
    }else {
		window.location.href = 'login.html';
		alert('温馨提示：请您先登录账号');
	}
    
    

});