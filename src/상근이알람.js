//시간 정보(시간과 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력 하기 `${}`
//parseInt()함수 필요
//1. prompt를 사용해서 시간, 분 입력 받기
//2.입력 받은 시간을 분으로 환산하고 45분을 빼기
//3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더해주기
//4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력 시 템플릿 문자열을 사용

let tmp, hour,  minute, calc;



tmp = prompt("시간을 입력하세요 :", "");
hour =Number(tmp);
tmp = prompt("분을 입력하세요 :", "");
minute=Number(tmp);
calc=(hour*60)+minute;

console.log(calc);

if(calc <45) 
    calc = (24*60) + minute;


calc -= 45;

console.log(calc);
hour=parseInt(calc/60);

minute= calc%60;

document.write("<h2>" +`${hour}시 ${minute}분` +"<h2>" );


