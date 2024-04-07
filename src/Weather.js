
const API_KEY = "cf887c7225955d718d409a2ce7cf4af3";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(weatherURL);
    fetch(weatherURL).then(response => response.json().then(data => {
        const weather = document.querySelector("#Weaher span:first-child");
        const position = document.querySelector("#Weaher span:last-child");
        position.innerText = `location:${data.name}`;
        weather.innerText = `Todays weather:${data.weather[0].main}`;
    }));
}
function onGeoError(){
    alert("Not Access");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);