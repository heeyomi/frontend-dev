const request01 = function(url, callback){ //request01 : db.query, $.ajax와 유사
    console.log("req01 [" + url + "]");
    setTimeout(function(){
        const resp = {
            data : "Hello World"
        }
        
        callback(resp);
    }, 3000);
}

const request02 = function (url) { //request02 : db.query, $.ajax Promise 객체를 리턴하는 프라미즈화(promify)된 함수
    console.log("req02 [" + url + "]");
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            const resp = {
                data : "Hello World"
            }
            resolve(resp);
            // error
            // reject("fails: request02");
        }, 3000);        
    });
}

// const fetch = async function(url) { //model.findAll, model.insert ...
//     try{
//         console.log("fetch [" + url + "]");
//         const response = await request02(url);
//         return response;
//     }
// }

// request01("http://www.heeyomi.com/api", function (response) {
//     console.log(response);
// })

// request02("http://www.heeyomi.com/api")
// .then(function (response) {
//     console.log(response);
// }).catch(function (err) {
//     console.error(err);
// });

fetch("http://www.heeyomi/com/api")
.then(function (response) {
    console.log(respone);
});


const index = async function () {
    const respone = await fetch("http://www.heeyomi.com/api");
    console.log(response);
}

f();

console.log("do somethin");