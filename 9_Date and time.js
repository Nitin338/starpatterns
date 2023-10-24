// javascript date objects representive  a single moment in time in a  platform independent FormData. Date object contains a number tha
// represent milliseconds  since 1 january 1970 utc

// Creating date objects :-

// There are 4 ways to create a new date objects.

// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)it takes seven arguments
// new Date(milliseconds)we cannot avoid month section
// new Date(date string)


//1. new Date()
// Date objects are creted with the new date() constructor.

// let currdate=new Date()
// console.log(currdate);
// console.log(new Date().toString());



// 2.Date.now()
// returns the numeric value corresponding  to the current time- the number of milliseconds elapsed
// since january 1 ,1970 00:00:00 UTC

// console.log(Date.now())


// 3.new Date(year,month,...)
// 7 numbers specify the year,month,days,hours,minutes,seconds,miliseconds
// Note:-javascript count months from 0 to 11.december is 11

// var d= new Date(2023,5,13,2,32,40,0)
// console.log(d.toLocaleString())


// 4. new Date(datestring)
// new date(datestring)creates a new date object from a date string 

// var d=new Date("May 13,2023 11:10:34");
// console.log(d.toString())



// Date Methods:-

// const curr=mew Date();
// console.log(curr.)






// Time method:-

// const curTime=new Date()
// how to get indivisual time

// console.log(curTime.getTime());
// the get method returns the milliseconds since 1 january 1970
// console.log(curTime.getHours());
// the gethours method returns the hours of a date  as a number 0-23
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// how to set the indivisual time 






