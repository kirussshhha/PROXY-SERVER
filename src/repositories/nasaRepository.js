import fetch from "node-fetch";

const getMeteorsFromNasa = async (startDate, endDate) => {
  const url = `${process.env.BASE_URL_METEORS}?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Ошибка при запросе к NASA API: " + err.message);
  }
};

const getMarsPhotosFromNasa = async () => {
  const url = `${process.env.BASE_URL_MARS_PHOTOS}&api_key=${process.env.NASA_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Ошибка при запросе к NASA API: " + err.message);
  }
};

export { getMeteorsFromNasa, getMarsPhotosFromNasa };
