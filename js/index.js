$(function(){
	(function($,undefined){
				$.fn.slider = function(opts){
					var defaults = {
						width:1200,
						height:400,
						direction:"left",
						interval:3000,
						showNav:false,
						showBtns:false
					};
					var options = $.extend(true,{},defaults,opts);
					
					function Slider(options){
						this.ele = $("#sliderBox");
						this.lists = $("#sliderList");
						this.nav = $("#sliderNav");
						this.btns = $("#sliderBtns");
						this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
						this.list = this.lists.find("li");
						this.ele.css({"width":options.width,"height":options.height});
						this.list.css({"width":options.width,"height":options.height});
						this.list.find("img").css({"width":options.width,"height":options.height});
						this.btns.find(".btn").css("top",((options.height/2)-20));
						
						switch(options.direction){
							case "top":
								this.topBottom();
								break;
							default:
								this.leftRight();
						}
						if(options.showNav){
							this.nav.show();
						}
						if(options.showBtns){
							this.btns.show();
						}
					}
					Slider.prototype.leftRight = function(){
						this.lists.css({"width":options.width*this.list.length,"height":options.height});
						this.list.css("float","left");
						this.timer = setInterval(move,options.interval);
						var _this = this;
						var index = 0;
						function move(){
							index++;
							if(index == _this.list.length){
								index = 1;
								_this.lists.css("left",0);
							}
							if(index==_this.list.length-1){
								_this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");
							
							}else{
								_this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");	
							}
							_this.lists.stop().animate({"left":-index*options.width},1000,function(){
	
							});
							
						}
						
						this.nav.find("li").hover(function(){
							clearInterval(_this.timer);
							index = $(this).index()-1;
							move();
						},function(){
							_this.timer = setInterval(move,3000);
						});
						
						this.btns.find(".btn").eq(0).click(function(){
							clearInterval(_this.timer);
							move();
							_this.timer = setInterval(move,3000);
						})
						this.btns.find(".btn").eq(1).click(function(){
							clearInterval(_this.timer);
							console.log(index);
							if(index==0){
								index = _this.list.length-3;
								_this.lists.css("left",(-(_this.list.length-1))*options.width);
							}else{
								index = index -2;
							}
							move();
							_this.timer = setInterval(move,3000);
						})
						
						
						
					}
					Slider.prototype.topBottom = function(){
						
					}
					
					new Slider(options);
					return this;
				}
				
				
			})(jQuery)
			
			$("#sliderBox").slider({showNav:true,showBtns:true});
			
				
})
