const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { timestamp, printf } = winston.format;

const logConfig = require('../config/logging');
const { logPath, writeOnFile, consoleLogLevel } = logConfig;
const systemLogOptions = logConfig.systemLog;


const processName = process.env.PROCESS_NAME;


const systemLogFileTransport = new DailyRotateFile({
  level: systemLogOptions.level,
  filename: `${logPath}/${systemLogOptions.directory}/${processName}_${systemLogOptions.name}_%DATE%.log`,
  datePattern: systemLogOptions.datePattern, 
  zippedArchive: systemLogOptions.zippedArchive,
  maxSize: systemLogOptions.maxSize, 
  maxFiles: systemLogOptions.maxFiles, 
});


const errorStackFormat = winston.format(info => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message,
    });
  }
  return info;
});


const logFormat = winston.format.combine(
  winston.format.splat(), // interpolation을 굳이 얘로 해야함?
  errorStackFormat(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
  printf(info => `${info.timestamp} ${info.level.toUpperCase().padEnd(5, ' ')} ${info.message}`),
);



const loggerTransports = writeOnFile || systemLogOptions.writeOnFile ? [systemLogFileTransport] : [];

const logger = new winston.createLogger({
  transports: loggerTransports,
  format: logFormat,
  exitOnError: false,
});





module.exports.logger = logger;
