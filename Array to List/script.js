
function arrayToList(arr){
    let list = {};
    for(let i = arr.length ; i>=arr[0];i--){
        list +=("value : " + i + ", rest : null" )
    }
    return list;
}
console.log(arrayToList([1,2,3,4,5,6]));

// const arr = [1,2,3,4,5,6];
// const arrList = Array.toString(arr);
// console.log(arrList);