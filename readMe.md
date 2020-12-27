npm init >> Enter Desired Values >> package.json file created.
npm install --save-dev @wdio/cli >> node-modules & package-lock.json file created
npx wdio config >> Chose Correct Value
Add port: 4444 in wdio.config.js
npm install --save-dev prettier
create .prettierrc file
        {
            "semi": false,
            "singleQuote": true,
            "useTabs": true,
            "tabWidth": 2,
            "arrowParens": "avoid"
        }
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
create babel.config.js
        module.exports = {
                    presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                                    node: 12,
                                            },
                                    },
                                ],
                            ],
                        }

pakcage.json:
    "scripts": {
        "test": "npx wdio run wdio.conf.js"
    }

mochaOpts == https://mochajs.org/api/mocha

For Browser Capabilities:-
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true,
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
        'goog:chromeOptions': {
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
                // args: ['--headless', '--start-maximized']
            }
    }],


"dependencies": {
    "fibers": "^3.1.0",
    "meteor-promise": "^0.8.2",
    "underscore": "^1.8.3",
    "wdio-sync": "^0.7.0",
    "webdriverio": "^4.14.4",
    "xolvio-fiber-utils": "3.0.0"
  }
