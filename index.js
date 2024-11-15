const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.get("/meteors", (req, res) => {
  const startDate = "2024-11-11";
  const endDate = "2024-11-15";
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(
        `Количество замеченых астероидов с понедельника по пятницу: ${data.element_count}`
      );
      const nearEarthObjects = data.near_earth_objects;
      const filteredMeteors = [];

      for (const date in nearEarthObjects) {
        nearEarthObjects[date].forEach((meteor) => {
          const meteorInfo = {
            id: meteor.id,
            name: meteor.name,
            diameter: meteor.estimated_diameter.meters,
            is_potentially_hazardous_asteroid:
              meteor.is_potentially_hazardous_asteroid,
            close_approach_date_full:
              meteor.close_approach_data[0].close_approach_date_full,
            relative_velocity:
              meteor.close_approach_data[0].relative_velocity
                .kilometers_per_second,
          };
          filteredMeteors.push(meteorInfo);
        });
      }

      console.log(filteredMeteors);
    })
    .catch((error) => {
      console.error("Ошибка при запросе к NASA API:", error.message);
      res.status(500).send("Ошибка при запросе к NASA API");
    });
});

app.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
