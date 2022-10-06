module.exports = {
  logPath: process.env.LOG_PATH,
  writeOnFile: process.env.LOG_WRITE_ON_FILE === 'true',
  consoleLogLevel: process.env.LOG_CONSOLE_LEVEL,
  systemLog: {
    name: process.env.LOG_DEBUG_NAME,
    directory: process.env.LOG_DEBUG_DIRECTORY,
    level: process.env.LOG_DEBUG_LEVEL,
    datePattern: process.env.LOG_DATE_PATTERN,
    zippedArchive: process.env.LOG_ZIP_ARCHIVE === 'true',
    maxSize: Number(process.env.LOG_DEBUG_MAX_SIZE) * 1024 ** 2,
    maxFiles: Number(process.env.LOG_DEBUG_MAX_FILES),
    writeOnFile: process.env.LOG_DEBUG_WRITE_ON_FILE === 'true',
  },
  
};