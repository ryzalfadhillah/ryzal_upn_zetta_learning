var typescript_day2 = function (param) {
    var result = '';
    param.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
};
var case1 = [1, 'data', 3, 'result'];
var case2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(typescript_day2(case1));
console.log(typescript_day2(case2));
