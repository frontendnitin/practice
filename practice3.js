// SWITCH CASE

let age = prompt("What is your age?")

switch(age){
    case '12' :
         console.log("Your age is 12.")
         break;
    case '13' :
         console.log("Your age is 13.")
         break;
    case '14' :
         console.log("Your age is 14.")
         break;
    case '15' :
        alert("your age is 15")
         console.log("Your age is 15.")
         break;
    default:
         console.log("Your age is Invalid")    
}
       


let num = prompt("Enter your number")
num=Number.parseInt(num)

if(num%2==0 && num%3==0){
    console.log("your numbver is divisible by  2 and 3")
}
else{
    console.log("your number is not dvisible by 2 and 3")
} 