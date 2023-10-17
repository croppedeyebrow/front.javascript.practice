/*1. 성적을 입력 받아서 출력하기
-0~100점 사이가 아니면 입력 오류 출력
-90점 이상 A, 80점 이상B, 70점 이상 C, 60점 이상 D, 나머지 F 처리 */

let point = Number(prompt("성적을 입력하세요 :" ,"0에서 100사이 "));


if(!isNaN(point)) {
  point = parseFloat(point);

if(point >=0  && point <=100) {
    let grade;

    if(point >=90) {
        grade= 'A';
    }

    else if (point >=80) {
        grade = 'B'
    }

    else if (point >=70){
        grade = 'C'
    }
    else if (point >=60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }
    document.write("당신의 성적은 : " + point + "<br>당신의 학점은" +grade);
}else{
    document.write("잘못된 점수를 입력하셨습니다.");
}
} 







