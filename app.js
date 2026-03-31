async function modifyDetails(){
    let city = inputBtn.value;
    let details = await fetchApi(city);
    arr = details.split(",");
    temp.innerHTML = `${arr[0]}°C`;
    speed.innerHTML = `${arr[1]}Km/h`;
    humidity.innerHTML = `${arr[[2]]}%`;
    City.innerHTML = `${city.toUpperCase()}`;
}
async function fetchApi(city){
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73cd1bf3925ef1f476668800e0a88ef1&units=metric`);
    let data = await url.json();
    console.log(data);
    return `${Math.ceil(data.main.temp)},${Math.ceil(data.wind.speed)},${data.main.humidity}`;
}
let inputBtn = document.body.querySelector("#cityInput");
let searchBtn = document.body.querySelector("#searchBtn");
let temp = document.body.querySelector(".weather .temp");
let humidity = document.body.querySelector(".humidity");
let speed = document.body.querySelector(".wind");
let City = document.body.querySelector(".city");
let arr = [];
searchBtn.addEventListener("click",async ()=>{
    modifyDetails();
});
document.body.addEventListener("keydown",(ele)=>{
    if(inputBtn.value!="" && ele.key.toLowerCase()=="enter" ){
        modifyDetails();
    }
})

