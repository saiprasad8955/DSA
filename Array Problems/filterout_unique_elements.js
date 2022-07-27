// filter out duplicates and return unique elements
let arr = [2, 4, 5, 8, 4, 2, 3, 43, 3, 4, 667, 3, 34, 7, 86, 5, 5, 5, 5, 5, 4, 3, 3, 3, 2, 2, 2];

function ele(arr) {
    let map = new Map();
    for (let ele of arr) {
        if (map.has(ele)) {
            map.set(ele, map.get(ele) + 1);
        }
        else {
            map.set(ele, 1)
        }
    }
    let result = new Array;
    // console.log([...map.keys()]);
    
    for (let i of map) {
        if (i[1] == 1) {
            result.push(i[0])
        }
    }
    return result;
}

// these are unique elements only
console.log(ele(arr));


function uniqueEle(arr) {
    let set = new Set(arr);
    return [...set]
}
console.log(uniqueEle(arr));




var findDuplicate = function(nums) {
    let map = new Map();
    for(let el of nums){
        if(map.has(el)){
            map.set( el, map.get(el) + 1 );
        }else{
            map.set( el, 1 );
        }
    }
    let res = new Array();
    for(let el of map){
        console.log(el[1]!==1);
        
        if(el[1] !== 1){
            res.push(el[0])
        }
    }
    
    return res
};

console.log(findDuplicate([1,3,4,2,2]));


console.log(Math.sign());
console.log(Math.abs());
