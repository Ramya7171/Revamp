//day-1


console.log("Hello -1")
console.log("Hello -2")


//variable=var ,let , const 

var r=10
console.log(r)

let job="Full stack developer"
console.log(job)

console.log(r,job)

var age=21
var name="Ramya Devi"
console.log(age,name)

const pi=3.14
console.log( age,name,pi)

//var vs let vs const

 var name=10
{
    let job="full stack developer"
    console.log("inside a block-1",job)

}
console.log("outside a block-2",job )

/*multi
 line 
 comment*/

 //     Java Script Operator   //


let a=10
let b=20
let c=b++

console.log(">>>>" ,c,b)
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)

//
let person={name:"Ramya" ,age:21 ,names:"Rasika"}
//1.dot notation
console.log(person.name);

//2.Braket notation
console.log(person["name"])
console.log(person["age"])
console.log(person["names"])

//3.Modify an Object

console.log("before:",person)
//Dot Notation
person.name="poo";

//Braket Notation
age["age"]="poo";
console.log("after:",person)

/*identifiers-set of rules to naming the variable
firstName
$firstName
-FirstName
firstName12


// not valied
space vara kutathu  [firat Name]
first no vara kutathu [12324firatname]

*/
person.color="white"
console.log(person)

/// Array ///
let arr2=[1,"rohi", true,null,[1,2,3],{name:"Hello"}];

let Object={
    Number:10,
    names:"Prabhu",
    habites:["sing","dance"],
    car:{
        name:"MG",
        Model:"new version",
    },

    run:function(){
        console.log("rr")
    }
}
