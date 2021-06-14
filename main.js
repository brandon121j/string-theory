
// function xing(strings) {

//     let output = '';

//     for (const char of strings) {
//         if (/^[a-zA-Z]+$/.test(char)) {
//             output += 'x';
//         } else {
//             output += char;
//         }
// }
    

//     return output;
// }

// console.log(xing('hello world other words'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function xify(string) {

//     let outputString = 'X';
//     let counter = '';


//     for (i = 0; i < string.length; i++) {
//         counter += outputString; 
//     }
//     return counter;
// }

// console.log(xify('hello world other words'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function yellingChars(string) {

//     let yelling = '';


//     for (const character of string) {
//         yelling += character + '!';
//     }
//     return yelling;
// }

// console.log(yellingChars('hello world'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function yellingChars(string) {

//     let yelling = '';


//     for (const character of string) {
//         yelling += character + '!';
//     }
//     return yelling;
// }

// console.log(yellingChars('hello world'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function indexedChars(string) {
//     let answer = '';

//     for(let i = 0; i < string.length; i++) {
//         answer += i + string[i];
//     }
//     return answer;
// }

// console.log(indexedChars('Mississippi'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function numberedChars(string) {
//     let ans = '';

//     for(let i = 0; i < string.length; i++) {
//         ans += '(' + i + ')' + string[i];
//     }
//     return ans;
// }

// console.log(numberedChars('Example'));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function exclaim(string) {
//     let box = '';

//     for(i = 0; i < string.length; i++) {
//         if (string[i] == '?' || string[i] == '.') {
//             box += '!';
//         }
//         else {
//             box += string[i]
//         }
//     }
//     return box;
// }
// console.log(exclaim('What are you doing? Are you a fool?'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function highAndLow(numbers){
//     let b = numbers.split(' ');
//     let c = [];
//     for(const a of b) {
//         c.push(Number(a));
//     }

//     let minimum = Math.min(...c);  
//     let maximum = Math.max(...c);
//     let result = `${minimum} ${maximum}`
//     return result
// }
// console.log(highAndLow('3 11 2 -44 5'))

// function getMiddle(s)
// {
//   let a = '';  
//   for(const b of s) {
//     if(s.length % 2 !== 0) {
//         let c = (s.length/2) -1
//         b = s[c]+s[c+1]
//     }
//     else if (s.length == 1){
//         return s;
//     }
//     else {
//         let c = Math.floor(s.length/2)
//         b = s[c]
//     }
//   }
//   return b;
// }
// console.log(getMiddle('Brandon'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function repeatIt(string, int) {
//     let box = '';

//     while(int > 0) {
//         box += string;
//         int--;
//     }
//     return box
// }
// console.log(repeatIt('Hello', 3))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function truncate(string) {

//     box = '';

//     for (i = 0; i < 15; i++) {
//         box += string[i];
//     }
//     box += '...';

//     return box;
// }
// console.log(truncate('Hello there dearest old pal friend maybe some words and stuff'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function ciEmailify(string) {

//     box = '';

//     for(let i = 0; i < string.length; i++) {
//         if (string[i] === ' ') {
//             box += '.'
//         }
//         else {
//             box += string[i].toLowerCase();
//         }
//     }

//     box += '@codeimmersives.com';

//     return box;
// }
// console.log(ciEmailify('Brandon Johnson'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function reverse(string) {
//     box = '';

//     for(let i = string.length - 1; i >= 0; i--) {
//         box += string[i];        
//     }
//     return box
// }
// console.log(reverse('Hello'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function onlyVowels(string) {

//     box = '';
//     // vow = ['a', 'e', 'i', 'o', 'u'];
//     // vowCap = ['A', 'E', 'I', 'O', 'U'];

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == 'a' || string[i] == 'A' ||
//             string[i] == 'e' || string[i] == 'E' ||
//             string[i] == 'i' || string[i] == 'I' ||
//             string[i] == 'o' || string[i] == 'O' ||
//             string[i] == 'u' || string[i] == 'U' ) 
//             {} 
//             else {
//             box += string[i]
//             }
        
//     }
//     return box;

    
// }
// console.log(onlyVowels('A E I O U sometimes y is in there too'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function crazyCase(string) {
//     box = '';

//     for(let i = 0; i < string.length; i++) {
//         if (i % 2 != 0) {
//             box += string[i].toUpperCase();
//             console.log(string.length)
//         }
//         else {
//             box += string[i].toLowerCase()
//             console.log(string.length)
//         }
//     }
//     return box;
// }
// console.log(crazyCase('brandon JOHNSON '))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function titleCase(string) {
//     box = '';
//     string = string.toLowerCase().split(' ');

//     for(i = 0; i < string.length; i++) {
//         box += string[i].charAt(0).toUpperCase() + string[i].slice(1);
//         console.log(box)
//     }   
//     return box;   
// }
// console.log(titleCase('HELLO THERE HOW ARE YOU doing this is an example'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function camelCase(string) {

//     box = '';

//     for(i = 0; i < string.length; i++) {
//         if (string[i] === ' ') {
//             box += string[i + 1].toUpperCase();
//             i++
//         }
//         else {
//             box += string[i];
//         }
//     }
//     return box
// }
// console.log(camelCase('HEY there mister example person string'))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function crazyCase2ReturnOfCrazyCase(string) {
    box = '';

    for(let i = 0; i < string.length; i++) {
        if (i % 2 != 0) {
            box += string[i].toUpperCase();
        }
        else {
            box += string[i].toLowerCase()
        }
    }
    return box;
}
console.log(crazyCase2ReturnOfCrazyCase('brandon JOHNSON '))