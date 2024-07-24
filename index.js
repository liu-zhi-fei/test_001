import testB from './testB.js';
import testA from './testA.js';

function start() {
    let startTime, endTime;
    let timeA, timeB;

    startTime = performance.now();
    for (let i = 0; i < 1000000; i++) {
        testB();
    }
    endTime = performance.now();
    timeA = endTime - startTime;

    startTime = performance.now();
    for (let i = 0; i < 1000000; i++) {
        testA();
    }
    endTime = performance.now();
    timeB = endTime - startTime;

    if (timeA < timeB) {
        return 'A';
    } else if (timeB < timeA) {
        return 'B';
    } else {
        return 'Equal';
    }
}

let countA = 0;
let countB = 0;
let equalCount = 0;

for (let i = 0; i < 10000; i++) {
    let result = start();
    if (result === 'A') {
        countA++;
    } else if (result === 'B') {
        countB++;
    } else {
        equalCount++;
    }
}

console.log(`总共测试了 10000 次，其中 A 更快 ${countA} 次，B 更快 ${countB} 次，相同 ${equalCount} 次。`);
