async function fetchData() {

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh`;

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
    const dataObj = result;
    console.log(dataObj);
  } catch (error) {
    console.error(error);
  }
}

