

let userInput = prompt("please enter your username:");
const url = `https://api.github.com/users/${userInput}`;
fetch(url)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

// let user = {
//     name : "youseif",
//     age : 23,
//     address : "Oman"
// }


async function loadData(){
    let obj = await fetch(url);
    let ddt = await obj.json();
    await console.log(ddt);

    document.querySelector("#main").innerHTML = `
    <img src = ${ddt.avatar_url} width= 50px  hight = 50px /> <br>
    `

}
loadData();