type combination =(number | string)[];

const typescript_day2 = function(param: combination): string {
    let result: string = '';
    param.map((text, index) => {
        result += (index ? ' ' : '')+text;
    })
    return result;
}

const case1 = [1, 'data',3, 'result'];
const case2 = ['Bejo', 'has', 4, 'sport', 'car'];

console.log(typescript_day2(case1));
console.log(typescript_day2(case2));