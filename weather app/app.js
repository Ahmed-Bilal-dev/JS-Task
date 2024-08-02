let input = document.getElementById('input');
let button = document.getElementById('btn');
let myApi = "88dd7186ccef7bc00d0c4d9c85a773f8";
let weatherInfo = document.getElementById('weather-info');

function getApi() {
    if (input.value.trim() === "") {
        // alert("Input is empty");
        weatherInfo.innerHTML =  '<p class="error">Please input the city name</p>'
    } else {
        weatherInfo.innerHTML = `<div class="loader"></div>`;
        let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${myApi}`;
        fetch(urlApi)
            .then((res) => res.json())
            .then((data) => showData(data))
            .catch((err) => {
                console.log(err);
                weatherInfo.innerHTML = "<p>Error fetching data. Please try again.</p>";
            });
    }

}

function showData(data) {
    const { country } = data.sys;
    const { temp } = data.main;
    const roundTemp = Math.floor(temp);
    const { main, icon, id } = data.weather[0];
    let imagesurl;

    if (id >= 200 && id <= 232) {
        imagesurl = './assets/images/storm.png';
    } else if (id >= 300 && id <= 321) {
        imagesurl = './assets/images/drizzle.png';
    } else if (id >= 500 && id <= 531) {
        imagesurl = './assets/images/rain.png';
    } else if (id >= 600 && id <= 622) {
        imagesurl = './assets/images/snow.png';
    } else if (id >= 701 && id <= 781) {
        imagesurl = './assets/images/atmosphere.png';
    } else if (id >= 801 && id <= 804) {
        imagesurl = './assets/images/clouds.png';
    } else {
        imagesurl = './assets/images/clear.png';
    }

    weatherInfo.innerHTML = `
        <div class="card-header">
            <span>${data.name}, ${country}</span><br>
            <span>${main}</span>
        </div> <br/>
        <div class="clouds">
            <img src="${imagesurl}" alt="${main}">
        </div> <br/>
        <span class="temp">${roundTemp}°C</span>
    `;
   setTimeout(()=>{
       input.value = ''
   },2000)

}

input,addEventListener('keyup',(e)=>{
   if(e.key === "Enter"){
    getApi();
   }
})
button.addEventListener('click', getApi);

let currlocation = document.querySelector('.location')

function currentLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude
    let currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${myApi}`
    fetch(currentUrl)
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((err) => {
        console.log(err);
        weatherInfo.innerHTML = "<p>Error fetching data. Please try again.</p>";
    });
    }, (error)=>{
        const {message} = error;
       weatherInfo.innerHTML = `<p class="error">${message}</p>`
    })
}

currlocation.addEventListener('click', currentLocation);



