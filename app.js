
// require('dotenv').config()

// console.log(process.env)
const APIkey="35978116edb04bedc4671ca3bb828cc4"

const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric"




const weatherIcon =document.querySelector('.weather-icon')

const weatherId= document.querySelector('.weather')

const buttonTag=document.querySelector('button')

const descrip=document.querySelector('#report')

const tempMinValue=document.querySelector('.temp-min')
const tempMaxValue=document.querySelector('.temp-max')


buttonTag.addEventListener('click',()=>{

const input=document.querySelector('input')
const inputValue=input.value.toLowerCase()
console.log(inputValue)


if(inputValue==="") {
    alert("please enter valid city name")
}
else
{
    getWeatherreport(inputValue)
}
    
})



async function getWeatherreport(city) {
     
    const errorMessage=document.querySelector('.err')
    

    const response= await fetch(apiURL + `&appid=${APIkey}`+`&q=${city}`)

    const data=await response.json()

    console.log(data)

    if (response.status===404){
       errorMessage.style.display="block"
       weatherId.style.display="none"
    } else{
        details()















async function details(params) {
    
    if(data.weather[0].main=='Haze'){
        weatherIcon.src="images/haze.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    if(data.weather[0].main=='Clear'){
        weatherIcon.src="images/clear.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
        descrip.innerHTML=`${data.weather[0].main}`
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="light rain"){
        weatherIcon.src="images/lightrain.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    else if(data.weather[0].main=="Thunderstrom"){
        weatherIcon.src="images/strom.png"
        descrip.innerHTML=`${data.weather[0].description}`
    }
    
}
    

    document.querySelector('.weather').style.display="block"
    errorMessage.style.display="none"
    tempMaxValue.innerHTML=`max-temp: ${Math.round(data.main.temp_max)}°C`
    tempMinValue.innerHTML=`min-temp: ${Math.round(data.main.temp_min)}°C`
    document.querySelector('.feels').innerHTML=`${data.main.feels_like}`


    const cityname=document.querySelector('.city')
    const temperature=document.querySelector('.temp')

    const humidity= document.querySelector('#humidity')
    const windSpeed=document.querySelector('#wind')


    cityname.innerHTML=`${data.name}`

    temperature.innerHTML=`${Math.round(data.main.temp)}°C`

    humidity.innerHTML=`${data.main.humidity}%`

    windSpeed.innerHTML=`${data.wind.speed}Km/h`

    }



}

