let isRed = false;
const head= document.querySelector("#head-line");
head.onclick = function() {
    if(!isRed) {
    head.style.color = "red";
    console.log("현재 컬러는 레드입니다")
} else {
    head.style.color = "blue"
    console.log("현재 컬러는 블루입니다")
}
isRed = !isRed
}