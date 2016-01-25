// Module
var wkhtmltopdf = require('../lib/wkhtmltopdf')

// Add some options
var options = [
  '--grayscale',
  '--quiet'
]

// Convert the Google.com HTML page to PDF
var input = 'https://google.com'

// An output name
var output = 'google.com.pdf'

// Exec WKHTMLTOPDF
var pdf = wkhtmltopdf(options, input, output)

// Listener stdout data event
pdf.stdout.on('data', function (data) {
  console.log('Got data from child: ' + data)
})

// Listener stderr error event
pdf.stderr.on('data', function (err) {
  console.log('There was an error: ' + err)
})

// Listener error event
pdf.on('error', function (err) {
  console.log('Error:' + err)
})

// Listener close event
pdf.on('close', function (code) {
  console.log('WKHTMLTOPDF closed with code: ' + code)
})

// Listener exit event
pdf.on('exit', function (code) {
  console.log('WKHTMLTOPDF exited with code: ' + code)
})
