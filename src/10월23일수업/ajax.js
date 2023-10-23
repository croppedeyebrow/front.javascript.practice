const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); 
xhr.setRequestHeader("content-type", "application/json"); 
xhr.send(); // XMLHttpRequest 객체를 사용하여 서버로 HTTP 요청을 보내는 메서드
// XMLHttpRequest 객체를 사용하여 서버로부터 HTTP 응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티
xhr.onload = () => {
    if (xhr.status === 200) {
        // 정상적으로 응답되면 status가 200
        const res = JSON.parse(xhr.response); 
        console.log(res); // 100개의 데이터를 받아옴
    } else {
        // 에러 발생
        console.error(xhr.status, xhr.statusText);
    }
};