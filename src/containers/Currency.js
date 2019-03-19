
const formatCurrency = (currencySymbol, decimalSeparator) => {
        return (value) => {
            const wholePart = Math.trunc(value/100)
            let fractionalPart = value % 100;
        if ( fractionalPart < 10 ) {
            fractionalPart = '0' + fractionalPart;
        }
        return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;

        }
}
const getFormat = formatCurrency('$', '.');

// console.log(getFormat(2000));
// console.log(getFormat(2599));


var numbers = [1,2,3,4,5];

// MAP
const result = numbers.map((v) => 3 ** v);
// or
const mapThreePow = (v) => 3 ** v;
const mapTwoPow = (v) => 2 ** v;
const resultNew = numbers.map(mapTwoPow);


console.log(resultNew);

// Reduce
 
const sum = numbers.reduce( (accumulator, v) => {
    const result = accumulator + v;
    console.log( `accumulator, v, result: ${ accumulator }, ${ v }, ${ result }` );
    return result;
}, 0 );

// filter
const numbers1 = [-1,4,-3,-3,6,8,0,-3]

const value = numbers1.filter((v) => {
    return v> 0;
} 
);
console.log('Value:  '+value);
  


