// ./lib/index.js

/**
 * Displays a string in the console
 * 
 * @param {string_to_say} String string to show in the console
 */
const chalk = require('chalk')

const printRainbow = (color, symbol, number) => {
  let str = symbol
  for (let i = 0; i < number; i++) {
    str += symbol
  }
  return `${chalk[color](str)}`
}
const catMaster = `\n\n${printRainbow('red', '☶', 30)}█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
${printRainbow('red', '☶', 30)}█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒▒▒▒░█
${printRainbow('yellow', '☶', 30)}█░▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄
${printRainbow('yellow', '☶', 24)}▄▀▀▄▄▄█░▒▒▒▒▒▒▓▒▒▒▒▒▒▒█░░▀▄▄▄▄▄▀░░█
${printRainbow('green', '☶', 24)}█     █░▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█
${printRainbow('green', '☳', 24)}▀▀▄▄▄▄█░▒▒▒▒▓▒▒▒▓▒▒▒▒█░░░█▒░░░░█▒░░█
${printRainbow('cyan', '☳', 30)}█░▒▓▒▒▒▒▓▒▒▒▒▒▒█░░░░░░░▀░░░░░█
${printRainbow('blue', '☳', 28)}▄▄█░▒▒▒▓▒▒▒▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█
${printRainbow('magenta', '☳', 27)}█   █▄▄▄▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█
${printRainbow('magenta', '☳', 27)}█▄▄█  █▄▄█         █▄▄█  █▄▄█\n\n`

var say = function(string_to_say) {
  console.log(`\x1b[1m THIS THIS \x1b[0m`)
  console.log('\x1b[1m%s\x1b[0m', `Request... 1m`)
  console.log('\x1b[2m%s\x1b[0m', `Request... 2m`)
  console.log('\x1b[4m%s\x1b[0m', `Request... 4m`)
  console.log('\x1b[5m%s\x1b[0m', `Request... 5m`)
  console.log('\x1b[7m%s\x1b[0m', `Request... 7m`)
  console.log('\x1b[8m%s\x1b[0m', `Request... 8m`)
  console.log('\x1b[30m%s\x1b[0m', `Request... 30m`)
  console.log('\x1b[31m%s\x1b[0m', `Request... 31m`)
  console.log('\x1b[32m%s\x1b[0m', `Request... 32m`)
  console.log('\x1b[33m%s\x1b[0m', `Request... 33m`)
  console.log('\x1b[34m%s\x1b[0m', `Request... 34m`)
  console.log('\x1b[35m%s\x1b[0m', `Request... 35m`)
  console.log('\x1b[36m%s\x1b[0m', `Request... 36m`)
  console.log('\x1b[37m%s\x1b[0m', `Request... 37m`)
  console.log('\x1b[40m%s\x1b[0m', `Request... 40m`)
  
  console.log('\x1b[41m%s\x1b[0m', `Request... 41m`)
  console.log('\x1b[43m%s\x1b[0m', `Request... 43m`)
  console.log('\x1b[42m%s\x1b[0m', `Request... 42m`)
  console.log('\x1b[46m%s\x1b[0m', `Request... 46m`)
  console.log('\x1b[44m%s\x1b[0m', `Request... 44m`)
  console.log('\x1b[45m%s\x1b[0m', `Request... 45m`)
  console.log('\x1b[47m%s\x1b[0m', `Request... 47m`)
  return console.log(string_to_say);
};

var logError = function() {
  return console.log(`                                  
           ▄▄                   ▄▄  
            ▀█                   ▀█ 
            ▄█                   ▄█ 
    █████████▀           █████████▀ 
     ▄██████▄             ▄██████▄  
   ▄██▀    ▀██▄         ▄██▀    ▀██▄
   ██        ██         ██        ██
   ██   ██   ██         ██   ██   ██
   ██        ██         ██        ██
    ██▄    ▄██           ██▄    ▄██ 
     ▀██████▀             ▀██████▀  
                                    
                                    
                                    
             █████████████          
                                    
                                    
  `);
  
}

var nyanCat = function() {
  return console.log(catMaster)
}

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.logError = logError;
exports.say = say;
exports.nyanCat = nyanCat;