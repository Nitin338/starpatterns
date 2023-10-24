// JavaScript strings are for storing and manipulating text.

// let name="nitin"
// console.log(name)


// to find length
// let name='Nitin'
// console.log(name.length)


// escape character

// let name="my name \"is\" nitin"
// console.log(name)

// finding a string in string
// string prototype .indexof(searchvalue[,fromindex])
// the indexof method returns the position of the first occurence of aspecified  text in a string 

// let a="my name is "
// console.log(a.indexOf("name"))

// last  indexOf
// let a="my name is "
// console.log(a.lastIndexOf("name"))


// Searching of a string in string
// string.prototype.search(regexp)
// the search()method  searches  a string  for a specified.
// values  and returns  the position  of the match.

// const my='I am a Nitin Shukla';
// let sdata=my.search("Nitin")
// console.log(sdata)




// Extracting string parts

// There are 3methods of extracting a part of the string.
// slice(start,end)
// substring(start,end)
// substr(start,length)

// The slice()method 
// slice()extracts  a part of  astring  amd returns  the extracted  part  in a new string.

// The method takes two parameters :the start and the end part


// var name="grapes,orange,kiwi"
// let res=name.slice(5,-3);
// console.log(res)



// substring method is similar to slice 
// the difference is that it cannot accept negative values

// var str="apple,bannana,kiwi"
// let res=str.substring(4,-2);
// console.log(res)


// substr is similar to string
// the differece is second parameter extracts the length of extracted part.
// var name="grapes,orange,kiwi"
// //  let res=name.substr(7,-2);
//  let res=name.substr(-2);


// Replacing string content()
// string.prototype.replace(searchfor,replacewith)

// the replace()method replaces a specified value with another  values in a string

// let myname="i am nitin shukla nitin"
// let replace=myname.replace('nitin','Nitin')


// console.log(replace)

// points to remember
// the replace()method  does not change  the string it is called on it returns a new value.
// by default it will chnge the first match only
// it is a case sensitive mena if Vinod and it matches with VINOD it will not change.



// extracring string characters
// 3 methods
// charAt(position)
// charcodeAt(position)
// property access[]

// the charAt()method 
// the charAt()method returns the character at a specified index(position) in astring.

// let str="hello world"
// console.log(str.charAt(1))



// charcode method
// the charcode method returns the unicode of the character at a specified index in String.
// the method  retuns the utf-16 code.
// an integer between(0 and 65535)

// let str="hello world"
// console.log(str.charCodeAt(1))

// Property access
// ES 5(2009) allows property acess [] on strings.

// var str="hello world"
// console.log(str[0]);


// upeer case lower case 

// myname="nItiN Shukla"
// console.log(myname.toUpperCase())
// console.log(myname.toLowerCase())



// trim method 
// it will removes the whitspaces from the both the sudes of a String.
// var str="              Hello world                             "
// console.log(str.trim());




// converting a string into Array
// A string can be converted into an array with the Split()methd.
// var txt="a,b,c | d,e"
// console.log(txt)
// console.log(txt.split(","));
// console.log(txt.split(""));
// console.log(txt.split("|"));



