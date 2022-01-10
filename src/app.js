const axios = require('axios');
const cheerio = require('cheerio');
const { execSync } = require('child_process')

module.exports = pixHostDownloaderClient = (url, saveDirectory = '/tmp') => {
  axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)

    const imgUrl = $('#image')[0].attribs.src.trim()
    const imgFilename = $('#show:eq(0)').children('.show-title').children('[data-elem="fixed"]').text().trim()

    console.log(`[LOG] imgUrl: ${imgUrl}`)
    console.log(`[LOG] imgFilename: ${imgFilename}`)

    // TODO: wget に依存しているのはあまりイケてない
    const fixedSaveDirectory = saveDirectory.replace(/\/$/, '')
    execSync(`wget --quiet ${imgUrl} -O ${fixedSaveDirectory}/${imgFilename}`)

    console.log(`[LOG] ${imgFilename} has been downloaded (${fixedSaveDirectory}/${imgFilename}).`)
  })
}
