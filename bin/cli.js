#!/usr/bin/env node

const pixHostDownloaderClient = require('../src/app.js')
const program = require('commander')

class PixHostDownloader {
  constructor() {
    program
      .option(
        '-u, --url <url>',
        'A image URL on PixHost',
      )
      .option(
        '-d, --dir <directory>',
        'A directory to save the image',
        '/tmp',
      )

    program.parse(process.argv)
    this.options = program.opts()
  }

  execute() {
    pixHostDownloaderClient(this.options.url, this.options.dir)
  }
}

const pixHostDownloader = new PixHostDownloader()
pixHostDownloader.execute()
