// Module
var http = require('http')
var wkhtmltopdf = require('../lib/wkhtmltopdf')

// Add some options
var options = [
  '--grayscale',
  '--quiet'
]

// Convert the Google.com HTML page to PDF
var input = 'https://google.com'

var convertHtmlToPdf = function (req, res) {
  // Exec WKHTMLTOPDF
  var pdf = wkhtmltopdf(options, input)

  // Pipe stdout directly to res
  pdf.stdout.pipe(res)

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
}

// Create server
var server = http.createServer(convertHtmlToPdf)

// Server listening on port 3000
server.listen(3000, function () {
  console.log('Server listening on port: 3000')
})
