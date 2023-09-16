const apiKey = "3abe2b05af26a43017e38244778cd638";
//const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric=&q=";
 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    
const weatherIcon = document.querySelector(".weather-icon");
localStorage.setItem("checkWeather", checkWeather.value);
localStorage.setItem("city", city.value);
let getCheckWeather = localStorage.getItem("checkWeather");
let getCity = localStorage.getItem("city");


    if(response.status == 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
    } 
    
    else {
        var data = await response.json();

       // console.log(data);
     
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
         document.querySelector(".humidity").innerHTML = data.main.temp + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     
     
         if (data.weather[0].main == "Clouds"){
             weatherIcon.src = "imgs/clouds.png";
             } else if(data.weather[0].main == "Clear"){
                 weatherIcon.src = "imgs/clear.png";
                 } else if (data.weather[0].main == "Rain"){
                     weatherIcon.src = "imgs/rain.png";
                     } else if (dara.weather[0].main == "Drizzle"){
                         weatherIcon.src = "imgs/drizzle.png";
                         } else if (dara.weather[0].main == "Mist"){
                             weatherIcon.src = "imgs/must.png";
                             }  
     
                             document.querySelector(".weather").style.display = "block";
                             document.querySelector(".error").style.display = "none";
     }
   
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
