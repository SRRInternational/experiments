
const winston = require('winston');
const { combine, timestamp, label, printf, json } = winston.format;

const winlogger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(),json()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),new winston.transports.Console()
  ],
});

winlogger.log("info","info")
//logger.debug("debug")