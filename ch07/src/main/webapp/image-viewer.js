
var imageViewer = {
	init : function(){
		var that = this;
		$(function(){
			$("#btn-change").click(that._changeImage.bind(that));
			$("#btn-slideshow").click(that._slideShow.bind(that));
			$(".image-viewer img").dblclick(that._consoleLog);
			
			// 첫번째 이미지 출력
			that._changeImage();
		});
	},
	_consoleLog: function(){
		var name = $(this).attr("alt");
		console.log(name);
	},
	_changeImage: function(){
		var result = Math.floor(Math.random() * this._images.length);
		var info = this._images[result];
		
		$(".image-viewer img").attr({
			src: "images/" + info.file,
			alt: info.name,
			title: info.name
		});
	},
	
	_slideShow: function(){
		if(this._intervalId){
			// 슬라이드 쇼가 진행 상태
			
			// 1. 타이머 중지
			clearInterval(this._intervalId);
			this._intervalId = null;
			
			// 2. 버튼 텍스트 => 슬라이드 시작
			$("#btn.slideshow").text("슬라이드쇼 시작");
		} else{
			// 슬라이드 쇼가 중지 상태
			
			// 1. 타이머 시작
			var that = this;
			that._intervalId = setInterval(function(){
				that._changeImage();
			}, 1000);
			
			// 2. 버튼 텍스트 => 슬라이드쇼 중지
			$("btn-slideshow").text("슬라이드쇼 정지");
		}
	},
	_images : [ {
		name :"국화", file:"Chrysanthemum.jpg", 
	}, {
		name:"사막", file:"Desert.jpg", 
	}, {
		name:"수국", file:"Hydrangeas.jpg", 
	}, {
		name:"해파리", file:"Jellyfish.jpg", 
	}, {
		name:"코알라", file:"Koala.jpg", 
	}, {
		name:"등대",file:"Lighthouse.jpg", 
	}, {
		name:"펭귄", file:"Penguins.jpg", 
	}, {
		name:"튤립", file:"Tulips.jpg"
	}]
}