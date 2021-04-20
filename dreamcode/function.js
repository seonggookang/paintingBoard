// Oop
// prototype based 모방한

//
// 1. 함수 선언
// 함수도 JS에선 객체다.


//
// 2. 파라미터
// Premitive parameters : passed by value
// object parameters: passed by reference
function changename(obj){
  obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changename(ellie);
console.log(ellie.name);

// 3. Default parameters (added in ES6)
function showMessage(message, from = '안정해져있음'){ // 값을 안적어줬을 때 디폴트값 정해줌
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args){ //...dot dot dot을 써주면 배열 형태로 전달 됨
  for (let i = 0; i< args.length ; i++){
    console.log(args[i]);
  }

  for ( const arg of args){ // for문 보다 간단. value값 출력
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}
printAll('dream','coding','ellie');
// printAll. // 함수도 객체이기 때문에 함수 뒤에 dot(.) 붙여주면 내장 함수들이 나온다.

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello'; // 지역변수.
  console.log(message); // 안에서만 접근 가능
  console.log(globalMessage);
  function printAnother() {
    console.log(message);// 중첩된 함수에서 자식의 함수가 부모의 변수에 접근 가능한것이 closure!
    let childMessage = 'Hello';
  }
  // console.log(childMessage); //ReferenceError: childMessage is not defined : 밖에서 안을 볼수없음

  return undefined;// 생략 가능
}
printMessage();
// console.log(message);// Error!! message is not defined 
// 밖에서는 안이 보이지 않고
// 안에서만 밖이 보인다.


// 
// 6. Return a value
// 
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`)
console.log('sum :', result);

//
// 7. Early return, early exit
// bad
function upgradUser(user) {
  if (user.point > 10) {
    // long upgrad logic...
  }
}

 // good
function upgradUser(user) {
  if (user.point <= 10) { // 조건이 안맞는경우,값이 undefined경우, -1인경우 빨리 리턴하고 필요한 로직들은 뒤에 작성
    return;
  }
  // long upgrad logic...
}


// 함수특징 
// 변수처럼 다뤄짐
// 다른 변수로 할당 가능
// 다른 함수의 파라미터로 전달 가능
// 다른 함수의 리턴값으로 반환 가능

// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the exection reaches it.
const tree = function pretty(){} // 기명(named) 함수
const print = function() { // 익명 함수
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // 2가지의 콜백함수가 파라미터로 전달됨
  // 콜백함수  : 조건이 맞으면 너가 원하는 전달된 함수를 불러
  if (answer === 'love you') {
    printYes(); // 조건이 맞으면 이 콜백함수 호출
  } else {
    printNo(); // 안맞으면 이 콜백함수 호출
  }
}

// 익명 함수
const printYes = function() {
  console.log('yes!');
}

// 기명 함수
const printNo = function print() { // 디버깅할 때 함수이름 표시하기 위해 기명 함수 씀
  console.log('no!');
  // print(); // 함수 안에서 함수 자기 스스로를 호출( 재귀함수 : recursion)
  // 콜스택이 꽉 차버림
}

randomQuiz('wrong', printYes, printNo); // 콜백함수들을 전달
randomQuiz('love you', printYes, printNo); // 콜백함수들을 전달

// Arrow function
// 화살표 함수
// 항상 익명 함수임
const simplePrint = function () {
  console.log('simplePrint!');
}

const simplePrint2 = () =>  console.log('simplePrint!');
const add = (a , b) => a + b;

// 두줄 이상일 경우 {}블록과 return 필요함
const minus = (a , b) => {
 // do something more
  return a + b;
};

// IIFE(즉시 실행)
(function hello(){
  console.log('print immediately');
})();

// Fun quiz time!!
// function calculate(command, a , b)
// command : add, substract, divide, multiply, remainer
console.clear();

function calculate(command, a, b) {
  switch (command) {
    case 'add1':
      return a + b;
    case 'minus1':
      return a - b;
    case 'divide1':
      return a / b;
    case 'multiply1':
      return a * b; 
    case 'remainer1':
      return a % b; 
    default:
      return Error('unknown command');
  }
}

console.log(calculate('add1' , 1, 3));
console.log(calculate('minus1' , 6, 3));
console.log(calculate('divide1' , 12, 3));
console.log(calculate('multiply1' , 12, 3));
console.log(calculate('remainer1' , 12, 3));
console.log(calculate('remainer' , 12, 3));

















