'use strict'

const dm = require('datamosh')
const newMode = require('../mode.js')
const { basename } = require('path')

module.exports = async (readPath, writePath) => {
  console.log(`🕴️ Doing the moshy-thing on ${basename(readPath)}`)

  dm.MODES.newMode = newMode
  await dm(readPath, 'newMode', writePath)
}
