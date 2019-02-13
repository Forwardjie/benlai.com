<?php
/*
    需求：接收前端的参数，根据前端的需求，截取对应的数据，返回给前端
			* 接收 $_POST[]
			* PHP操纵本地的文件，读取里面的内容。进行数据的截断
			* echo 数据给前端
			 
		原生js截取数组的一段：arr.slice(0,4)	截取下标0-3之间的数
		php的方法：array_slice($arr,0,5) 
			* 参数一：数组名称
			* 参数二：起始下标
			* 参数三：截取的条数
		
		page   qty   index
		1       5     0-4    第一页数据    0
		2       5     5-9  第二页数据     5
		3       5     10-14  第三页数据  10
		4       5     15-19  第四页数据  15
		
		公式：通过page和qty算出index(起始下标)
		1  5  0
		2  5  5
		3  5  10
		4  5  15
		推导： (page-1) * qty = index
*/
    include 'connect.php';
    //中文乱码
    header("content-type:text/html;charset=utf-8");
    //1.接收参数
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    // echo $page,$qty;
    //2.php操纵本地文件，读取内容
    //设置路径
    // $path = '../data/football.json';
    //打开文件
    // $file = fopen($path,'r');//只读
    //获取内容
    // $content = fread($file,filesize($path));
    //把字符串转化为对象，进行操作
    //写一个sql语句，查询zhuce1内所有的内容
    
    // $sql = "SELECT * FROM goodslist WHERE module = '$module' AND name = '$name'";
    $sql = "SELECT * FROM goodslist";
    // echo $sql;

    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $arr = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]

    // $arr = json_decode($content,true);

    //3.对数据进行截断
    //array_slice(数组名，index,pty)

    $row = array_slice($arr,($page - 1) * $qty,$qty);

    $datalist = array (
        'total' => count($arr),
        'list' => $row,
        'page' => $page,
        'qty' => $qty
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>