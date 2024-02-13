//Challenges file:
//In order of run this challenges in console use the "npx ts-node moy_challenges/convert_roman_numerals.ts" command on terminal.


// Convert Roman Numerals:
// Write a function that converts a Roman numeral (e.g., "XII") to an integer.

function romanToInt(romanNumeral: string): number {
    const romanNumeralsMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanNumeral[i];
        const currentValue = romanNumeralsMap[currentSymbol];
        const nextSymbol = romanNumeral[i + 1];
        const nextValue = romanNumeralsMap[nextSymbol];

        if (nextValue && currentValue < nextValue) {
            // If the current value is less than the next value, subtract the current value
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}

const romanNumeral = "XII";
const integerEquivalent = romanToInt(romanNumeral);
console.log(`Integer equivalent: ${integerEquivalent}`);
