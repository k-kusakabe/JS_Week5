// Weather API

const weatherAPI =
  "https://api.openweathermap.org/data/2.5/forecast?lat=51&lon=0.1&appid=fa27250a3182e8c63f0b50b4c7b58d88";

const getWeather = async () => {
  //get weather data
  try {
    const { data } = await axios.get(weatherAPI);
    //   console.log(data.list);

    //create html
    const html = data.list.map((item) => {
      return `<div class="item">
            <h1>${new Date(item.dt * 1000).toLocaleString()}</h1>
            <p>${Math.round(item.main.temp - 273.15)}&#8451;</p>
            <p>${item.weather[0].description}</p></div>`;
    });

    //   console.log(html);
    //output to html
    document.getElementById("root").innerHTML = html.join("");
  } catch {
    alert("Error!");
  }
};

getWeather();
