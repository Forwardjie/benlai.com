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
    $('#storage_Mes').on('click',function () {
        if(!istrue){
            istrue = true;
        }else {
            istrue = false;
        }
    })
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
            console.log(arr.code);
            if(!arr.code){
                if(istrue){
                    var name = $('#phoneTxt').val().trim();
                    var pswVal = $('#passTxt').val().trim();
                    var now = new Date();//日   now.getDate()
                    now.setDate(now.getDate()+7);
                    //存：两个数据存进cookie里面
                    cookie.set('usn', name, {expires : now});
                    cookie.set('psw', pswVal, {expires : now});
                }
                alert('登录成功！');
                window.location.href = '../01.html';
            }else{
                alert('登录失败！');
            }

        }
    });



});