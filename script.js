let apiKey = "928bc47420da5cd933bd4da4fd5e13d1"                      //API KEY of OPEN Weather MAp
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const city = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather #weather-icon");
const body = document.querySelector("body");
const time = document.querySelector("#time");


async function getData(place){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=a00d1226e4fb482993c0cf732b077035&location=Oxford, ${place}`;
    const res = await fetch(url);
    let data = await res.json();

    time.innerHTML = data.datetime;
    
}

async function checkWeather(cityName){
    
    const response = await fetch(apiUrl + cityName +  `&appid=${apiKey}`);
    let data = await response.json();    

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#weather p").innerHTML = Math.round(data.main.temp)+"°C";
    
    var weather = data.weather[0].main.toLowerCase(); // Convert to lowercase

    if(weather=="clear"){
        weatherIcon.src = "https://i.pinimg.com/236x/8c/85/37/8c85375c2c298aba67f0ef8572c2602b.jpg";
        body.style.backgroundImage= "url('https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc=')";        
    }
    else if(weather=="rain"){
        weatherIcon.src="https://i.pinimg.com/236x/a2/80/11/a2801105cb5900bb36ea0b5002438b31.jpg";
        body.style.backgroundImage = "url('https://ca-times.brightspotcdn.com/dims4/default/5f38df2/2147483647/strip/false/crop/4032x3024+0+0/resize/1486x1115!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3f%2Fb0%2F0ac52d2a41a792fbd63dd3e8002c%2Frainstorm.jpeg')";
        
    }
    else if(weather=="clouds"){
        weatherIcon.src="https://i.pinimg.com/236x/e1/1a/33/e11a33f837d8248b666c98bb8b409a6a.jpg";
        body.style.backgroundImage = "url('https://media.istockphoto.com/id/106529026/photo/threatening-dark-clouds-covering-the-sky.jpg?s=612x612&w=0&k=20&c=XOSnMeZbKOW541FgTISJkDVvFK_bVHyTvusmAk9jjAs=')";
        
    }
    else if(weather == "mist"){
        weatherIcon.src = "https://i.pinimg.com/236x/2b/46/6c/2b466cd21d4312428c95519f30164704.jpg";
        body.style.backgroundImage="url('https://i.pinimg.com/236x/ab/f4/d4/abf4d45b1b735948905e83cbcdc8454d.jpg')"
    }
    else if(weather=="drizzle"){
        weatherIcon.src="https://i.pinimg.com/236x/f2/ed/81/f2ed810131e5be454e61cc0015de8382.jpg";
        body.style.backgroundImage="url('https://i.pinimg.com/236x/ac/28/d3/ac28d35da8be5231b82f5355d42911b7.jpg')"
    }
    else{
        weatherIcon.src = "https://i.pinimg.com/236x/8c/85/37/8c85375c2c298aba67f0ef8572c2602b.jpg";
        body.style.backgroundImage= "url('https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc=')";
    }    

    getData(city.value);

}
checkWeather("Dehradun");

searchBtn.addEventListener("click",function(){    
    checkWeather(city.value);    
});