#!/usr/bin/env node

'use strict'

const pkg = require('./package.json')
const { program } = require('commander')
const commands = require('./commands')

program.name(pkg.name).version(pkg.version)

const actionRunner = async (args, fn) => {
  return fn(...args).catch(handleError)
}

const handleError = error => {
  process.exitCode = 1337
  console.error(error)
}

program
  .command('mosh <readPath> <writePath>')
  .action((...args) => actionRunner(args, commands.mosh))

program.parse(process.argv)
