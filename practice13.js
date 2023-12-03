const users=[
    {
        id : 1,
        name : "nitin",
        isActive : true,
        age : 19
    },
    {
        id : 2,
        name : "prabhat",
        isActive : true,
        age : 23
    },
    {
        id : 3,
        name : "ankush",
        isActive : true,
        age : 20
    },
    {
        id : 4,
        name : "akash",
        isActive : false,
        age : 25
    }
    
]

const names = []

// FOR LOOP

// for(i=0;i<users.length;i++){
//     if(users[i].isActive){
//         names.push(users[i].name)
//     }
// }

// console.log(names)


// FOREACH LOOP

// users.forEach((user)=>{
//     if(user.isActive){ 
//         names.push(user.name)

//     }
// })
// console.log(names)


// MAP & FILTER

const names1=users.filter((user)=>user.isActive)
.sort((user1,user2)=>user1.age < user2.age ? -1: 1)
.map((user)=>user.name)

console.log("names1=",names1)


//SORT

//  users.sort((user1,user2)=>user1.age < user2.age ? 1: -1)
// console.log(users)