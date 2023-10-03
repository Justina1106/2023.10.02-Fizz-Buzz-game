// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".


// function FizzBuzz() {
//     let result = [];
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
//             result.push("FizzBuzzBiff");
//         }
//         else if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         }
//         else if (i % 3 === 0 && i % 7 === 0) {
//             result.push("FizzBiff");
//         }
//         else if (i % 5 === 0 && i % 7 === 0) {
//             result.push("BuzzBiff");
//         }
//         else if (i % 3 === 0) {
//             result.push("Fizz");
//         }
//         else if (i % 5 === 0) {
//             result.push("Buzz");
//         }
//         else if (i % 7 === 0) {
//             result.push("Biff");
//         }
//         else if (i % 9 === 0) {
//             result.push("Fuzz");
//         }
//         else if (i % 11 === 0) {
//             result.push("Bizz");
//         }
//         else {
//             result.push(i.toString());
//         }
//     }
//     return result;
// }
 

// let n = 100;
 

// // let result = FizzBuzz(n);
 

// // console.log(result.join(' '));

function fizzBuzz2() {
    for (let i = 1; i <= 1000; i++) {

    let output = ''

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
        output = 'FizzBuzzBiffFuzz'
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        output = 'FizzBuzzBiff'
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
        output = 'FizzBuzzFuzz'
    } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
        output = 'FizzBiffFuzz'
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
        output = 'BuzzBiffFuzz'
    } else if (i % 3 === 0 && i % 5 === 0) {
        output = 'FizzBuzz'
    } else if (i % 3 === 0 && i % 7 === 0) {
        output = 'FizzBiff'
    } else if (i % 3 === 0 && i % 9 === 0) {
        output = 'FizzFuzz'
    } else if (i % 5 === 0 && i % 7 === 0) {
        output = 'BuzzBiff'
    } else if (i % 5 === 0 && i % 9 === 0) {
        output = 'BuzzFuzz'
    } else if (i % 7 === 0 && i % 9 === 0) {
        output = 'BiffFuzz'
    } else if (i % 3 === 0) {
        output = 'Fizz'
    } else if (i % 5 === 0) {
        output = 'Buzz'
    } else if (i % 7 === 0) {
        output = 'Biff'
    } else if (i % 9 === 0) {
        output = 'Fuzz'    
    } else {
        output = i
    }
    console.log(output)
    }
}

    // fizzBuzz2()

    function fizzBuzz3() {
        for (let i = 1; i <= 1000; i++) {
      
          let output = ''
      
          if (i % 3 === 0) {
            output += 'Fizz'
          }
      
          if (i % 5 === 0) {
            output += 'Buzz'
          }
      
          if (i % 7 === 0) {
            output += 'Biff'
          }
      
          if (i % 9 === 0) {
            output += 'Fuzz'
          }
      
          if (i % 11 === 0) {
            output += 'Bizz'
          }
      
          if (!output) {
            output = i
          }
      
          console.log(output)
      
        }
      }
      
       fizzBuzz3()

    function fizzBuzz4() {
        for (let i = 1; i <= 1000; i++) {
      
          let output = ''
      
          if (i % 3 === 0) output += 'Fizz'
          if (i % 5 === 0) output += 'Buzz'
          if (i % 7 === 0) output += 'Biff'
          if (i % 9 === 0) output += 'Fuzz'
          if (i % 11 === 0) output += 'Bizz'
          if (!output) output = i
      
          console.log(output)
      
        }
      }
    //   fizzBuzz4()