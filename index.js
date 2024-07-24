import TestA_10 from './test/testA_10.js';
import TestB_10 from './test/testB_10.js';
import TestA_1000 from './test/testA_1000.js';
import TestB_1000 from './test/testB_1000.js';
import testA_10000 from './test/testA_10000.js';
import testB_10000 from './test/testB_10000.js';

console.log('A 为 key 不一样，值为 1 的对象 {[key]: 1}')
console.log('B 为 key 一样，值为 1的对象 { a: 1}')
console.log('')

function test(a, b, runNumber) {
    let countA = 0, countB = 0, equalCount = 0;
    let testStartTime = performance.now();  // 开始测试的时间

    for (let i = 0; i < 100; i++) {
        let timeA = measureTime(a, runNumber);
        let timeB = measureTime(b, runNumber);

        if (timeA < timeB) countA++;
        else if (timeB < timeA) countB++;
        else equalCount++;
    }

    let testDuration = performance.now() - testStartTime;  // 测试总持续时间
    console.log(`A 更快 ${countA} 次，B 更快 ${countB} 次，相同 ${equalCount} 次。`);
    console.log(`总运行时间: ${testDuration.toFixed(2)} 毫秒`);
}

function measureTime(func, runNumber) {
    let startTime = performance.now();
    for (let i = 0; i < runNumber; i++) func();
    return performance.now() - startTime;
}

function testAll() {
    [1, 100, 10000].forEach(runNumber => {
        console.log(`数量级10,运行次数 ${runNumber}`);
        test(TestA_10, TestB_10, runNumber);
        console.log(`数量级1000,运行次数 ${runNumber}`);
        test(TestA_1000, TestB_1000, runNumber);
        console.log(`数量级10000,运行次数 ${runNumber}`);
        test(testA_10000, testB_10000, runNumber);
        console.log('');
    });
}

testAll();
