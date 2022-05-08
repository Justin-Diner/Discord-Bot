/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { config } from '../data/config.js'

// JS Methods
export const jsMethods = msg => {
  if (msg.content.includes(`${config.prefix}js-methods`)) {
    if (msg.author.bot) {
      return
    }
    const args = msg.content.substring(config.prefix.length).split(' ')
    if (!args[1]) {
      msg.channel.send(
        '```Javascript methods are actions that can be performed on objects. A Javascript method is a property containing a function definition. \n \n Please choose a method from the following commands: \n \n 1: #js-methods push() \n 2: #js-methods pop() \n 3: #js-methods shift() \n 4: #js-methods unshift() \n 5: #js-methods slice() \n 6: #js-methods includes() \n 7: #js-methods some() \n 8: #js-methods split() \n 9: #js-methods parseFloat() \n 10: js-methods filter() \n 11: js-methods typeof()```'
      )
    } else if (args[1] === 'push()') {
      msg.channel.send(
        '```The push() method adds one or more elements to the end of an array and returns the new length of the array.```'
      )
    } else if (args[1] === 'pop()') {
      msg.channel.send(
        '```The pop() method removes the last element from an array and returns that element. This method changes the length of the array.```'
      )
    } else if (args[1] === 'shift()') {
      msg.channel.send(
        '```The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.```'
      )
    } else if (args[1] === 'unshift()') {
      msg.channel.send(
        '```The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.```'
      )
    } else if (args[1] === 'slice()') {
      msg.channel.send(
        '```The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.```'
      )
    } else if (args[1] === 'includes()') {
      msg.channel.send(
        '```The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.```'
      )
    } else if (args[1] === 'some()') {
      msg.channel.send(
        // eslint-disable-next-line prettier/prettier
        '```The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn\'t modify the array.```'
      )
    } else if (args[1] === 'split()') {
      msg.channel.send(
        // eslint-disable-next-line prettier/prettier
        '```The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method\'s call.```'
      )
    } else if (args[1] === 'parseFloat()') {
      msg.channel.send(
        '```The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.```'
      )
    } else if (args[1] === 'filter()') {
      msg.channel.send(
        '```The filter() method creates a new array with all elements that pass the test implemented by the provided function.```'
      )
    } else if (args[1] === 'typeof()') {
      msg.channel.send(
        '```The typeof operator returns a string indicating the type of the unevaluated operand. \n\nUndefined === "undefined"\nnull === "object"\nboolean === "boolean" \nnumber === "number" \nString === "string" \nfunction === "function" \nobject === "object"```'
      )
    }
  }
}
// JS Loops
export const jsLoops = msg => {
  if (msg.content.includes(`${config.prefix}js-loops`)) {
    const args = msg.content.substring(config.prefix.length).split(' ')
    if (msg.author.bot) {
      return
    }
    if (!args[1]) {
      msg.reply(
        '```In Javascript, there are five types of loops: \n \n (1) for \n (2) for/in \n (3) for/of \n (4) while \n (5) do/while \n \n Please Choose a Loop in the following format: "#js-loops for"```'
      )
    }
    if (args[1] === 'for') {
      msg.reply(
        '```The for loop, loops through a block of code a number of times. The for loop has the following syntax: \n \n (statement 1; statement 2; statement 3) \n \n For example: for (let i = 0; i < 5; i++) { \n text += "The number is " + i + "<br>";\n }```'
      )
    } else if (args[1] === 'for/in') {
      msg.channel.send(
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-template-curly-in-string
        '```The for/in loop iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols) including inherited enumerable properties.\n \n const object = {a: 1, b: 2, c: 3 }; \n \n for (const property in object) { \n console.log(\'${property}: ${object[property]}\'); \n } \n \n The expected output would be a:1, b:2, c:3```'
      )
    } else if (args[1] === 'for/of') {
      msg.channel.send(
        // eslint-disable-next-line prettier/prettier
        '```The for/of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. \n \n const array1 = {\'a\', \'b\', \'c\'}; \n \n for (const element of array1) \n {console.log(element); \n } \n \n Expected Output: \'a\', \'b\', \'c\'```'
      )
    } else if (args[1] === 'while') {
      msg.channel.send(
        '```The while loop, loops through a block of code as long as a specified condition is true. The while loops has the following syntax: \n \n while (condition) { code to be executed \n} \n \n For example: \n let i = 0 \n while (i < 3) { \n text += "The number is " + i; \n i++;} \n \n Result: \n The number is 0 \n The number is 1 \n The number is 2```'
      )
    } else if (args[1] === 'do/while') {
      msg.channel.send(
        '```The do/while statement, creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. \n \n let result = \'\' \n let i = 0 \n \n do { i = i + 1; \n result = result + i; \n } while (i < 5); \n \n console.log(result); \n Expected Result: "12345"```'
      )
    }
  }
}

export const jsClasses = msg => {
  if (msg.content.includes(`${config.prefix}js-classes`)) {
    const args = msg.content.substring(config.prefix.length).split(' ')
    if (msg.author.bot) {
      return
    }
    if (!args[1]) {
      msg.channel.send(
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line prettier/prettier
        '```Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.\n\n To declare a class, you use the class keyword with the name of the class ("Rectangle" here).\n\n class Rectangle { \n  constructor(height, width) { \n    this.height = height;\n    this.width = width\;\n  }\n}```'
      )
    }
  }
}
