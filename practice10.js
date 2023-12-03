
// Object

//  let obj={a:1,b:2,c:3}
 
// console.table(obj)


let runAgain = true;
const candrive=(age)=>{
    return age>=18?true:false
}

while( runAgain){
    let age = prompt("Enter your Age")
    age=Number.parseInt(age)

    if(age<0){
        console.error("Please enter a valid age");
        break;
    }
    
    if (candrive(age)){
        alert("you can drive")
    }
    else{
        alert("you can not drive")
    }
    runAgain = confirm("Do you want to play again?")
}


