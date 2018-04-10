const Joi = require("joi");
const log = require("../../utils/logger");

const exampleSchema = Joi.object().keys({
  id: Joi.number().required(),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required()
});
const exampleValidate = payload => {
  const { error, value } = Joi.validate(payload, exampleSchema);

  if (error) {
    log.warn(`Payload failed validation : ` + JSON.stringify(payload));
    // throw an error here instead, if you want super strict validation
    return payload;
  }
  return value;
};
module.exports = exampleValidate;
