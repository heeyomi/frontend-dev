//DOM Level 1 Event 처리 : elemenet의 event attribute 사용하는 방식
// 2) Javascript code(DOM API)
var tabBox = {
	onTabClicked: function(){
	},
	init : function(){
		liTabs[i].addEventListener("click", onTabClicked);
	}
};
	
var onTabClicked = function() {
	//unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length == 1) && (lisSelected[0].className = "");
		
	//selected
	this.className = "selected";
};
	
	
window.onload = function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	console.log(divTabBox.childNodes);
		
	var ul = divTabBox.childNodes[1];
	var liTabs = ul.getElementsByTagName("li");
		
	for (var i = 0; i < liTabs.length; i++) {
		liTabs[i].addEventListener("click", onTabClicked);
	}
}