// Rest & spread 
// Array 

// 1.spread =unlock the element into individual element  [...name]

let arr1=[ "Array start",1,2,3,4,5,]
console.log(arr1)

let arr2=[...arr1,6,7] 
console.log("arr2:",arr2)                       //[1,2,3,4,5,6,7] 

//create a copy
let arr3=[...arr2]
console.log("arr3:",arr3)       //[1,2,3,4,5,6,7] 

//concatenation
let arr4=[...arr1,...arr2]
console.log("arr4:",arr4)          //[1,2,3,4,5,1,2,3,4,5,6,7]

////////////objects
let person1 ={name:"Ramya", age:21}

//copy of object using spread
let person2 ={...person1,city:"Tenkasi"}
console.log(person2)              //{ name: 'Ramya', age: 21, city: 'Tenkasi'}

let person3 ={...person1,...person2}
console.log(person3)                  //{ name: 'Ramya', age: 21, city: 'Tenkasi'}

function add(a,b,c){
    console.log(c)    //3
    console.log(a+b) //3
}

let arr=[1,2,3,4,5,]
add(...arr)

//Rest:pack into Array
function sub(a,b,c, ...arg){
    console.log(a,b,c)       //1 2 3   last ah irukkum
}
sub (1,2,3,4,5,6,7,)

//string methods
console.log("=================")

let names="RAMYA DEVI"

console.log(names.length)

console.log(names.split(""))      //  ['R', 'A', 'M', 'Y',  'A', ' ', 'D', 'E',  'V', 'I']
console.log(names.toLowerCase())  //ramya devi
console.log(names.toUpperCase())  //RAMYA DEVI
console.log(names.trim)           //space irukathu


console.log("2======================")

//object desturing
let person4={names:"Ramya",age:21}
//dot notion
console.log(person4.names)

//Bracket Notion
console.log(person4["age"])

//Array Methods
let array=[1,2,3,4,5,6,7,8,9,10]

/**
 * 1.map-it like an for loop [array]
 * 2.filter-it also like an for loop [array  ]
 * 3.reduse-
 */
//Map
array.map((items) => {
    console.log(items);

});
 const res=array.map((items,index)=>{
    console.log(index)
    return items
})
 console.log("res:",res)      //    [1, 2, 3, 4,  5,   6, 7, 8, 9, 10]


 const RR=array.map((items,index)=>{
    console.log(index)
return items*items
})
 console.log( "RR",RR)       //   [1,  4,  9, 16,  25,  36, 49, 64, 81, 100]

 const ans=array.filter((items)=>{
    return items > 2
  })
  console.log( "ans",ans)     //  [3, 4, 5,  6,  7, 8, 9, 10]
      