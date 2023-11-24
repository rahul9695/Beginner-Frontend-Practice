
// HOF - Own Map Function JS
Array.prototype.myMap = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

let arr1 = [1,2,3,4,5];
const result1 = arr1.myMap((item, index, arr)=> {
    // console.log(item, index, arr);
    return item += 1;
})

console.log("Returned Array after Map", result1);



// HOF - Own Filter Function JS
Array.prototype.myFilter = function (callback) {
    const result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
let arr2 = [1,2,3,4,5];
const result2 = arr2.myFilter((item, index, arr)=> {
    // console.log(item, index, arr);
    if(item >= 3){  // if arr element >= 3 it will be pushed in resultant array
        return item;
    }
})
console.log("Returned Array after myFilter()", result2);




// HOF - Own Reduce Function JS
Array.prototype.myReduce = function (callback, seed) {
    for(let i = 0; i < this.length; i++){
        if(seed === undefined) seed = this[i];
        else seed = callback(seed, this[i], i, this);
    }
    return seed;
}
let arr3 = [1,2,3,4,5];
const result3 = arr3.myReduce((seed, item, index, arr)=> {
    // console.log(seed, item, index, arr);
    return seed + item;
}, 0)

console.log("Returned value after original reduce()", arr3.reduce((acc,val) => acc + val, 0));
console.log("Returned value after myReduce()", result3);
