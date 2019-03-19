import lodashh from 'lodash';

let  regularFunc = (a,b,c) => {
    return a*b*c;
  }
  let lodashCurry = lodashh.curry(regularFunc(2,3,4))

console.log(lodashCurry(2)(3)(4));
