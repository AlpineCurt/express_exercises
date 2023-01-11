const { convertStringsToInt, mean, median, mode } = require('./helpers.js');

describe("Mean", function() {
    
    test("mean with correct input", () => {
        const m = mean([1, 4, 6, 7]);
        expect(m).toBeCloseTo(4.5);

        const n = mean([1.4, 2.3, 10.4]);
        expect(n).toBeCloseTo(4.7);
    });

    test("mean with invalid input", () => {
        expect(() => {
            mean(34);
        }).toThrow("nums must be an array.");
        expect(() => {
            const arr = [1, 2, 4, "derp"];
            mean(arr);
        }).toThrow("derp is not a number");
    });
})

describe("Median", function() {

    test("median with correct inputs", () => {
        const med1 = median([1, 3, 4, 34, 9, 6, 5]);
        expect(med1).toEqual(5);

        const med2 = median([5, 4, 9, 10, 1, 3]);
        expect(med2).toEqual(4.5);

        const med3 = median([4.5, 62.4, 88.3, 90, 4]);
        expect(med3).toBeCloseTo(62.4);
    })

    test("median with invalid inputs", () => {
        expect(() => {
            median("derp");
        }).toThrow("nums must be an array.");
        expect(() => {
            median([1, 3, 19, 0, "hat"]);
        }).toThrow("hat is not a number");
    })
})

describe("Mode", function() {
    
    test("mode with correct inputs", () => {
        const mode1 = mode([1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5]);
        expect(mode1).toEqual(2);
    })

    test("mode with invalid inputs", () => {
        expect(() => {
            mode("derp");
        }).toThrow("nums must be an array");
        expect(() => {
            median([1, 3, 19, 0, "hat"]);
        }).toThrow("hat is not a number");
    })
})