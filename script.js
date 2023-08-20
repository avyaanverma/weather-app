async function fetchData(city) {

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b79241ea8msh7c2ff7ce091ab2ep11f93djsn27a8810f7c5a',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    

    const temp = document.querySelector('.temp');

    if(response || temp.innerHTML != undefined){
    temp.innerText = `${result['temp']}°C`;

    const cityElement = document.querySelector('.city');
    cityElement.innerText = city;

    const humidity = document.querySelector('.humidity1');
    humidity.innerText = `Humidity: ${result['humidity']}%`;

    const wind = document.querySelector('.wind1');
    wind.innerText = `Wind: ${result['wind_speed']}km/h`;}
    else{
      const temp = document.querySelector('.temp');
    temp.innerText = `Please enter correct city Name`;
    }
    



    console.log(result);
  } catch (error) {
    console.error(error);
    const temp = document.querySelector('.temp');
    temp.innerText = `Please enter correct city Name`;
  }
}


search = document.getElementById

city = document.querySelector('#input');
searchBtn = document.querySelector('.searchpng');
searchBtn.addEventListener("click", ()=>{
  fetchData(city.value)
})
fetchData("Chandigarh");




// city = "Kanpur";