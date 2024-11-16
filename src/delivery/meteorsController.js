import { getMeteors } from "../usecases/getMeteors.js";

const meteorsController = async (req, res) => {
  const startDate = "2024-11-11";
  const endDate = "2024-11-15";

  try {
    const meteors = await getMeteors(startDate, endDate); 
    console.log(meteors);
    res.send(`Колличество метеоритов: ${meteors.length}`); 
  } catch (err) {
    console.error("Ошибка при обработке запроса:", err.message);
    res.status(500).send("Ошибка при запросе данных метеоров");
  }
};

export default meteorsController;
