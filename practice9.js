



let arr = [10,22,5,22,1,87]                //QUES - 1

do{
    let a = prompt("Enter your no.")
    a=Number.parseInt(a)
    arr.push(a)
}
while(a!=0)
    
console.log(arr)



let arr2 = [2,18,20,30,45,50]                //QUES - 2 

let per = arr2.map((val)=>{
    return val*val
})
console.log(per)




let arr3 = [4,3,2,1]                           //QUES - 3

let per2 = arr3.reduce((h1,h2)=>{
    return h1*h2
})

console.log(per2)


let arr4 = [10,20,30,50,11,83]                      //QUES - 4
 
let per3 = arr4.filter((x)=>{
    return x%10==0
})

console.log(per3)