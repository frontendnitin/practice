 let arr= [1,2,3,4,5]                             //MAP   

let a = arr.map((value,index,Array)=>{
    console.log(value,index,Array)
    return value+1
 })

console.log(a)

                                        

let arr2 = [20,10,5,9,3]                            //FILTER

let a2= arr2.filter((c)=>{
     return c<10
    })
    console.log(a2)



let arr3 = [1,2,3,4,5]                             //REDUCE

let newarr = arr3.reduce((a,b)=>{
    return a*b
})

console.log(newarr)


