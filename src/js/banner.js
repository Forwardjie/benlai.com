/*
封装轮播图插件  RotationChart (slideimg,ul,light,pis)

在函数外先获取父节点，传入函数内；ul\light\pis是同级

参数一：slideimg 是整个轮播图的父节点；

参数二：ul 存放图片的父节点；
参数三：light 存放焦点的父节点；
参数四：pis 上一张、下一张的父节点
            且上一张为第一个子节点
            下一张为第二个子节点；

*/



function  RotationChart (slideimg,ul,light,pis){
    console.log(ul);
	// var ul = getid('ul');
    var alis = ul.children;
    console.log(alis);
	var iW = alis[0].offsetWidth;
	// var light = getid('light');
	var aspans = light.children;
	var prevBtn = pis.children[0];
    var nextBtn = pis.children[1];
    console.log(prevBtn);
	// var slideimg = getid('slideimg');
	
	console.log(iW);
	
	//1.所有的图片放在右侧，第一张放在可视区
	// for(var i = 0; i < alis.length; i++) {
	// 	css(alis[i], 'left', iW + 'px');
	// }
	//第一张放在可视区
	// css(alis[0], 'left', 0);
	
	
	//2.开定时器，让图片自动轮播：旧图挪走，新图进入可视区
	var num = 0;//可视区的图片下标
	var timer = null;
	
	var next = () => {
		for(var i = 0; i < alis.length; i++) {
			css(alis[i], 'z-index', '-1');
			css(alis[i], 'opacity', '0');
		}
		//旧图挪走 alis[now]
		// startMove(alis[num], {'left' : -iW});
		//新图进入可视区
		num = ++ num >= alis.length ? 0 : num;//临界值的判断
		//快速把新图放在右侧：不需要过渡
		css(alis[num], 'z-index', '1');
		css(alis[num], 'opacity', '1');
		
		spanNow();//调用
	}
	
	//焦点跟随
	var spanNow = () => {
		for(var i = 0; i < aspans.length; i++) {
			aspans[i].className = '';
		}
		aspans[num].className = 'on';
	}
	
	
	timer = setInterval(next, 2000);//每隔两秒切换一个图片
	
	//3.点击上下按钮：可以切换下一张和上一张
	
    //鼠标进入可视区，停止定时器，移开又开始自动轮播

	slideimg.onmouseover = () => {
		light.style.top = '370px';
        // clearInterval(timer);
        pis.style.display = 'block';
	}
	
	slideimg.onmouseout = () => {
		light.style.top = '395px';
		// clearInterval(timer);
        // timer = setInterval(next, 2000);//每隔两秒切换一个图片
        pis.style.display = 'none';
	}
	light.onmouseover = () => {	
        clearInterval(timer); 
	}
	
	light.onmouseout = () => {
		clearInterval(timer);
        timer = setInterval(next, 2000);//每隔两秒切换一个图片
	}
	//防止傻瓜操作行为 : 两次点击的时间太短，500毫秒内，就视为无效
	var old = new Date();
	nextBtn.onclick = () => {
		//点击切换下一张
		if(new Date() - old > 500) {
			next();
		}
		old = new Date();//新旧时间差间隔
	}
	
	var prev = () => {
		//旧图挪走：挪到右侧
		// startMove(alis[num], {'left' : iW});
		for(var j = 0; j < alis.length; j++) {
			css(alis[j], 'z-index', '-1');
			css(alis[j], 'opacity', '0');
		}
		//新图：快速放在左侧，挪进可视区
		num = -- num < 0 ? alis.length - 1 : num;
		css(alis[num], 'z-index', '1');
		css(alis[num], 'opacity', '1');
		spanNow();
	}
	
	//点击切换上一张
	prevBtn.onclick = () => {
		clearInterval(timer);
		prev();
		timer = setInterval(next, 2000);
	}
	
	
	
	//4.点击焦点可以切到对应的图片
	for(var i = 0; i < aspans.length; i++) {
		aspans[i].index = i;
		aspans[i].onmouseover = function() {
			console.log(this.index);
			for(var j = 0; j < alis.length; j++) {
				css(alis[j], 'z-index', '-1');
				css(alis[j], 'opacity', '0');
			}
			css(alis[this.index], 'z-index', '1');
			css(alis[this.index], 'opacity', '1');
			num = this.index; //新图进入到可视区后，变旧图
			spanNow();
			
		}
	}

}