'use strict';
const config = require('./protractor.shared.conf').config;

config.multiCapabilities = [
    {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        },
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties:{
            browser: {
                name: 'chrome',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'osx',
                version: '10.12.6'
            }
        }
    },
    {
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 5,
        deviceProperties:{
            browser: {
                name: 'firefox',
                version: 'latest'
            },
            device: 'local development machine',
            platform: {
                name: 'osx',
                version: '10.12.6'
            }
        }
    }
];

exports.config = config;
