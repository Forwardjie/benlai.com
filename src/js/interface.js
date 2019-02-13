$(function(){

    var true1 = false;
    var true2 = false;
    var true3 = false;
    var true4 = false;
    var true5 = false;
    var true6 = false;
    /*
验证用户名
方式：get
    api/01verifyUserName.php
        
        user_name : 要验证的用户名
    返回
        {
            code : 返回的信息代码 0 = 没有错误，1 = 有错误
            message : 返回的信息具体返回信息
        }
*/
    // var btnReg = getid("registerBtn");
    // var username1 = getid("username1");
    // var password1 = getid("passTxt");
    // var verifyUserNameMsg = getid("username1Mes");


    $('#username1').on('blur',function(){
        $.ajax({
            type:"get",
            url:"../api/01verifyUserName.php",
            async:true,
            data: {
                user_name : $('#username1').val()
            },
            success:function(str){
                checkname(str);
            }
        });

        function checkname(str){
            console.log(str);
            var arr = JSON.parse(str);
            console.log(arr.code);
            if(!arr.code){
                $('#username1Mes').css('color','#58bc58');
                $('.name').find('s').attr('class','yes');
                true1 = true;
            }else{
                $('#username1Mes').css('color','red');
                $('.name').find('s').attr('class','no');
                true1 = false;
            }
            $('#username1Mes').html(arr.message);
        }
    });

    /* 拖拽验证 开始*/ 
    var box = document.getElementById("v_slide");
    var bg = document.querySelector(".bg");
    var text = document.querySelector(".text");
    var btn = document.querySelector(".btn");
    var success = false;
    var distance = box.offsetWidth - btn.offsetWidth;
    btn.onmousedown = function (ev){
        btn.style.transition = '';
        bg.style.transition = '';
        var ev = ev || window.event;
        var downX = ev.clientX;
        document.onmousemove = function (ev) {
            // ev.preventDefault();
            var ev = ev || window.event;
            var moveX = ev.clientX;
            var offsetX = moveX - downX;
            if(offsetX >= distance){
            offsetX = distance;
            }else if(offsetX < 0){
                offsetX = 0;
            }
            btn.style.left = offsetX + 'px';
            bg.style.width = offsetX + 'px';
            if(offsetX >= distance){
                text.innerHTML = '验证通过';
                text.style.color = '#fff';
                btn.style.color = '#8ab800';
                btn.style.background = 'url(../css/img/interface/login_ico_ec3070b7.png) 13px -94px no-repeat #fff';
                bg.style.backgroundColor = '#8ab800';
                success = true;
                btn.onmousedown = null;
                document.onmousemove = null; 
                true2 = true;  
            }
        }
        document.onmouseup = function () {
            if(success){
                return;
            }else{
                btn.style.left = 0;
                bg.style.width = 0;
                btn.style.transition = 'left 1s ease';
                bg.style.transition = 'width 1s ease';
            }
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    /* 拖拽验证 结束*/

    /* 验证码 开始*/
    var smsCodeBtn = document.getElementById('smsCodeBtn');
    smsCodeBtn.onclick = function () {
        Verifi_Code(smsCodeBtn);
    }
    $('#smsCodeTxt').on('blur',function() {
        if($('#smsCodeTxt').val() == smsCodeBtn.innerHTML){
            $('#smsCodeMes').text('验证码正确');
            $('#smsCodeMes').css('color','#58bc58');
            true3 = true;
        }else {
            $('#smsCodeMes').text('验证码错误');
            $('#smsCodeMes').css('color','red');
            true3 = false;
        }
    });
    
    

    /* 验证码 结束*/

    /* 密码 开始*/
    $('#passTxt').on('blur',function () {
        var reg = /\w{6,18}/g;
        var istrue = reg.test($('#passTxt').val());
        if(istrue){
            $('#passMes').text('密码可以使用');
            $('#passMes').css('color','#58bc58');
            true4 = true;
            $('.password').find('s').attr('class','yes');
        }else {
            $('#passMes').text('请输入6至18位字母、数字、下划线！');
            $('#passMes').css('color','red');
            $('.password').find('s').attr('class','no');
        }
    });
    $('#passSureTxt').on('blur',function () {
        if($('#passTxt').val() == $('#passSureTxt').val()){
            $('#passSureMes').text('密码确认正确');
            $('#passSureMes').css('color','#58bc58');
            true5 = true;
            $('.passSure').find('s').attr('class','yes');
        }else {
            $('#passSureMes').text('密码不一致！');
            $('#passSureMes').css('color','red');
            $('.passSure').find('s').attr('class','no');
        }
    });
    /* 密码 结束*/

    /* 服务条款 开始*/

    /* 服务条款 结束*/
/*
注册
方式：post
    api/interface.php
        
        user_name : 要注册的用户名
        user_password : 密码
    返回
        {
            code : 返回的信息代码 0 = 恭喜你注册成功！，1 = 有注册失败！
            message : 返回的信息具体返回信息
        }
*/
    var isok = false;
    $('#checkboxUserRegisterContentPage').on('click',function () {
        if(!isok){
            $('#registerBtn').attr('class','');
            isok = true;
            // console.log(isok)
            true6 = true;
        }else {
            $('#registerBtn').attr('class','no');
            isok = false;
            true5 = false;
            // console.log(isok)
        }
    })

    $('#registerBtn').on('click',function(){
        if(true1 && true2 && true3 && true4 && true5 && true6){
            $.ajax({
                type: "post",
                url: "../api/02interface.php",
                async: true,
                data: {
                    user_name:$('#username1').val(),
                    user_password: $('#passTxt').val()
                },
                success: function(str) {
                    interfaceUser(str);
                }
            });
            function interfaceUser(str){
                var arr = JSON.parse(str);
                console.log(arr);
                if(!arr.code){
                    alert(arr.message);
                    // true1 = false;
                    window.location.href = 'login.html';
                }else{
                    alert(arr.message);
                }
            }
        }
    });
});