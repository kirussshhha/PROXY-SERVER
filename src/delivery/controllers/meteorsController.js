import { getMeteors, getDangerousMeteors } from '../../usecases/getMeteors.js';
import { getDateRange } from "../../usecases/getDateRange.js";

const meteorsController = async (req, res) => {
  try {
    const { startDateString, endDateString } = getDateRange();

    const {
      endDate = endDateString,
      startDate = startDateString,
      count,
      whereDangerousMeteors,
    } = req.query;

    const meteors = await getMeteors(startDate, endDate);

    if (count && whereDangerousMeteors) {
      const isDangerous = await getDangerousMeteors(startDate, endDate);

      return res.json({
        meteorsCount: `Колличество метеоритов: ${meteors.length}`,
        isDangerousMeteors:
          isDangerous.length > 0
            ? "Обнаружены опасные метеориты"
            : "Опасных метеоритов не обнаружено",
        isDangerous,
      });
    }

    if (count) {
      return res.json({
        message: `Колличество метеоритов: ${meteors.length}`,
      });
    }

    if (whereDangerousMeteors) {
      const isDangerous = await getDangerousMeteors(startDate, endDate);

      return res.json({
        message:
          isDangerous.length > 0
            ? "Обнаружены опасные метеориты"
            : "Опасных метеоритов не обнаружено",
        isDangerous,
      });
    }

    return res.json(meteors);
  } catch (err) {
    console.error("Ошибка при обработке запроса:", err.message);
    res.status(500).send("Ошибка при запросе данных метеоров");
  }
};

export default meteorsController;
