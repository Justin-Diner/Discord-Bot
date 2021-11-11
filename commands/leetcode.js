import { config } from '../data/config.js'

// Leetcode commands
export const leetCode = (msg) => {
  if (msg.content === config.prefix + 'leetcode') {
    if (msg.author.bot) {
    return 
  }
  let args = msg.content.substring(config.prefix.length).split(' ');
  if (args.length == 1) {
    return msg.channel.send("Please enter the command with a type of problem: \n 1. #leetcode two sum");
  } else if (args.length == 3) {
    return msg.reply("Please provide a number in the following format: \n #leetcode two sum [array] target")
  } else if (msg.content.includes(args[3])) {
  //RegEx for the nums argument array
    let randomVar = msg.content
    let tsRegex = /\[.*?\]/g; //RegEx to Find the numbers between the []
    let regExResult = randomVar.match(tsRegex);
    let emptyString2 = '';
    let regExResultsString = emptyString2 + regExResult; //Array result in a String
    let regExWithoutSpaces = regExResultsString.replace(/ /g, '');
    let ArrayNums = JSON.parse(regExWithoutSpaces); 
    let nums = ArrayNums;
  //Finding the target within the message
    let emptyString3 = '';
    let targetFinal = emptyString3 + randomVar;
    let targetNum = targetFinal.substr(targetFinal.indexOf("]") + 1);
    let target = targetNum; 
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
    }}}}}}


