window.onload = function () {
	let
		oThumbBox  = $('thumb-box'),
		oMiddleBox = $('middle-box'),
		oBigBox    = $('big-box'),
		aThumbImg  = Array.from(oThumbBox.getElementsByTagName('img')),
		oMiddleImg = $('middle-img'),
		oBigImg    = $('big-img'),
		oShadow	   = $('shadow');

	// 给缩略图添加输入移入事件
	aThumbImg.forEach(function (v){
		v.onmouseenter = function () {
			// 清空所有的缩略图的className
			aThumbImg.forEach(function (m) {
				m.className = '';
			});

			// 当前的缩略图添加className
			this.className = 'active';

			// 改变中型图片的地址
			oMiddleImg.src = this.src;

			// 改变大型图片的地址
			oBigImg.src = this.src;
		}
	});

	// 给中型图片区域添加移入事件
	oMiddleBox.onmouseenter = function () {
		oShadow.style.display = 'block';
		oBigBox.style.display = 'block';
	}

	// 给中型图片区域添加移动事件
	oMiddleBox.onmousemove = function (e) {
		let
			ev = e || window.event,
			oMiddleBoxOffset = getOffset(oMiddleBox),
			iL = ev.clientX - oShadow.offsetWidth / 2 - oMiddleBoxOffset.left,
			iT = ev.clientY - oShadow.offsetHeight / 2 - oMiddleBoxOffset.top;
		
		// 限定范围
		if(iL < 0) {
			iL = 0;
		}
		if(iT < 0) {
			iT = 0;
		}
		if(iL > oMiddleBox.offsetWidth / 2) {
			iL = oMiddleBox.offsetWidth / 2;
		}
		if(iT > oMiddleBox.offsetHeight / 2) {
			iT = oMiddleBox.offsetHeight / 1.6;
		}
		// 指定遮罩层的位置
		oShadow.style.left = iL + 'px';
		oShadow.style.top  = iT + 'px';


		// 大型图片移动的位置
		let
			iHalfMiddleBox = oMiddleBox.offsetWidth / 2,
			iHalfBigImg    = oBigImg.offsetWidth / 2,
			iMiddleMiddleBox = oMiddleBox.offsetHeight / 2,
			iMiddleBigImg    = oBigImg.offsetHeight / 2;

		let
			iBigL = iL * iHalfBigImg / iHalfMiddleBox,
			iBigT = iT * iMiddleBigImg / iMiddleMiddleBox;

		oBigImg.style.left = -iBigL + 'px';
		oBigImg.style.top  = -iBigT + 'px';
	}

	// 给中型图片区域添加移出事件
	oMiddleBox.onmouseleave = function () {
		oShadow.style.display = 'none';
		oBigBox.style.display = 'none';
	}
}