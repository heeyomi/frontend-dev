<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
$(function() {
	$("button").click(function () {
		$.ajax({
			url: "${pageContext.request.contextPath}/api/xml",
			dataType: "json",
			success: function(response) {
				let html = "";
				html += ("<h4>" + response.data.no+ "</h4>");
				html += ("<h5>" + response.data.name + "</h5>");
				html += ("<p>" + response.data.message + "</p>");
				
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - Json Format Message(Data)</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>