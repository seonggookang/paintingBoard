const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const fill = document.getElementById("jsMode");
const save = document.getElementById("jsSave");


//캔버스는 안쪽에 있는 pixel들을 다룰수있다.

// 1) css size. css로 캔버스를 만든다.
// pixel manipulating size 2)캔버스를, pixel을 다룰수 있는 element로서 만든다.
// 이 element에 width와 height를 지정해줘야함   
canvas.width = 700;
canvas.height = 700;
// canvas는 context를 갖고 있는 HTML요소
// path is a line!!

ctx.fillStyle = 'white'; // 배경 디폴트색깔 하얀색
ctx.fillRect(0, 0, 700, 700); // 배경 디폴트색깔 그리기
ctx.strokeStyle = 'black'; // default로 검정색 
ctx.fillStyle = 'black';
ctx.lineWidth = 1.5;  // 선의 굵기
 
let painting = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  painting = true;
}

function onMouseMove(event){// 마우스 움직이는 동안 계속 발생
  // client X,Y : 윈도우창 전체의 범위 내에서 마우스 위치값을 나타냄
  const x = event.offsetX; // 캔버스 안에서의 위치값
  const y = event.offsetY;
  if(!painting){ // 클릭 되지 않았을 때 동작
    ctx.beginPath(); // path 는 선이다
    ctx.moveTo(x, y);
  } else{
    ctx.lineTo(x, y);// 작은 선들이 계속 만들어지는것.
    ctx.stroke(); // 선을 긋는다
  }
}

function onMouseEnter(event){
  // painting = true;
  // if()
  x = event.offsetX;
  y = event.offsetY;
  ctx.moveTo(x,y);// 펜을 종이에 대기 시작
}

function handleCanvasClick(){
  if(fill.innerHTML == 'Fill'){
    ctx.fillRect(0, 0, canvas.width, canvas.height ); 
  }
}

function handleCM(event){
  event.preventDefault(); // 해당 고유 이벤트 발생 방지, 우클릭했을 때 나오는 도움말 안나오게
}

if(canvas){
  canvas.addEventListener('mousemove', onMouseMove); // 계속 움직일때마다 카운트
  canvas.addEventListener('mousedown', startPainting); // 클릭할 때 카운트
  document.addEventListener('mouseup',stopPainting);// 클릭한거 뗄때 카운트
  canvas.addEventListener('mouseenter', onMouseEnter); // 한 번 들어올때만 카운트
  
  canvas.addEventListener('click', handleCanvasClick); // 전체 색 칠하기
  canvas.addEventListener('contextmenu', handleCM); //우클릭
}

function colorHandler(e){
  ctx.strokeStyle = e.target.style.backgroundColor; // strokestyle을 override함
  ctx.fillStyle = e.target.style.backgroundColor; 
}

function rangeHandler(e){
  ctx.lineWidth = e.target.valueAsNumber;
}

function fillPaintHandler(){
  if(fill.innerHTML=='Fill'){
    fill.innerHTML = "Painter";
  }else{
    fill.innerHTML = "Fill"; 
  }
}

function handleSaveClick(){ // 저장 함수
// 캔버스의 data를 이미지처럼 얻기가 필요.
  const image = canvas.toDataURL();
  const link = document.createElement("a")
  console.log(link);
  link.href = image;
  link.download = "paint[☜(ﾟヮﾟ☜)]"; //download는 a의 속성.  이링크로 가는 대신 url을 다운로드하라고 지시
  console.log(image);

  link.click();// click을 거짓으로 만든다?
}

// if(colors){// colors는 배열 안에 있기 때문에 if문 처리 안해줘도 된다.
  Array.from(colors).forEach(color => 
    color.addEventListener('click', colorHandler));
// array.from메소드는 object로부터 array를 만든다.


if(range){ // 이렇게 확인해주는 습관 들이면 좋다.
  range.addEventListener('input', rangeHandler)
}//예를 들어서 저 range가 null값이면 실행할때 에러가 날수 있는 함수다

if(fill){// 글자 바뀌는 함수
  fill.addEventListener('click' , fillPaintHandler);
}
if(save){ 
  save.addEventListener('click', handleSaveClick);
}



  
// function R(a){ 
//   return a * Math.PI / 180; // 라디안으로 변환
// }
// ctx.beginPath();
// ctx.arc(350, 350, 50, 0, R(160), true); // Outer circle    
// ctx.stroke();



const goo = {
  name : 'goo',
  age : 1,
  sex : 'man'
}

goo.age = 2;//const 로 선언한 변수 안의 내용 변경 가능.
// goo = { age: 2}; // 값 자체를 변경 불가

// 캔버스는 픽셀을 다룬다.













//#####################왜 겹쳐져 그려지지?
// ctx.lineWidth = 26;
// ctx.strokeStyle = 'orange';
// ctx.moveTo(20, 20);
// ctx.lineTo(160, 20);
// ctx.stroke();

// // Second sub-path
// ctx.lineWidth = 14;
// ctx.strokeStyle = 'green';
// ctx.moveTo(20, 80);
// ctx.lineTo(220, 80);
// ctx.stroke();

// // Third sub-path
// ctx.lineWidth = 4;
// ctx.strokeStyle = 'pink';
// ctx.moveTo(20, 140);
// ctx.lineTo(280, 140);
// ctx.stroke();
//#####################