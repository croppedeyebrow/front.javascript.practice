// 함수 선언문 : function 키워드로 생성, 호이스티에 영향 받음, 호출해야 실행 됨.

// let test =10000;
// console.log(sum(10,20));
// console.log(sum(100,200));



// function sum(p1,p2) {
//     return test+p1+p2;

// }


// 함수표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 되지 않음, 네이밍함수와 익명의 함수로 만들 수 있음.
// 일반적인 경우에는 익명의 함수로 만들고, 함수의 이름이 필요할 때는 함수선언식을 사용하는 것이 좋음
// const gugudan = function(dan) {
//     for(let i=1; i< 10; i++) {
//         console.log(`${dan}*${i} = ${dan*i}`);
//     }
// }

// gugudan(5);
// gugudan(3);

// 화살표함수 : 특별한 경우가 아니면, 함수표현식과 동일하게 사용 가능.// ES6에서 추가된 새로운 함수 선언 방법.// 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨.
// const gugudan = (dan) => {
//     for(let i=1; i < 10; i++){
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }

// gugudan(5);
//  gugudan(3);



//기본값할당:
// const sum = (num1, num2 =100) => {
//     console.log(num1,num2);
//     return num1 + num2;
// }

// console.log(sum(10));

// const sum = (num1, num2 =100) => num1 + num2;


// console.log(sum(10));

// 자바스크립트에서는 매개변수의 수만큼 인수를 전달하지 않아도 오류가 발생하지 않음.

// const sum = (num1, num2) => {
//     console.log(num1,num2);
//     return num1 + num2;
// }
// sum(10);




// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위

// let a = 10;  전역 스코프를 사용하면, 사이드 이펙트가 생길 수 있음.
// function sum() {
//     let a =10; //지역스코프이자 블록 스코프.
//     console.log(`함수 내부: ${a}`);
// }



//var가 호스팅을 해도, 함수의 최상단까지만 끌어올림.
// function sum() {
//     // var a =10; //지역스코프이자 블록 스코프.
//     console.log(`함수 내부: ${a}`);
//     var a =10;
// }

// sum();
// console.log(`함수 외부: ${a}`);


// let a = 10;//전역 스코프//

// {  let b=20;//블록스코프를 따름
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);

//참조 우선순위.

// let a = 10
// const b = 20;
// function  sum() {
//      let a = 50;
//      const b = 70;
//     console.log(`함수 내부 a: ${a}`);
//     console.log(`함수 내부 b: ${b}`);
// }
// sum();


let a = 10
let b = 20;
 {
     let a = 30;
     let b = 40;
    console.log(`함수 내부 a: ${a}`);
    console.log(`함수 내부 b: ${b}`);
}

//전역변수가 있어도, 내부변수가 우선. 내부변수가 없으면, 전역변수로 적용
//var과 let,const의 차이를 명확히 아는 것이 중요!
// . 변수가 여러 스코프에서 정의된 경우, 해당 변수를 참조할 때 가장 가까운 스코프에 있는 변수가 우선됩니다. 이를 "스코프 체인"이라고도 합니다.

// 스코프 체인에서 가장 가까운 스코프에 정의된 변수가 다른 스코프에서 정의된 변수보다 우선합니다. 따라서 내부 스코프에 있는 변수가 외부 스코프에 있는 변수보다 우선됩니다.


//즉시 실행 함수: 함수를 정의하자마자 바로 실행되는 함수

(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행 합니다");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";

    for(let i =0; i <100; i++)
    console.log(i);
}

