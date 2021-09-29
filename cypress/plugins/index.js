const cheerio = require('cheerio');

module.exports = function (on, config) {
  // https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-require-or-import-node-modules-in-Cypress
  on('task', {
    directImageUrlByCheerio(response) {
      const $ = cheerio.load(response.body)

      return $('#image')[0].attribs.src.trim()
    },
    sourceFilename(response) {
      const $ = cheerio.load(response.body)

      return $('#show:eq(0)').children('.show-title').children('[data-elem="fixed"]').text().trim()
    }
  })
}
