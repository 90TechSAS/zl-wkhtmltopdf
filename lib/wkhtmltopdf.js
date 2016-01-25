'use strict'

// Native NodeJS module
var spawn = require('child_process').spawn

/**
 * Run WKHTMLTOPDF command line tools.
 *
 * @param {Array} options An options array (see WKHTMLTOPDF options : http://wkhtmltopdf.org/usage/wkhtmltopdf.txt), can be null or empty,
 * @param {String} input HTML file, HTML String or URL,
 * @param {String} output (optional) Give a filename to render the file in your FS, else the file is stream (stdout).
 *
 * @return WKHTMLTOPDF run process (stdin, stedrr, stdout).
 */
module.exports = function (options, input, output) {
  // child_process.spawn command options
  var commandOptions = []

  // WKHTMLTOPDF GLOBAL OPTION check
  if (options && options.length > 0) commandOptions = commandOptions.concat(options)

  // Add input command
  commandOptions.push(input)

  // If empty, we need to get stream with - output options
  if (!output) commandOptions.push('-')
  else commandOptions.push(output)

  // return WKHTMLTOPDF run process
  return spawn('wkhtmltopdf', commandOptions)
}
