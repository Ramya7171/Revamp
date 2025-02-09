////......................FUNCTION..........
//parameter

function add(a,b){
    return a+b

}

//argument

const res=add(10,20)
console.log(res)   //30


//.....................CALL BACK FUNCTION........................

function sub(arg){
console.log(arg)
}
sub (function c() {})



//...........Schedulars.............
// setInterval   

let counter=0
const id=setInterval(()=>{
    console.log(counter+1)
    counter=counter+1

},1000)
    
clearInterval(id)     ///stop pannum 

 //...setTimer... //

 const timeoutID=setTimeout(()=>{
    console.log(counter)
    counter=counter+1

 } ,1000)
 clearTimeout(timeoutID)  




