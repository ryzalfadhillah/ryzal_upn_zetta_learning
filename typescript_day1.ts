let myTypescripts = function (sentence: String, firstNum: number, secondNum: number): String {
    return sentence.slice(firstNum, secondNum);
}

const sentences = "Learning Typescript is different than Javascript";
const firstNums = 9;
const secondNums = 19;

let results = myTypescripts(sentences, firstNums, secondNums);
console.log(results);