import { getPhotos } from "../usecases/getPhotos.js";

const marsPhotoController = async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({
        message: "Пожалуйста, укажите id, name",
      });
    }

    const photos = await getPhotos();

    return res.json({
      id: id,
      message: `Привет, ${name}! Вот снимок с марсохода:`,
      photo: photos[0],
    });
  } catch (err) {
    console.error("Ошибка при обработке запроса:", err.message);
    res.status(500).send("Ошибка при запросе изображений");
  }
};

export default marsPhotoController;
