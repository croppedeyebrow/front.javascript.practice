// n개의 정수를 입력 받아 n*n 출력

//css 적용해서 출력
//3
//1,2,3
//4,5,6
//7,8,9

// let n = prompt("n개의 정수를 입력하세요:", "정수를 입력하세요");

// n = parseInt(n);

// if (!isNaN(n)) {
//     let result = n * n;
//     document.write(n + " * " + n + " = " + result);
// } else {
//     document.write("정수를 다시 입력하세요");
// }


let n = prompt("n을 입력하세요:");
n = parseInt(n);

if (!isNaN(n)) {
  // n * n 표를 생성합니다.
  document.write("<table>");

  for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    for (let j = 1; j <= n; j++) {
      document.write("<td>" + (i * n + j - n) + "</td>");
    }
    document.write("</tr>");
  }

  document.write("</table>");
} else {
  document.write("정수를 다시 입력하세요.");
}