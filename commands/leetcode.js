import { config } from '../data/config.js'

// Leetcode commands
export const leetCode = msg => {
  const args = msg.content.substring(config.prefix.length).split(' ')
  if (msg.author.bot) {
    return
  }
  if (args.length == 1) {
    msg.channel.send('Please enter the command with a type of problem: \n 1. #leetcode two sum \n 2. #leetcode valid parentheses')
  }

// Two Sum 
  if (args.length === 3 && args[1] === 'two' && args[2] === 'sum') {
    msg.reply('Please provide a number in the following format: \n #leetcode two sum [array] target')
  }
  if (args.length >= 4 && args[1] === 'two' && args[2] === 'sum') {
    // RegEx for the nums argument array
    const randomVar = msg.content
    const tsRegex = /\[.*?\]/g
    const regExResult = randomVar.match(tsRegex)
    // Array result in a String
    const regExResultsString = `${regExResult}`
    const regExWithoutSpaces = regExResultsString.replace(/ /g, '')
    const ArrayNums = JSON.parse(regExWithoutSpaces)
    const nums = ArrayNums
    // Finding the target within the message
    const emptyString3 = ''
    const targetFinal = emptyString3 + randomVar
    const targetNum = targetFinal.substring(targetFinal.indexOf(']') + 1)
    const target = targetNum
    msg.channel.send(twoSum(nums, target))
  }

// Valid Parentheses
  if (args.length === 3 && args[1] === 'valid' && args[2] === 'parentheses') {
    msg.reply("Please provide a string of parentheses in the following format: \n #leetcode valid parentheses ({[]})")
  }
  if (args.length >= 4 && args[1] === 'valid' && args[2] === 'parentheses') {
    msg.channel.send(validParentheses(args[3]).toString())
  }
}

function twoSum(numArray, targetNumber) {
  for (let i = 0; i < numArray.length; i++) {
	for (let j = i + 1; j < numArray.length; j++) {
	  let sum = numArray[i] + numArray[j];
	  if (sum == targetNumber) {
		let finalAnswer = `[${i}, ${j}]`
		return finalAnswer;
	  }
	}
  }
}

function validParentheses(s) {
  if (s.length <= 1 || s.length % 2 !== 0) {
    return false
  }
  const table = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (table[stack.pop()] !== s[i]) {
      return false
    }
  }
  if (stack.length === 0) {
    return true
  }
  return false
}