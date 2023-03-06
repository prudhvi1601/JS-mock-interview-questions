const li = document.querySelectorAll('li');

 
console.log(li);

const arrList = Array.from(li);
console.log(arrList);


// 2nd method
const arrList2 = [...li];
console.log(arrList2); 




//  const dat = {"name" : "raj", "age" : 24};

// type 1
//  const arr = [];
// for(let key in list){
//     arr.push(key,list[key]);
// }
// console.log(arr);

// type 2
// console.log(Object.entries(dat));
// console.log(Object.keys(dat));
// console.log(Object.values(dat));


       
