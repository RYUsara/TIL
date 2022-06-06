/* 함수의 선언과 호출, 고차함수
   함수의 호출시 무조건 return값을 넣어보자!
*/
const minus = (a,b) => a - b; //함수선언

function calculate(func,a,b) {
  return func(a,b);
}

minus(8,2); //6 함수호출

const onClick = () => (event) => {
  console.log("hello");
};

document.querySelector('#header').addEventListener("click", onClick());


/* 클로저 문제 => 스코프, 비동기, var(쓰레기) 
for(반복문)과 비동기를 함께 사용하면 종종 발생
*/
// 대표문제
function a() {
  for(var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();

function a() {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();