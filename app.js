const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const fill = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "black";
const CANVAS_SIZE = 700;

//캔버스는 안쪽에 있는 pixel들을 다룰수있다.

// 1) css size. css로 캔버스를 만든다.
// pixel manipulating size 2)캔버스를, pixel을 다룰수 있는 element로서 만든다.
// 이 element에 width와 height를 지정해줘야함   
canvas.width = CANVAS_SIZE;// 픽셀에 크기를 안먹였기 때문에 그림이 안그려졌었음
canvas.height = CANVAS_SIZE;
// canvas는 context를 갖고 있는 HTML요소
// path is a line!!

ctx.fillStyle = 'white'; // 배경 디폴트색깔 하얀색
ctx.fillRect(0, 0, canvas.width, canvas.height ); // 캔버스 크기만큼 색칠
ctx.strokeStyle = INITIAL_COLOR; // default로 검정색 
ctx.fillStyle = INITIAL_COLOR;

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
  // console.log(event); 마우스 움직임에 연관된 모든 event 모두 출력  
  
  if(!painting){ // 클릭 되지 않았을 때 동작
    ctx.beginPath(); // path 는 선이다
    // ctx.moveTo(x, y);
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
  ctx.moveTo(x,y);
}

function handleCanvasClick(){
  if(fill.innerHTML == 'Fill'){
    ctx.fillRect(0, 0, canvas.width, canvas.height ); 
  }
}
function handleCM(event){
  console.log(event);
  event.preventDefault(); // 해당 고유 이벤트 발생 방지
}

if(canvas){
  canvas.addEventListener('mousemove', onMouseMove); // 계속 움직일때마다 카운트
  canvas.addEventListener('mousedown', startPainting); // 마우스 클릭
  document.addEventListener('mouseup',stopPainting);// 클릭한거 뗌
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
  console.log(ctx.lineWidth);
}

function fillPaintHandler(e){
  if(fill.innerHTML=='Fill'){
    fill.innerHTML = "Painter";
  }else{
    fill.innerHTML = "Fill"; 
  }
}

function handleSaveClick(){
// 캔버스의 data를 이미지처럼 얻기가 필요.
const image = canvas.toDataURL();
const link = document.createElement("a")
link.href = image;
link.download = "paint[☜(ﾟヮﾟ☜)☜(ﾟヮﾟ☜)☜(ﾟヮﾟ☜)]"; //download는 a의 속성.  이링크로 가는 대신 url을 다운로드하라고 지시

link.click();// click을 거짓으로 만든다?
console.log(link);

}

if(colors){// colors는 배열 안에 있기 때문에 if문 처리 안해줘도 된다.
  Array.from(colors).forEach(color => color.addEventListener('click', colorHandler));
}
// array.from메소드는 object로부터 array를 만든다.

if(range){ // 이렇게 확인해주는 습관 들이면 좋다.
  range.addEventListener('input', rangeHandler)
}

if(fill){
  fill.addEventListener('click' , fillPaintHandler);
}
if(save){
  save.addEventListener('click', handleSaveClick);
}

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