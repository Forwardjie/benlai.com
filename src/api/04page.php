<?php
/*
     - 列表页数据渲染，页码
*/
/*
	列表页数据渲染，页码
	方式：post
		api/page.php
			
            page : 第几页
            qty : 每页的数据条数
		返回
			{
				total : 数据的总条数
                list : 数据内容
                page：第几页
                qty：每页的数据条数
			}
*/
    //连接数据库
    include 'connect.php';

    //中文乱码
    header("content-type:text/html;charset=utf-8");


    //1.接收参数
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    // echo $page,$qty;
   

      //写一个sql语句，查询zhuce1内所有的内容
    //SELECT * FROM goodslist;

    $sql = "SELECT * FROM goodslist";
    // echo $sql;




    //执行sql语句，得到一个结果集
    $res = $conn->query($sql);

    //得到结果集里面的内容部分
    $row = $res->fetch_all(MYSQLI_ASSOC);//对象[{},{},{}]
    // echo $row;
    //3.对数据进行截断
    // array_slice(数组名，index,pty)

    $arr = array_slice($row,($page - 1) * $qty,$qty);

    $datalist = array (
        'total' => count($row),
        'list' => $arr,
        'page' => $page,
        'qty' => $qty
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);



?>