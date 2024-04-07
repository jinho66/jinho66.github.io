const bgi = document.body.style.backgroundImage
const imagePaths = [
    "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288734&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjIwX251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
    "data:image/jpeg;base64,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",
    "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288788&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjc0X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
    // 필요한 만큼 이미지 파일 경로를 추가하세요
];

// 현재 이미지 인덱스
var currentImageIndex = 0;

// 이미지 변경 함수
function changeImage() {
    // 현재 이미지 경로 설정
    var currentImagePath = imagePaths[currentImageIndex];

    // body 요소의 배경 이미지 변경
    document.body.style.backgroundImage = "url('" + currentImagePath + "')";

    // 다음 이미지 인덱스로 이동
    currentImageIndex++;
    if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0; // 이미지 인덱스가 경로 리스트를 벗어나면 처음으로 이동
    }
}

// 페이지 로드시 이미지 변경 시작
changeImage();

// 3초마다 이미지 변경
setInterval(changeImage, 3000);
