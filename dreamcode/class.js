'use strict';
// js 에 class나 object가 없다면?

// 클래스란?
// - 연관 있는 데이터들을 한 데 묶어두는 컨테이너
// class person{
//   name; // 속성 ( field)
//   age; // 속성 ( field)
//   speak(); // 행동 ( method)
// }

// class(정의만 한거라 실제로 메모리에 안올라감)
// ES6부터 출현
// 템플릿
// 한 번만 정의함
// 안에 데이터 없음

// object(데이터를 넣었기 때문에 메모리에 올라감)
// class에 실제로 데이터를 넣어서 만든것
// instance of a class
// created many times

// 정리
// 만들어진 붕어빵 자체 : 오브젝트(instances of a class)
// 붕어빵을 만들기 위해 정의한 틀 : 클래스(template)

// ES6 전까진, 오브젝트를 만들때 function을 이용해서 템플릿을 만드는 방법을 썼었음
// Javascript class (es6에 문법만 새로 추가됨)
// 기존에 존재하던 JS위에 추가된것이기 때문에 완전새로운것이 아닌, 기존에 존재하던 syntactical sugar over prototype-based inheritance

//
// 1. class 선언
//
class Person {
  // constructor
  constructor(name, age){ // 생성자를 이용해 오브젝트 만들떄 필요한 데이를 전달
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20)// 새로운 object만들 땐 new 키워드 사용함
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 
// 2. Getter and setter
// 
class User{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.age는 get 호출함
    // ( = age ) 할당 할 때 set 호출함
  }

// 드림코딩 6번 댓글 설명 읽어보기 getter setter


  // get age(){// 값 리턴
  //   return this.age;
  // }

  // set age(value){ // set은 값을 설정 하므로 value 받아와야함
  //   this.age = value; 
  //   // value를 this.age에 할당 할 때 setter 무한 반복 호출함
  //   // Error!!! Maximum call stack size exceeded 
  // }

// 게터와 세터 안의 변수는 _(언더바)를 붙여서 private하게 만들어줌

  get age(){ 
    return this._age;
  }

  set age(value){ 
    // -- 공격적인 방법 1)
    // if (value < 0){
    //   throw Error('나이가 0살 아래일 순 없음!')
    // }

    // -- 젠틀한 방법 2)
    this._age = value < 0 ? 0 : value; //_age처럼 다른 set 함수와 다른 이름을 써줘야함
  }
}

const user1 = new User('Steve', 'Job', 19);
console.log(user1.age);
console.log(user1._age);


// 3. Fields (public, private)(너무 최신것이라 아직 비상용화)
// 추가 됐다 정도

class Experiment {
  // constructor를 쓰지 않고 field를 정의할 수 있다.
  publicField = 2; // 클래스 외부에서 접근 가능
  #privateField = 0; // 클래스 내부에서만  접근가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods (너무 최신것이라 아직 비상용화)
class Article {
  static publisher = 'Dream Coding';// static을 쓰면 객체와 상관없이 클래스 자체에 연결
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Array(1); // 괄호 안에 1왜써줌? // 크기 설정
const article2 = new Array(2);
console.log(article1);
console.log(article2);
console.log(article1.publisher); // static을 클래스 안에 안써줬다면 이용 가능.
console.log(Article.publisher);
Article.printPublisher();


//
// 객체지향언어의 하이라이트!!
// 상속 & 다양성

// 5. 상속(Inheritance) : 자식 클래스가 부모 클래스를 상속받는다.
// 공통된 속성들을 하나로 묶어서 유지보수를 쉽게 하자

class shape { 
  constructor(width, height, color){ // 총 3개의 field
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){ // draw와 getArea 총 2개의 메소드
    console.log(`drawing ${this.color} color!`);
  }

  getArea(){
    return (this.width * this.height);
  }
}

// 공통된 아이들을 작성해놓음으로써 일일히 다 써줄 필요가 없어짐
// 동일한 것들을 재사용
class Rectangle extends shape{}
class Triangle extends shape{ // 삼각형 넓이값은 본 클래스처럼 사용하면 안되니 재정의해야한다: 
  // -> override: 필요한 함수들만 오버라이딩 할 수 있다. 다양성의 힘!!
  draw(){
    super.draw(); // super까지 써주면 상속받는 본 클래스꺼도 같이 출력 가능!
    console.log('🏀');
  }

  getArea(){
    return (this.width * this.height) / 2 ;
  }

  toString(){
    return `Triangle's color : ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // 농구공 나오게 해보고싶다면 클래스 안에 재작성(오버라이딩)
console.log(triangle.getArea()); // 다양성

//
// 6. Class checking :  instanceOf
console.log(rectangle instanceof Rectangle); // 해당 객체가 클래스에 속한다면 true 아니면 false
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object); // true 모든 object, class들은 JS의 Object를 상속한것!
console.log(triangle.toString());


