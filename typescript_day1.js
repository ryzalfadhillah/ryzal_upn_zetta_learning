var myTypescripts = function (sentence, firstNum, secondNum) {
    return sentence.slice(firstNum, secondNum);
};
var sentences = "Learning Typescript is different than Javascript";
var firstNums = 9;
var secondNums = 19;
var results = myTypescripts(sentences, firstNums, secondNums);
console.log(results);
