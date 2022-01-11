const axios = require('axios');
const cheerio = require('cheerio');
const fs = require("fs");

module.exports = pixHostDownloaderClient = (url, saveDirectory = '/tmp') => {
  const fixedSaveDirectory = saveDirectory.replace(/\/$/, '')

  axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)

    const imgUrl = $('#image')[0].attribs.src.trim()
    const imgFilename = $('#show:eq(0)').children('.show-title').children('[data-elem="fixed"]').text().trim()

    console.log(`[LOG] imgUrl: ${imgUrl}`)
    console.log(`[LOG] imgFilename: ${imgFilename}`)
    console.log('[LOG] fixedSaveDirectory:', fixedSaveDirectory)

    const https = require('https');
    const file = fs.createWriteStream(`${fixedSaveDirectory}/${imgFilename}`);
    https.get(imgUrl, function(response) {
      response.pipe(file);
    });

    console.log(`[LOG] ${imgFilename} has been downloaded (${fixedSaveDirectory}/${imgFilename}).`)
  })
}
