# 테스트

## JavaScript 단위 테스트 도구
1. 자바스크립트 단위 테스트 도구는 20여가지 넘게 있다.
2. Java : JUnit == JaScript : JSUnit(개발 중지, 2009년)
3. JSUnit 프로젝트 ==> Jasmine(2010년~현재)
  - 자체 assertion을 가지고 있다.
  - BDD 기반의 표준 테스팅에 맞는 문법을 작성할 수 있다.

4. DOM 직접 조작 애플리케이션(jQuery 기반) => QUnit
   - 세팅하기 쉽고 간편하게 테스트
   - Promise 기반 비동기 테스트

5. Node 기반 백엔드 애플리케이션 테스트 => Mocha<br>
  - Promise 기반 비동기 테스트
  - 자체 Assertion이 없다.
  - 대신, 외부 assertion 라이브러리를 다양하게 지원한다. (chai, should.js)
  - 유연하고 확장성이 좋다.
6. Jasmine, QUnit, Mocha, Jest(React 개발 테스트 도구)


## Mocha 설치
```bash
$ npm i -D mocha
$ npx mocha --version
9.0.2
```

## Mocha 테스트 케이스 모듈(.js) 작성
[ex01.js]
```javaScript
exports.hello = () => 'Hello World';
```

[test/ex01.js]
```javaScript
const assert = require('assert');
const { hello } = require('../ex01');

describe('hello()', function () {
    it('"Hello World" 문자열을 반환해야 함', function () {
        assert.strictEqual(hello(), "Hello World");
    });
})
```

테스트 수행1(개별적)
```bash
$ npx mocha test/ex01
```

테스트 수행2(일괄적)
```bash
$ npx mocha
```

테스트 수행 3(npm scripts stage)
1. package.json에 scripts test stage를 추가
```json
"scripts": {
    "test": "npx mocha"
}
```

2. 테스트 수행
```bash
$ npm test
```



## Assertion 기초
[ex02.js]
```javaScript
exports.add = (a,b) => a + b;
exports.na = () => [2, 4, 6];
exports.X = function () { }
```

[ex02.test01.js]
```javaScript
const assert = require('assert');
const { add } = require('./ex02');

try {
    assert.equal(add(10, 20) /* actual*/, '30' /* expected */); // ==
    assert.strictEqual(add(10, 20) /* actual*/, '30' /* expected */); // ===
    console.log('OK');
} catch (error) {
    console.log("fail : " , error.message);
}
```
Strict Mode(===, !==)로 assertion을 하여야 한다.
1. equals(deprecated) => strictEqual
2. notEqual(deprecated) => strictNotEqual
3. deepEqual(deprecated) => strictEqual
4. notDeepEqual(deprecated) => notStrictDeepEqual