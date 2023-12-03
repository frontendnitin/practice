// var ans = new Promise((res, rej) => {
//   var n = Math.floor(Math.random() * 10);

//   if (n < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// ans
//   .then(function () {
//     console.log("below");
//   })

//   .catch(function () {
//     console.log("above");
//   });

// SBSE PEHLE GHAR JAO
// GATE KHOLO GATE LAGAO
// KHANA PAKAO KHANA KHAO
// PHONE CHALAO
// OR AB TUM SO JAO

// var ans1 = new Promise(function (res, rej) {
//   return res("sbse pehle ghr jao");
// });

// var ans2 = ans1.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("gate kholo gate lagao");
//   });
// });

// var ans3 = ans2.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("khana pakao khana khao");
//   });
// });

// var ans4 = ans3.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("phone chalao");
//   });
// });

// var ans5 = ans4.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("or ab tum so jao");
//   });
// });

// ans5.then(function (data) {
//   console.log(data);
// });

async function abcd() {
  let raw = await fetch("https://randomuser.me/api/");
  let ans = await raw.json();
  console.log(ans);
}

abcd();
