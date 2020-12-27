"use strict";

describe('First Test', () => {
  it('First Example', async () => {
    await driver.url('https://www.duckduckgo.com/');
    await browser.maximizeWindow();
    const e = await $$('#logo_homepage_link');
    console.info('#############');
    const x = await e[0].isDisplayed();
    console.info(x);
    await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
  });
});