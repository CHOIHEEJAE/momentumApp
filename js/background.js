const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg'
];

const choseImage = images[Math.floor(Math.random() * images.length)];

//createElement로 커스텀 태그(element) 만들기
const bgImage = document.createElement('img');
//만든 태그의 소스 경로 설정
bgImage.src = `img/${choseImage}`; // 백틱으로 변수 바인딩
//만들어진 태그 html body에 추가하기 append : 맨 뒤에 추가 , prepend : 맨 앞에 추가
document.body.appendChild(bgImage);
