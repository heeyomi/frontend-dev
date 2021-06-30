//DOM Level 1 Event 처리 : elemenet의 event attribute 사용하는 방식
// 2) Javascript code(DOM API)
var tabBox = {
	onTabClicked: function(){
	},
	init : function(){
		liTabs[i].addEventListener("click", onTabClicked);
	}
};
window.addEventListener(load, function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	console.log(divTabBox.childNodes);
		
	var ul = divTabBox.childNodes[1];
	var liTabs = ul.getElementsByTagName("li");
		
	for (var i = 0; i < liTabs.length; i++) {
		liTabs[i].addEventListener("click", onTabClicked);
	}
});

console.log("=== global ===");
window.name = "둘리";
console.log(name, window.name);
var email = "dooly@gmail.com";
console.log(email, window.email);