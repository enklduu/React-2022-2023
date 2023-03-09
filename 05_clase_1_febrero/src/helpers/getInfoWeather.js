const getInfoWeather = async (ciudad, pais, apiKey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      return data.weather;
  } catch (error) {
      console.error(error);
  }
}

export default getInfoWeather;