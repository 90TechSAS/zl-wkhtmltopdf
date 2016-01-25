'use strict'

var expect = require('chai').expect
var wkhtmltopdf = require('../lib/wkhtmltopdf')

describe('WKHTMLTOPDF test', function () {
  it('Should create PDF file from HTML page (URL)', function () {
    var options = [
      '--quiet'
    ]

    // Convert the Google.com HTML page to PDF
    var input = 'https://google.com'

    // An output name
    var output = 'google.com.pdf'

    // Exec WKHTMLTOPDF
    var pdf = wkhtmltopdf(options, input, output)

    // Listener close event
    pdf.on('close', function (code) {
      expect(code).to.equal('0')
    })
  })
  it('Should stream PDF file from HTML page (URL)', function () {
    var options = [
      '--grayscale',
      '--quiet'
    ]

    // Convert the Google.com HTML page to PDF
    var input = 'https://google.com'

    // Exec WKHTMLTOPDF
    var pdf = wkhtmltopdf(options, input)

    // Listener close event
    pdf.on('close', function (code) {
      expect(code).to.equal('0')
    })
  })
})
