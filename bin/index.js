#!/usr/bin/env node

const argv = require('yargs').argv
const NoCorsProxy = require('../lib')

const port = argv.p || argv.port
const host = argv.h || argv.host
const target = argv.t || argv.target

const proxy = new NoCorsProxy(port, host, target)
proxy.start()

console.info(`Proxying http://${proxy.config.host}:${proxy.config.port} to\
 => ${proxy.config.target}`)
