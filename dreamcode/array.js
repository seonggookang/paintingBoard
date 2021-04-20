'use strict';// 오류를 없애주기위해서 최상단에 적고 시작함
// ex) 선언을 하지 않은 것도 에러가 안생겨버리는 것을 방지

// 1. Declaration(배열 만드는 법)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position(인덱스의 위치로 모든것을 조절 한다.)
const fruits = ['🥑','🍒'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

console.clear();

//
// 3. Looping over an array( 포문을 돌려서 출력)
// 1) for문
for(let i = 0; i < fruits.length ; i++){
  console.log(fruits[i]);
}
console.clear();
// 2) for of(값들 출력하기)
for (let fruit of fruits){
  console.log(fruit);
}
// 3) forEach(ctrl + 해당내장 함수를 클릭해서 읽어보라)
// 각 요소마다 내가 전달한 함수를 먹여서 출력
//(익명함수=>)
fruits.forEach((fruit) => console.log(fruit)); 
// forEach는 콜백함수를 인자로 받음
// value, index, array(array는 보통 포함안시킴)

console.clear();
//
// 4. 배열에 데이터를 Add, delete, copy
// push : 맨 끝 데이터 추가
fruits.push('🍉','🍌');
console.log(fruits);

// pop : 맨 끝 데이터 제거
const poped = fruits.pop(); // ctrl+해당 내장함수 클릭해보면 알수있다. return되는 놈이기때문에 변수에 넣어줘서 활용 가능
fruits.pop();
console.log(fruits);

// unshift : 맨 앞 데이터 추가
fruits.unshift('🍊','🍋');
console.log(fruits);

// shift : 맨 앞 데이터 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift 이 2개는 pop과 push 보다 매우 느리다
// 메모리에서 이동이 너무 많이 일어나기 때문에  

// splice : 원하는 부분의 데이터 삭제
// splice(2, 1) : (2번째 인덱스에서부터 1개 삭제)
// splice(3, 2) : (3번째 인덱스에서부터 2개 삭제)
console.clear();
fruits.push('🍊','🍋','🍉');
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);
fruits.splice(1,1,'🍇'); // 1번째 인덱스에서 1개 제거 후 그 자리에 포도 삽입
console.log(fruits);

// 2개의 배열 합체
const fruits2 = ['🍈','🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. 검색
// indexOf: 찾고자하는 값 인덱스 출력
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍇')); // 몇번째 인자에 있는지 확인
console.log(fruits.indexOf('🍍')); // 해당 값 없으면 -1

// includes : 값의 유무 확인
console.log(fruits.includes('🍉')); // 해당 값이 있으면 true
console.log(fruits.includes('🍍')); // 해당 값 없으면 false

// lastIndexOf : (중복 값 있을 때)찾고자 하는 값의 마지막 인덱스 출력
console.clear();
fruits.push('🍉');
fruits.unshift('🍉');
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.lastIndexOf('🍉'));
