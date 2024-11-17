import { getMarsPhotosFromNasa } from "../repositories/nasaRepository.js";

const getPhotos = async () => {
  const data = await getMarsPhotosFromNasa();
  const photos = data.photos;
  return photos;
};

export { getPhotos };
