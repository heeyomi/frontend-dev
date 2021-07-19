const assert = require('assert');
const { add } = require('./ex02');

try {
    assert.equal(add(10, 20), '30' ); 
    console.log('OK');
} catch (error) {
    console.log("fail : " , error.message);
}