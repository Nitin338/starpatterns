// 1. functions 
// A javascript function is a block of code designed to perform a particular task.

// Functions definition:-
// Before we use a function we need to define it.A function also called a function declaration or function statement.Consists of the function keyword.
// The name of function .
// A list of parameters to the function,enclose in paranthesis and separated by commas.The JS tha defines the function enclosed in curly brackets,{}

// function sum(){
//     var a=10,b=20;
//     var total=a+b;
//     console.log(total);
// }

// 2. Calling function.
// definition a function does not execute it.
// A javascript function executes when something is invokes it (calls it)
// sum();    


// 3.Function Parameters VS function arguments.
// function parameters are the names listed in the functions definiton.
// function arguments are real values passed to the function.

// function sum(a,b){
//     var total=a+b;
//     console.log(total)
// }
// sum();
// sum(20,30);


// Functions expressions.
// Functions expressions simply means 
// create a function and put it into a variable.

// function sum(a,b){
//     var total=a+b;
//     console.log(total)
// }
// var funExp =sum(10,40)
// funExp;


// Return Keyword:-
// When Javascript reaches a return statement.
// the function will stop executing.
// The return value is "returned" back to the "caller"
// Function often compute return value 
// function sum(a,b){
//     return total=a+b;
//     console.log(total)
// }
// var funExp =sum(100,40)
// console.log(funExp)


// Anonymos function
// A function expression is similar to the and has the same index.
// as a function declaration one can defined as name.
// a function expression(where the name of expression might be use in call stack )
// or "anonymous" function expressions.

var funExp=function(a,b){
    return total=a+b;
}
console.log(funExp(15,80))
