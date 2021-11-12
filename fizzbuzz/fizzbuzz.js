module.exports = FizzBuzz;

function FizzBuzz(number) {
    if (typeof number == 'number') {
        let result = '';

        if (number % 3 === 0) result += 'Fizz';
        if (number % 5 === 0) result += 'Buzz';
        
        return (result || number.toString());
    } else {
        return 'Error! FizzBuzz function only accepts numbers as parameter';
    }
}