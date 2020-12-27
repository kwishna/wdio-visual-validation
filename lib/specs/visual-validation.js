"use strict";

describe('Example', () => {
  beforeEach(() => {
    browser.url('https://www.google.co.in/');
  });
  it('should compare successful with a baseline', () => {
    // Check a visible screen
    expect(browser.checkScreen('visible screen validation', {
      resizeDimensions: {
        top: 10,
        right: 5,
        bottom: 30,
        left: 10
      }
    })).toEqual(0); // Blockout Some Part

    expect(browser.checkScreen('blockOut', {
      blockOut: [{
        height: 10,
        width: 5,
        x: 40,
        y: 65
      }, {
        height: 250,
        width: 500,
        x: 0,
        y: 35
      }],
      ignoreAlpha: true,
      blockOutStatusBar: true
    })).toEqual(0); // Check an search box element

    expect(browser.checkElement($("*[name='q']"), 'search_button', {
      /* some options */
    })).toEqual(0); // Check a full page screenshot

    expect(browser.checkFullPageScreen('full homepage', {
      /* some options */
    })).toEqual(0); // Check a full page screenshot with all tab executions

    expect(browser.checkTabbablePage('check-tab', {
      /* some options, use the same options as for checkFullPageScreen */
    })).toEqual(0);
  });
});