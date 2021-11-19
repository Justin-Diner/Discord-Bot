import { config } from '../data/config.js'

// Leetcode commands
export const leetCode = (msg) => {
		const args = msg.content.substring(config.prefix.length).split(' ');
    	if (msg.author.bot) {
    		return
		}
		if (args.length == 1) {
    		msg.channel.send('Please enter the command with a type of problem: \n 1. #leetcode two sum')
  		}
		if (args.length == 3) {
    		msg.reply('Please provide a number in the following format: \n #leetcode two sum [array] target')
  		}
		if (args.length >= 4) {
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