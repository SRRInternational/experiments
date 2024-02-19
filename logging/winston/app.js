
const winston = require('winston');
const { combine, timestamp, label, printf, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(),json()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

logger.info(`{ "USER" : "not loggedin" , "SESSION_ID" : "LWtk1LQOpvolHrb_TmoH5kYJwAZ_WPRJ" , "RESPONSE_CODE" : "200" , "METHORD" : "GET" , "STATUS_MESSAGE" : "OK" , "RESPONSE_CODE": "8ms" , "IP" : "::1" , "URL" :"/api/authcheck" }`)
logger.warn("warn")
logger.error("error")
//logger.debug("debug")