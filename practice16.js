const datas = [
  { name: "nitin", profession: "software engineer" },
  { name: "yash", profession: "software engineer" },
];

function getdatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${index}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getdatas();
