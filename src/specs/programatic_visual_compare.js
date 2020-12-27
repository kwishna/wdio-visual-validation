const { remote } = require("webdriverio");
const path = require('path');
  
const WdioImageComparisonService = require('wdio-image-comparison-service').default;
  
let wdioImageComparisonService = new WdioImageComparisonService({});
  
async function main() {
    const browser = await remote({
      logLevel: "silent",
      capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--no-sandbox', '--headless'],
            }
      }
    });

    const methodOptions = {
      baselineFolder: 'UdemyWDIO/baseline/',
      diffFolder: 'UdemyWDIO/diffFolder/',
      actualFolder: 'UdemyWDIO/actualFolder/',
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: 'UdemyWDIO/img/',
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      disableCSSAnimation: true,
      hideScrollBars: true,
};
  
    global.browser = browser;

    wdioImageComparisonService.defaultOptions.autoSaveBaseline = true;
    browser.defaultOptions = wdioImageComparisonService.defaultOptions;
    browser.folders = wdioImageComparisonService.folders;
  
    wdioImageComparisonService.before(browser.capabilities)
  
    await browser.url('https://google.com/');
    await browser.checkFullPageScreen('full-screen', methodOptions);
    await browser.checkScreen('visible screen validation', {
        resizeDimensions: { 
                    top: 10, 
                    right: 5, 
                    bottom: 30, 
                    left: 10,
                },
                baselineFolder: 'UdemyWDIO/baseline/',
                diffFolder: 'UdemyWDIO/diffFolder/',
                actualFolder: 'UdemyWDIO/actualFolder/',
                formatImageName: '{tag}-{logName}-{width}x{height}',
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
                disableCSSAnimation: true,
                hideScrollBars: true
              });
    
    await browser.checkTabbablePage('check-tab', { /* some options, use the same options as for checkFullPageScreen */ });
    await browser.deleteSession();
  }
  
  main().catch(async e => {
    console.error(e)
  });