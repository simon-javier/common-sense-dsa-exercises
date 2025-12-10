import Stack from './Stack.js'

function reverseString(str) {
    let newStr = ""
    let buffer = new Stack();
    for (const ch of str) {
        buffer.push(ch);
    }

    while (!buffer.isEmpty()) {
        newStr += buffer.pop();
    }

    return newStr;
}

let str = "Hello World!"
console.log(reverseString(str))
