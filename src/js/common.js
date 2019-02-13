// 公共js部分，以下为封装函数
//---------------------------------------------------------------------------------------------



//获取元素的Id；
function getid(id){
    return document.getElementById(id);
}


//-----------------------------------------------------------------------------------------------
// 点击下拉菜单函数
function downMenu(btn,menu){
    //参数：btn为点击部分，menu为隐藏/显示部分
    var isok = true;//设置一个开关
    btn.onclick = function(){//点击事件
        if(isok){//先判断开关状态，即是否隐藏，初始状态为隐藏，即true为隐藏状态
            menu.style.display = "block";//为true则显示内容
        }else{
            menu.style.display = "none";//非true则隐藏内容
        }
        isok = !isok;//开关取反
    }
}
//----------------------------------------------------------------------------------------
// 选项卡函数
function tabControl(aLis,aCons){
    //参数：aLis为一级菜单，aCons为二级菜单
    for(var i = 0;i < aLis.length;i++){
        aLis[i].index = i;
        aLis[i].onclick = function(){
            for(var i = 0;i < aLis.length;i++){
                aLis[i].className = '';
                aCons[i].style.display = 'none'; 
            }
            this.className = 'active';
            aCons[this.index].style.display = "block";
        }
    }
}
//--------------------------------------------------------------------------------------------
//鼠标移动
function pullMenu(box,menu){
    box.onmouseover = function(){
        menu.style.display = 'block';
    }
    box.onmouseout = function(){
        menu.style.display = 'none';
    }
    console.log(1);
}
//-------------------------------------------------------------------------------------------
//生成任意两个数之间的随机数
function randomNum(min,max){
    //能随机生成min和max之间的随机整数数，包括min和max
    //参数：min和max不区分大小，是两个数
    return parseInt(Math.random()*(max-min+1)+min);
}
/*
    2.封装生成随机验证码：含有字母和数字，可以忽略大小写
        参数：验证码节点  
*/
function Verifi_Code(ele){//参数：验证码节点
    var arr ='0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
    var res ='';
    for(var i = 0;i < 4;i++){
        res += arr[randomNum(0,61)];
    }
    ele.value = res;
    ele.style.letterSpacing='3px';
    ele.style.fontSize='17px';
}
//-------------------------------------------------------------------------------------------
//过滤敏感的内容
function filterTex(str){
    var sensition = ['小学生','妈的','shit','s逼','tmd','傻逼','反清复明'];
    for(var i = 0;i < sensition.length;i++){
        var reg = new RegExp(sensition[i],'gi');
        str = str.replace(reg,'**');

    }
    return str;
}
//-------------------------------------------------------------------------------------------
//随机生成颜色
function randomColor(str){
    if(str == 16){
        var str = '0123456789abcdef';
        var color = '#';
        for(var i = 0;i < 6;i++){
            color += str[parseInt(Math.random()*str.length)];
            
        }
        return color;
    }else if(str == 'rgb'){
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        return 'rgb('+r+','+g+','+b+')';
    }else{
        alert('请输入正确的颜色格式');
    }
}
//-------------------------------------------------------------------------------------------
//字符串转化成对象
function strToObj(str){
    var obj = {};
    var str = str.split('&');
    for(var i = 0;i < str.length;i++){
        var str2 = str[i].split('=');
        obj[str2[0]] = str2[1];
    }
    return obj;
}

//-------------------------------------------------------------------------------------------
//给个位数加零
function setDb(num){
    if(num >= 10){
        return num;
    }else if(num < 10){
        return '0' + num;
    }
}

//-------------------------------------------------------------------------------------------
//实参：秒数
//返回xx天数:小时：分钟：秒的对象
function setTime (seconds) {
    var sec = setDb((seconds) % 60);
    var min = setDb(parseInt(seconds / 60) % 60);
    var hour = setDb(parseInt(seconds / 3600) % 60);
    var day = setDb(parseInt(seconds / 3600 / 24));
    return {
        secs : sec,
        mins : min,
        hours : hour,
        days : day
    }
}

/*
 	毫秒转：年月日时分秒
 */
function setTimes(timer) {
	var time = new Date(timer);
	var year = time.getFullYear();//年
	var mon = setDb(time.getMonth() + 1);//0 
	var day = setDb(time.getDate());//24
	var hour = setDb(time.getHours());//时
	var min = setDb(time.getMinutes());//分
	var sec = setDb(time.getSeconds());//秒

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day,
		mons: mon,
		years: year
	}

}

/*
	对象转成字符串：objToStr(obj)
	参数：obj   
	对象{
			key0: "0",
			key1: "1",
			key2: "2"
		}
	返回值：str
		key0=0&key1=1&key2=2
 */

function objToStr(obj) {
	var html = '';
	for(var key in obj) {
		html += key + '=' + obj[key] + '&';
	}

	html = html.slice(0, -1);
	return html;
}

/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function firstChild(parent) {
	if(parent.firstElementChild) {
		//高级浏览器
		return parent.firstElementChild;
	} else {
		return parent.firstChild;
	}
}
/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function lastChild(parent) {
	if(parent.lastElementChild) {
		//高级浏览器
		return parent.lastElementChild;
	} else {
		return parent.lastChild;
	}
}

/*
 	事件监听：bind(ele, type, fn)
 	参数一：对象名
 	参数二：事件类型
 	参数三：执行函数
 */

function bind(ele, type, fn) {
	if(ele.addEventListener) {
		//高级浏览器 IE9+
		ele.addEventListener(type, fn, false);
	} else {
		//IE8-
		ele.attachEvent('on' + type, fn);
	}
}

/*
 
 滚轮方向判断：rollerDir(ele,callback)
 	参数：
 		ele 对象名
 		callback 回调函数
 	返回值： 返回true（向上滚了） 或者false(向下滚了)

 */
function rollerDir(ele, callback) {
	var istrue = true;
	//IE 谷歌
	ele.onmousewheel = fn;

	//火狐
	if(ele.addEventListener) {
		ele.addEventListener('DOMMouseScroll', fn, false);
	}

	function fn(ev) {
		//判断滚轮方向
		var ev = ev || event;
		//true:向上滚了，false：向下滚了

		if(ev.wheelDelta) {
			//ie 谷歌  规定：大于0 上滚，小于0下滚
			istrue = ev.wheelDelta > 0 ? true : false;
		} else {
			//火狐
			istrue = ev.detail < 0 ? true : false;
		}

		callback(istrue);//实参
	}
	
}



/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
    u_name : function(str) {
        var reg = /^[a-zA-Z][\w\-]{5,17}$/;
        /*首位不能为数字，长度6-18，字母数字下划线组成*/
		return reg.test(str);
    },
    n_name : function(str) {
		var reg = /^[\u4e00-\u9fa5]+$/;
		return reg.test(str);
    },
    E_mail : function(str) {
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	id_card : function(str) {
		var reg = /^\d{15}|\d{17}[\dXx]$/;
		return reg.test(str);
	},
	tel : function(str) {
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	birth : function(str) {
		var reg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
		return reg.test(str);
    },
    psw : function(str) {
        /*长度在6~18之间，只能包含字母、数字和下划线*/
		var reg = /^\w{6,18}$/;
		return reg.test(str);
    },
}



/*
 	cookie的相关操作：var cookie = {}
	子功能：
		存 ：set
		取：get
		删：remove
		
 */

var cookie = {
	set : function(name, value, prop) {
		//name和value是必写参数。prop是json格式的数据
		var str = name + '=' + value;//必写的
		
		//prop
		//expires:设置失效时间
		if(prop.expires) {
			str += ';expires=' + prop.expires.toUTCString();//把时间转成字符串 toUTCString
		}
		//prop.path :设置路径
		if(prop.path) {
			str += ';path=' + prop.path;
		}
		//设置访问权限domain
		if(prop.domain) {
			str += ';domain=' + prop.domain;
		}
		
		//设置：存
		document.cookie = str;
		
	},
	get : function(key) {
		//获取
		var str = document.cookie;//name=jingjing; psw=123456
		var arr = str.split('; ');//[name=jingjing , psw=123456]
		for(var i=0; i<arr.length; i++){
			var arr2 = arr[i].split('=');//[name,jingjing] [psw,123456]
			if(key == arr2[0]) {
				return arr2[1];//通过键名取键值
			}
		}
	},
	remove : function(key) {
		//cookie:设置时间失效，设置时间为过去的某个时间
		var now = new Date();
		now.setDate(now.getDate() -1);//设置成昨天
		cookie.set(key,'', {expires : now});
	}
}



/*
 	设置和获取行内样式：css(节点,'width','40px') 设置样式  css(节点，'color') 获取样式
 	两个个参数：获取行内样式
 	三个参数：设置样式
*/

function css() { //设置样式：设置行内的样式
	if(arguments.length == 2) {
		//获取样式
		return arguments[0].style[arguments[1]];
	} else if(arguments.length == 3) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

/*
	深度拷贝：deepClone() 很重要
	参数：对象（数组或json对象）
	返回值：新的对象（拷贝）
 */
function deepClone(obj) {
	var str = JSON.stringify(obj);//把对象转成字符串
	return JSON.parse(str);//把字符串转成对象
}


/*
 	getstyle(obj,name)
 	参数： 
 	obj:对象名
 	name ：要获取的样式属性名
 	返回：样式值
*/

function getStyle(obj, name) {//用来获取样式
	if(getComputedStyle(obj, false)) {
		//主流  IE9+
		return getComputedStyle(obj, false)[name];
	}else{
		//IE8-
		return obj.currentStyle(name);
	}
}


/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function() {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for(var key in json) {
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if(key == 'opacity') { //初始值
				cur = getStyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getStyle(obj, key)); //width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			if(cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if(key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if(istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if(fnend) {
				fnend();
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器

}

/*
 	ajax(method,url,data,fn)
 	参数一：请求方式   get  和  post
 	参数二：路径
 	参数三：数据   name=malin&psw=12345
 	参数四：成功的回调    回调函数
*/

function ajax(method, url, data, fn) {
	//1.创建对象
	var xhr = new XMLHttpRequest();
	//告诉对象，要什么
	if(method == 'get' && data) {//如果是get的方式，data接在url后面
		//如果请求的地址是同一个地址，浏览器自动缓存
		url = url + '?day='+new Date()+'&'+ data ;
	}
	
	xhr.open(method,url,true);
	
	//2.发送请求
	if(method == 'get') {
		xhr.send(null);
	}else{
		//设置请求头
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	//3.3号线去后台制作
	
	//4.号线。接收数据，做渲染
	
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200){
				//个性需求
				if(fn) {
					fn(xhr.responseText);//实参
				}
			}else{
				alert('出错了，因为：' + xhr.status);//404找不到
		}
			
		}
	}
	
}

