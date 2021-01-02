const isEmail = require('validator/lib/isEmail');
const isUrl = require('validator/lib/isURL');

const urlValidator = (v) => isUrl(v, { protocols: ['http', 'https'], require_protocol: true });

const emailValidator = (v) => isEmail(v);

module.exports = { urlValidator, emailValidator };
