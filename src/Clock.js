// 현재 시간을 업데이트하여 표시하는 함수
const ClockDiv = document.getElementById("Clock");

const nowTime = document.createElement("p");
nowTime.classList.add("Clock");
function updateTime() {
    // 현재 날짜와 시간을 가져오기
    const now = new Date();
    // 시간 요소를 가져오기
    const timeElement = document.getElementById('current-time');

    // 시간을 HH:MM:SS 형식으로 포맷팅하기
    const hours = now.getHours().toString().padStart(2, '0');
    //hours.classList.add("hours");
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    nowTime.innerText = timeString;
    ClockDiv.appendChild(nowTime);
}

updateTime();

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);