function changeIcon(condition){
    condition = condition.toLowerCase();
        icon.src =`assets/${condition}.png`;
}
async function modifyDetails(){
    let city = inputBtn.value;
    details = await fetchApi(city);
    arr = details.split(",");
    temp.innerHTML = `${arr[0]}°C`;
    speed.innerHTML = `${arr[1]}Km/h`;
    humidity.innerHTML = `${arr[[2]]}%`;
    City.innerHTML = `${city.toUpperCase()}`;
    changeIcon(arr[3]);
}
async function fetchApi(city){
    let url = await fetch(`YOUR AP KEY`);
    let data = await url.json();
    return `${Math.ceil(data.main.temp)},${Math.ceil(data.wind.speed)},${data.main.humidity},${data.weather[0].main}`;
}
let inputBtn = document.body.querySelector("#cityInput");
let searchBtn = document.body.querySelector("#searchBtn");
let temp = document.body.querySelector(".weather .temp");
let humidity = document.body.querySelector(".humidity");
let speed = document.body.querySelector(".wind");
let City = document.body.querySelector(".city");
let icon = document.body.querySelector(".weather-icon");
let arr = [];
let details ={};

searchBtn.addEventListener("click",async ()=>{
    modifyDetails();
});
document.body.addEventListener("keydown",(ele)=>{
    if(inputBtn.value!="" && ele.key.toLowerCase()=="enter" ){
        modifyDetails();
    }
})

