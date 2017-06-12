<?php
error_reporting(0);
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin:*");
$tel = $_POST["tel"];
$psw = $_POST["password"];
$conn = new mysqli("localhost","root","");
$db_charset='utf-8';
$conn->query("SET character_set_client = 'binary', character_set_connection = '".$db_charset."', character_set_results = '".$db_charset."'");
$conn->select_db("miya") ;
$sql="select * from regist where tel = '$tel'";
$result=$conn->query($sql);
$row=$result->fetch_assoc();
if($result->num_rows !=0 && $psw==$row['password']){
	echo "1";
}else{
	echo "0";
}



?>