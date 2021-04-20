// 1. 배열에서 요소들을 문자열로 만들어라. 
// join
{
  const fruits = ['apple', 'banana', 'orange'];
  // 내 코드:fruits.forEach(fruit => console.log(fruit));
  // 선생 코드 
  const result = fruits.join(', and'); // ctrl + 클릭으로 api 확인 (구분자 사용 or not
  console.log(result);
}

// 2. 문자열을 배열로 만들어라.  split()

{
  const fruits = '🍊, 🍋, 🍈';
  //  내 코드 : console.log(Array.from(fruits2));
  // 선생 코드
  const result = fruits.split("," , 2); // 2번째 인자는 옵션이다. api확인!! 숫자써주면 앞에서2 개만 전달. 구분자를 생략 하면--split()-- 문자열 전체가 배열에 인덱스 0번으로 다 들어감
  console.log(result);
}

//2.1)
{
  const fruits = 'apple, orange, pine';
  const result = fruits.split(',' , 2);// 문자열을 콤마 단위로 나눔
  console.log(result);
}

// 3. 내림차순으로 바꿔라 reverse()
{
  const array = [1,2,3,4,5];
  const result3 = array.reverse();
  console.log(result3);
  console.log(array); // 원본도 바껴버림
}

// 4. 맨 앞 2요소 제거하고 새로운 배열 만들어라
{
  // 1) 원본까지 변경 splice
  const array = [1,2,3,4,5];
  // 성구 방법: array2.shift();
  // array2.shift();
  const result = array.splice(0, 2); // 원본까지 바꿔버림
  console.log(result);
  console.log(array);

  // 2) 원본은 보존 slice  
  const array_1 = [1,2,3,4,5];
  const result_1 = array_1.slice(2, 5); // 맨 끝 번호 제외
  console.log(result_1);
  console.log(array_1); // 원본 파괴 안함
}


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
]

// 5. 90점을 갖고 있는 학생을 찾아라. find()
{// find 함수안에 콜백함수가 파라미터로 들어감.
  const result = students.find(student => student.score === 90); // arrow쓰면 function, 중괄호,return, ;  다 지운다.
  console.log(result);
}


// 6. 등록된 학생들만의 배열을 만들어라. filter()
{
  const result = students.filter(student => student.enrolled === true); // === true 안적어줘도 됨
  console.log(result);
}



// 7. 점수로만 이뤄진 배열을 만들어라.map: 배열안의 요소 각각을 다른것으로 변환
// [45, 80, 90, 66, 88]
// 성구 코드
{
  const newArray = [];
  students.forEach(function(student) {
    newArray.push(student.score);
  })
  console.log(newArray);
}
// 선생 코드
{
  const result = students.map(student=> student.score);// 파라미터로 전달되는 인자는 최대한 이해하기 쉬운 단어로 한다.
  console.log(result);
}



// 8. 50점 밑인 학생이 있는지 체크해라 (한명이라도 있으면 true): some()
{
  const result = students.some(student => student.score <= 50);
  console.log(result);

  // some()과 다르게 모두 조건이 충족돼야 ture
  const result2 = students.every(student => student.score <= 50);
  console.log(result2);
}



// 9. 학생들의 평균값을 출력해라(redcue())
{
  // 성구 코드
//  const reducer = students.reduce((acc, cur) => acc + cur.age);
//  console.log(reducer);
// reduce의 1번째 인자 : 리턴된 값이 들어옴
// reduce의 2번째 인자 : 배열의 아이템을 순차적으로 전달 받음
 const result = students.reduce((prev, curr,) => { // 배열 하나하나 돌면서 값을 누적할 때 쓰는것. 
   console.log(prev); // 점수만 합쳐서 prev가 되니 리턴값에 .age 안 붙인다.
   console.log(curr);
   return prev + curr.score; // 리턴된 값은 reduce의 첫번재 인자로 전달 됨
 },0);
 // 한줄로 만들어보기 const result = students.reduce((prev,curr) => prev + curr.score, 0);
 console.log(result/students.length);
}



// 10. 점수로만 이뤄진 문자열을 만들어라.
// map()을 이용해서 새로운 배열을 리턴 후
// join()을 써서 array -> string 변환
// '45, 80, 90, 66, 88'
{
  // map, filter,join은 배열 자체를 리턴하기 때문에 api들을 섞어서 호출할 수 있다.
  // 함수형 프로그래밍!!
  const result = students.
  map(student => student.score) 
  .filter(score => score >=50 )
  .join();
  console.log(result);
}
{
  const result = students
  .map(student => student.score)
  .sort((a,b) => a-b) // .sort() 해줘 정상 작동 하는데? // api참고
  .join();
  console.log(result);
}
