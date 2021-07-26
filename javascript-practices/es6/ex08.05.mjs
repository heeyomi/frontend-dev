/**
 * named export
 * exports(CommonJS)와 유사하다.
 * 이 모듈을 import 할 때는 destructuring(객체 분해)가 가능하다.
 */

 const add = function (a, b) {
    return a + b;
}

const substract = function (a, b) {
    return a - b;
}

 export { add, substract };

 // Enhanced Object Literal을 사용해서 unnamed export를 하였다.
 // 15번 라인과 차이점을 이해하면 ES6 Module 시스템 지원의 export, import는 끝
 export default { add : add, substract : substract };