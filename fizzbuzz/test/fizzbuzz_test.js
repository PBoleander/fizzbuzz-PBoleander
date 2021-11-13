let FizzBuzz = require('../fizzbuzz');
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

describe('FizzBuzz testing', function() {
    it ('Should be possible to call FizzBuzz function', function() {
        should.exist(FizzBuzz.call);
    });

    it ('Get 1 when it passed 1 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(1);
        let expectedResult = "1";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get 2 when it passed 2 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(2);
        let expectedResult = "2";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get Fizz when it passed 3 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(3);
        let expectedResult = "Fizz";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get Buzz when it passed 5 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(5);
        let expectedResult = "Buzz";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get FizzBuzz when it passed 15 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(15);
        let expectedResult = "FizzBuzz";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get 4 when it passed 4 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(4);
        let expectedResult = "4";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get FizzBuzz when it passed 30 to FizzBuzz function', function() {
        let actualResult = FizzBuzz(30);
        let expectedResult = "FizzBuzz";

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Get Error when it passed a parameter that is not a number to FizzBuzz function', function() {
        let actualResult = FizzBuzz("hola");
        let expectedResult = "Error! FizzBuzz function only accepts numbers as parameter";

        expect(actualResult).to.equal(expectedResult);
    });
})