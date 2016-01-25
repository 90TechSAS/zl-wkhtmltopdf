zl-wkhtmltopdf
=========




changelog
Tests
CI



[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Convert HTML to PDF using [WKHTMLTOPDF](http://wkhtmltopdf.org/) command line tools. WKHTMLTOPDF is an open source (LGPLv3) command line tools to render HTML into PDF using the Qt WebKit rendering engine.

## Installation

Install:

[WKHTMLTOPDF](http://wkhtmltopdf.org/) command line tools.

`npm install zl-wkhtmltopdf`

Add require:

`var wkhtmltopdf = require('wkhtmltopdf')`

_Note: Be sure `wkhtmltopdf` is in your PATH when you're done installing._

## Usage

- Convert HTML to PDF and save in your file system:

```js
// Module
var wkhtmltopdf = require('../lib/wkhtmltopdf')

// Add some options
var options = [
  '--grayscale',
  '--quiet'
]

// Convert the Google.com HTML page to PDF (it can be HTML or an HTML file)
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

```


- Generate HTML to PDF and stream it:

```js
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

  // Pipe stdout directly to res (pipe where you want)
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

```

- WKHTMLTOPDF official documentation, see it for options:
http://wkhtmltopdf.org/usage/wkhtmltopdf.txt

## Tests

`npm test`

## Authors

- [90Tech](https://90tech.fr)
- [Kevin RUBY](https://github.com/RK-)

## License

MIT
