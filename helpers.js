function convertStringsToInt(numStrings) {
    let nums = [];

    for (i of numStrings) {
        let num = Number(i);

        if (Number.isNaN(num)) {
            return new Error(`${i} is not a number.`);
        }

        nums.push(num);
    }
    return nums;
}

function mean(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("nums must be an array.");
    }
    let sum = 0;
    for (num of nums) {
        let num1 = Number(num);
        if (Number.isNaN(num1)) {
            throw new Error(`${num} is not a number.`);
        }
        sum += num;
    }
    return sum / nums.length;
}

function median(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("nums must be an array.");
    }
    for (num of nums) {
        let num1 = Number(num);
        if (Number.isNaN(num1)) {
            throw new Error(`${num} is not a number.`);
        }
    }
    const sorted = nums.sort((a, b) => a - b);
    if (sorted.length % 2 == 1) {
        // length is odd
        return sorted[(sorted.length / 2) - .5];
    } else {
        // length is even, find average of the two middle numbers
        return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2;
    }
}

function mode(nums) {
    if (!Array.isArray(nums)) {
        throw new Error("nums must be an array.");
    }
    for (num of nums) {
        let num1 = Number(num);
        if (Number.isNaN(num1)) {
            throw new Error(`${num} is not a number.`);
        }
    }
    let count = nums.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
    let max = 0;
    let val;
    for (i of Object.keys(count)) {
        if (count[i] > max) {
            max = count[i];
            val = i;
        }
    }
    return Number(val);
}

module.exports = {
    convertStringsToInt,
    mean,
    median,
    mode
};