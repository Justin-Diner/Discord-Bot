import { config } from '../data/config.js'

// Leetcode commands
export const leetCode = (msg) => {
	const args = msg.content.substring(config.prefix.length).split(' ');
    if (msg.author.bot) {
    		return
		}
	if (args.length == 1) {
    	msg.channel.send('Please enter the command with a type of problem: \n 1. #leetcode two sum \n 2. #leetcode valid parentheses')
  	}
	if (args.length === 3 && args[1] === 'two' && args[2] === 'sum') {
    	msg.reply('Please provide a number in the following format: \n #leetcode two sum [array] target')
  	}
	if (args.length === 3 && args[1] === 'valid' && args[2] === 'parentheses') {
		msg.reply("Please provide a string of parentheses in the following format: \n #leetcode valid parentheses ({[]})")
	}
	if (args.length >= 4 && args[1] === 'valid' && args[2] === 'parentheses') {
		msg.reply(validParentheses(args[3]).toString());
	}
	if (args.length >= 4 && args[1] === 'two' && args[2] === 'sum') {
		console.log(args)
// RegEx for the nums argument array
		const randomVar = msg.content
		const tsRegex = /\[.*?\]/g
		const regExResult = randomVar.match(tsRegex);
		const emptyString2 = '';
	// Array result in a String
		const regExResultsString = emptyString2 + regExResult;
		const regExWithoutSpaces = regExResultsString.replace(/ /g, '')
		const ArrayNums = JSON.parse(regExWithoutSpaces)
		const nums = ArrayNums;
	// Finding the target within the message
    	const emptyString3 = '';
    	const targetFinal = emptyString3 + randomVar;
    	const targetNum = targetFinal.substr(targetFinal.indexOf(']') + 1)
    	const target = targetNum; 
    	twoSum(nums, target);
    	
		function twoSum(nums, target) {
    		for(let i = 0; i < nums.length; i++) {
    			for (let j = i + 1; j < nums.length; j++) {
        			let sum = nums[i] + nums[j];
        			if (sum == target) {
        				let finalAnswer = [i, j];
        				let finalAnswerString = JSON.stringify(finalAnswer);
        				return msg.reply(finalAnswerString);
      				}
    			}
			}
		}
	}
}

function validParentheses(s) {
	if (s.length <= 1 || s.length % 2 != 0) {
        return false;
    }
    let table = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (table[stack.pop()] !== s[i]) {
            return false
            }   
        }
    if (stack.length === 0) {
        return true;
        } 
    return false;
};