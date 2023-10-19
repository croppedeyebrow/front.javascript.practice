let final = new Date("2024-02-21");
let now = new Date("2023-10-19");


let toNow = now.getTime();
let toDay = final.getTime();
let remainTime = toDay-toNow;

remainTime = Math.round(remainTime/(1000*60*60*24)); 

document.querySelector('#remain').innerText=remainTime;