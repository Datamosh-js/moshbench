'use strict'

const dm = require('datamosh')
const newMode = require('../mode.js')

module.exports = async (readPath, writePath) => {
  console.log('Moshing!!!')

  dm.MODES.newMode = newMode
  await dm(readPath, 'newMode', writePath)
}
