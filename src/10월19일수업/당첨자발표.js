let seed = prompt("전체 응모 참가자 수 : ", "참가자수");
let picked = Math.floor((Math.random()*seed)+1);



document.write("전체 응모 참가자 수 : " + seed + "명");
document.write("<br>");
document.write("당첨자의 번호는 :" +picked + "번 입니다");