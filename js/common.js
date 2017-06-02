function $(id) {
	return document.getElementById(id);
}

function getOffset(obj) {
	var oOffset = {left:0, top:0};
	do{
		oOffset.left += obj.offsetLeft;
		oOffset.top  += obj.offsetTop;

		obj = obj.parentNode;
	}while(obj && obj !== document);

	return oOffset;
}