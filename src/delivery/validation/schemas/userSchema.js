import Joi from "joi";

const userSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.base": `"id" должно быть строкой`,
    "string.empty": `"id" не может быть пустым`,
    "any.required": `"id" обязательно`,
  }),
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": `"name" должно быть строкой`,
    "string.empty": `"name" не может быть пустым`,
    "string.min": `"name" должно содержать минимум 3 символа`,
    "string.max": `"name" должно содержать максимум 30 символов`,
    "any.required": `"name" обязательно`,
  }),
});

export default userSchema;
