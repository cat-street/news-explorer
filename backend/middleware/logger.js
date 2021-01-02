const winston = require('winston');
const expressWinston = require('express-winston');

const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({
    filename: 'request.log',
    maxSize: '10k',
    maxFiles: '10d',
  })],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({
    filename: 'error.log',
    maxSize: '10k',
    maxFiles: '10d',
  })],
  format: winston.format.json(),
});

module.exports = { requestLogger, errorLogger };
