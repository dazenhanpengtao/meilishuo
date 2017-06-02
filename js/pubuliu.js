window.onload = function() {

	var oWrap = document.getElementById("wrap");
	var aUl = oWrap.getElementsByTagName("ul");
	var data = {
		imgList: ["img/m1.jpg",
			"img/m2.jpg",
			"img/m3.jpg",
			"img/m4.jpg",
			"img/m5.jpg",
			"img/m6.jpg",
			"img/m7.jpg",
			"img/m8.jpg",
			"img/m9.jpg",
			"img/m10.jpg",
			"img/m11.jpg",
			"img/m12.jpg",
			"img/m13.jpg",
			"img/m14.jpg",
			"img/m15.jpg",
			"img/m16.jpg",
			"img/m17.jpg",
			"img/m18.jpg",
			"img/m19.jpg",
			"img/m20.jpg"
		],
		P1: ["￥77.50<span>1366</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥68.75<span>59</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥77.50<span>1366</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥68.75<span>59</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>",
			"￥88.75<span>226</span><i class='font'>&#xe61a;</i>"
		],
		P2: ["<img src='img/tyouxuan.png'/>2017春季新款浪漫碎花系带荷叶领宽松喇叭袖气质雪纺衫",
			"<img src='img/tyouxuan.png'/>2017春韩版条纹性感休闲白色防晒衣女中长款修身衬衫",
			"<img src='img/tyouxuan.png'/>春季新款百搭袖口蝴蝶结系带V领宽松显瘦衬衫上衣",
			"<img src='img/tyouxuan.png'/>2017春夏新款韩版休闲百搭宽松字母印花短袖圆领套头T恤上衣",
			"<img src='img/tyouxuan.png'/>2017韩版衬衫女长袖白色雪纺蝴蝶结宽松衬衣",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>2017春季新款浪漫碎花系带荷叶领宽松喇叭袖气质雪纺衫",
			"<img src='img/tyouxuan.png'/>2017春韩版条纹性感休闲白色防晒衣女中长款修身衬衫",
			"<img src='img/tyouxuan.png'/>春季新款百搭袖口蝴蝶结系带V领宽松显瘦衬衫上衣",
			"<img src='img/tyouxuan.png'/>2017春夏新款韩版休闲百搭宽松字母印花短袖圆领套头T恤上衣",
			"<img src='img/tyouxuan.png'/>2017韩版衬衫女长袖白色雪纺蝴蝶结宽松衬衣",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装",
			"<img src='img/tyouxuan.png'/>套装宽松印花字母贴布肩带露肩吊带T恤阔腿短裤套装"
		]
	}

	$(window).scroll(function() {
		var oScrolltop = $(this).scrollTop();
		if(oScrolltop < 20000) {
			scroll();
		}

		function scroll() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			for(var i = 0; i < aUl.length; i++) {
				var aLi = aUl[i].getElementsByTagName("li");
				var lastLi = aLi[aLi.length - 1];
				if(lastLi.offsetTop + lastLi.offsetHeight <= scrollTop + clientHeight - 200) {
					for(var j = 0; j < data.imgList.length; j++) {
						var oLi = document.createElement("li");
						oLi.innerHTML = "<img src='" + data.imgList[j] + "'><p>" + data.P1[j] + "</p><p>" + data.P2[j] + "</p>";
						aUl[i].appendChild(oLi);
					}
				}
			}

		}
	})

}