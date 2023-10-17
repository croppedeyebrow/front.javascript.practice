const  currentYear = 2023;
let birthYear;
let age;


birthYear = prompt("태어난 연도를 입력 하세요(YYYY) : ", "");
//PROMPT로 넘겨받은 값은 기본적으로 문자열
age = currentYear - Number(birthYear);
//document는 웹 화면 단에 구현.
document.write(currentYear + "년 현재<br>")
document.write(birthYear +"년에 태어난 사람의 나이는" + age + "살 입니다.")
