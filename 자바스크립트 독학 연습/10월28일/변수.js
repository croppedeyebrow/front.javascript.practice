name = "Mike"; // name이라는 이름이 변수중에 유일하지 않음 수 있으므로 굉장히 위험.
age = 30;

//변수 = 값. 으로 표기.
// 문자는 항상, 따옴표[ "" 혹은'']로 감싸줘야 한다.

//함수.

alert(변수명); //경고창을 띄우는 함수.

console.log(변수명); //로그를 찍는 함수.

//변수명의 중복으로, 이전에 사용된 변수에 최근 변수가 씌워지는 것을  피하기 위해 사용하는 것  : let, const

//let은 한번 선언 후, 다른 값으로 변경 가능.// 변할 수 있는 값은 let으로 선언.
//최초로 사용하는 함수에, let을 통해 선언한다면, 오류 발생시 쉽게 알 수 있음.
let grade = "F";

//-----lines

grade = "A+";

//const, 절대로 바뀌지 않는 상수를 입력 할 때 사용한다!
//const로 선언된 변수를 바꾸려고 하면 오류가 발생.
//바뀌지 않는 값을 입력할 때 사용//대문자로 선언하는 것이 좋다.

// 첫째, 변수는 문자와 숫자, $와 _만을 사용.
// const My_Home = "...";
// let_=1;
// let $ = 3;

// 둘째, 첫글자는 숫자가 될 수 없습니다.
// let 1stGrade = 'A+'; 는 불가.

// 셋째, 예약어는 사용할 수 없습니다.
// let let =99; 불가

// 넷째, 가급적 상수는 대문자로 알려주세요.
// const MAX_SIZE =99;

// 다섯째, 변수명은 읽기 쉽고 이해할 수 있게 선언.
// let a = 1;
// let userNumber = 3;
