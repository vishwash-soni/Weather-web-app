const apikey ="9ad015a974b92b975f1607af0d1f4f73";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        document.querySelector(".error").style.display="none"
        var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML =  Math.round(data.wind.speed) + " Km/h";

     if(data.weather[0].main == "Clear"){
        weathericon.src = "/icons/transparency.png";
     }
    //  else if(data.weather[0].main == "Clouds"){
    //     weathericon.src = "/icons/cloudy.png";
    //  }
    //  else if(data.weather[0].main == "scattered clouds"){
    //     weathericon.src = "/icons/cloud.png";
    //  }
     else if(data.weather[0].main == "Clouds"){
        weathericon.src = "/icons/cloud2.png";
     }
     else if(data.weather[0].main == ("Drizzle")){
        weathericon.src = "/icons/showers.png";
     }
     else if(data.weather[0].main == "Rain"){
        weathericon.src = "/icons/rainy.png";
     }
     else if(data.weather[0].main == "Thunderstorm"){
        weathericon.src = "/icons/thunder.png";
     }
     else if(data.weather[0].main == "Snow"){
        weathericon.src = "/icons/snowy.png";
     }
     else if(data.weather[0].main == ("Mist"||"Smoke"||"Haze"||"Dust"||"Fog"||"Sand"||"Ash"||"Squall"||"Tornado")){
        weathericon.src = "/icons/haze.png";
     }

     document.querySelector(".weather").style.display="block";
    }
    
    }

    function checkEnter(event) {
        if (event.key === 'Enter') {
          // The Enter key was pressed
          checkweather(searchbox.value);
        }
      }



searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
    
});