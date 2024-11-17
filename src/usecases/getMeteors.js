import { getMeteorsFromNasa } from "../repositories/nasaRepository.js";

const getMeteors = async (startDate, endDate) => {
  try {
    const data = await getMeteorsFromNasa(startDate, endDate);
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

    return filteredMeteors;
  } catch (err) {
    throw new Error("Ошибка при обработке данных метеоров: " + err.message);
  }
};

const getDangerousMeteors = async (startDate, endDate) => {
  try {
    const meteors = await getMeteors(startDate, endDate);
    const isDangerous = [];

    meteors.forEach((meteor) => {
      if (meteor.is_potentially_hazardous_asteroid) {
        isDangerous.push(meteor);
      }
    });

    return isDangerous;
  } catch (err) {
    throw new Error(
      "Ошибка при получении данных об опасных метеоритов: " + err.message
    );
  }
};

export { getMeteors, getDangerousMeteors };
