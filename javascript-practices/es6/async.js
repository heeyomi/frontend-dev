const request01 = function(url, callback){ //request01 : db.query, $.ajax와 유사
    console.log("req01 [" + url + "]");
    setTimeout(function(){
        const resp = {
            data : "Hello World"
        }
        
        callback(resp);
    }, 1000);
}

request01("http://www.heeyomi.com/api", function (response) {
    console.log(response);
})