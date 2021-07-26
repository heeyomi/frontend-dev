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

// Enhanced Object Literal 보다는 named export 문법이다.
 export { add, substract };