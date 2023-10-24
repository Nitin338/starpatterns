// Arrays:-
// when we use var we can stored only one value at a time.

// var friend1='nitin';
// var friend2='shukla';
// var friend3='amit';

// when we feel like strong multiple values in one variable then instead of var,we will use array.
// In Javascript ,we have an array class and arrays are the prototype of its class.
//   var myFriends=['nitin','amit','vinod'];
// console.log(myFriends[myFriends.length-1]);

// if we want to check the  elements in an array.
// console.log(myFriends.length);

// we use in for loop to navigate
var myFriends=['nitin','amit','vinod'];
 for(var i=0;i<myFriends.length;i++){
     console.log(myFriends[i]);
 }



// For In Loop:-
//  var myFriends=['nitin','amit','vinod'];
//  for(let elements in myFriends){
//     console.log(elements);
//  }

//  For Of Loop:-
// var myFriends=['nitin','amit','vinod'];
//  for(let elements of myFriends){
//     console.log(elements);
//  }

//  forEach loop
// var myFriends=['nitin','amit','vinod'];
// myFriends.forEach(function(elements,index,array){


// console.log(elements + " index:" +index +" array" +  array)

// });



// Array Method:-Perform CURD

// Array,prototype.push()
// The push() method adds one or moreelements to the end of an arrayad returns the new length of an array.

// const animals=['dogs','goats','sheep']
// // const count=animals.push('cat');

// // console.log(count)
// animals.push('cat','cow','chicken');
// console.log(animals);




// Array unshift()
// the unshift methods adds one or more elements to the begining of the elements and return the new elemnt of the new array.
const animals=['dogs','goats','sheep']
const count=animals.push('cat');

console.log(count)
animals.unshift('cat','cow','chicken');
 console.log(animals);


// 2nd example:-

// const numbers=['1','2','3','5']
// numbers.unshift('4','6');
// console.log(numbers)



// POP method:-
// The pop()method is removes the last element of an array.and returns that elment.This method changes the length of an array.
// const fruits=['apples','oranges','banana','kiwi']
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)


// SHIFT method:-
//  The SHIFT()method is removes the first element of an array.and returns that elment.This method changes the length of an array.
//  const fruits=['apples','oranges','banana','kiwi']
// console.log(fruits)
//  console.log(fruits.shift())
// console.log(fruits)

// array/prototype.map()
// let newarray=arr.map(callback(currentvalue[,index[,array]]){
    // return the element for newarray,afterexecuting something}[this arg]);
    // returns a new array containing the results  of calling a  function on every  element in this array.


    // const array1=[1,4,5,6,8,10,23]
    // num>9

    // let newarray=array1.map((curElem,index,arr)=>{
        // return curElem >9;
    // })
    // console.log(array1);
    // console.log(newarray);



// Reduce Method

// flatten an arrays means to convert 3d or 2d array in a single dimension array.
// the reduce method executes a reducer function that provide on each element of  the array resulting in single output  values.
// The reducer function takes four argument values:-
// Accumulator
// current value
// current index
// source array

// let arr=[5,6,8]
// let sum=arr.reduce((accumulator ,curElem,index,arr)=>{
//     return accumulator *=curElem;
// },2)
// console.log(sum)


// const arr=[[1,2,3],
        // [3,45,6],
        // [5,7,8]];
// let flatarr=arr.reduce((accum,currVal)=>{
    // return accum.concat(currVal);
// })
// console.log(flatarr);       






