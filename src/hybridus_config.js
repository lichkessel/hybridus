const Ajv = require("ajv");
const ajv = new Ajv({
  schemas: [
    require('../schemas/package.js'),
    require('../schemas/desktop.js'),
    require('../schemas/platform.js')
  ]
});

const validate = (data, returnErrors = false) => {
  let validate = ajv.getSchema("hybridus/package.json");
  const valid = validate(data);
  return returnErrors ? (valid ? null : validate.errors) : valid;
}

module.exports = validate;
