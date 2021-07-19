const assert = require('assert');
const { na } = require('./ex02');

try {
    assert.deepEqual(na(), [2, 4, 6], 'fail: deepEqual');
    assert.equal(na(), [2, 4, 6], 'fail: equal');
    console.log('ok')
} catch (error) {
    console.log("fail : " , error.message);
}