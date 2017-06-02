<?php
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin:*");
		$tel = $_POST["tel"];
		$psw = $_POST["password"];
		$psw_confirm = $_POST["confirm"];
		if($tel == "" || $psw == "" || $psw_confirm == ""){
			echo "4";
		}else{
			if($psw == $psw_confirm){
				mysql_connect("localhost","root","");
				mysql_select_db("meilishuo");
				$sql = "select * from regist where tel = '$tel' ";
				//$sql = "select tel,password from regist where tel = '$tel'";
				$result = mysql_query($sql);
				$num = mysql_num_rows($result);
				if($num){
					echo "<script>alert('用户名已存在');</script>";
				}else{
					$sql_insert = "insert into regist (tel,password) values('$tel','$psw')";
					$res_insert = mysql_query($sql_insert);
					if($res_insert){
						echo "<script>alert('注册成功！');</script>";
					}else{
						echo "<script>alert('系统繁忙，请稍候！');</script>";
					}
				}
			}else{
				echo "<script>alert('密码不一致！');</script>";
			}
		}


?>