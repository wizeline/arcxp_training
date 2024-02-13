//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/find_prime_numbers.ts" command on terminal.

// Find Prime Numbers:
// Write a function that returns all prime numbers up to a certain limit.

function generatePrimesUpToLimit(limit: number): number[] {
    const primes: number[] = [];

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }

    return primes;
}

function isPrime(num: number): boolean {
    if (num < 2) {
        return false;
    }
/**
 * We start the loop with i equal to 2, as 2 is the smallest prime number.
 * The loop continues as long as i is less than or equal to the square root of the given number (num).
 * Using Math.sqrt(num) is an optimization. 
 * If a number is not a prime, it must have a divisor smaller than or equal to its square root. 
 * Checking up to the square root reduces the number of iterations and improves performance.
 */
    for (let i = 2; i <= Math.sqrt(num); i++) {
    //f num is divisible by i with no remainder, it means num is not a prime number. 
    //In this case, the function returns false.
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const limit = 30;
const primeNumbers = generatePrimesUpToLimit(limit);
console.log("The prime numbers are ", primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]