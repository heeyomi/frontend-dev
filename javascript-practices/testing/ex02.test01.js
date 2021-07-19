const assert = require('assert');
const { add } = require('./ex02');

try {
    //assert는 try/catch 필수
    assert.equal(add(10, 20) /* actual*/, '30' /* expected */); // ==
    assert.strictEqual(add(10, 20) /* actual*/, '30' /* expected */); // ===
    console.log('OK');
} catch (error) {
    console.log("fail : " , error.message);
}