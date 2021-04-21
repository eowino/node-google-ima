import puppeteer from 'puppeteer';

import { PAGE } from './PAGE';

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    // Load IMA SDK onto page
    await page.setContent(PAGE);

    // Test: Get something from the IMA SDK
    const result = await page.evaluate(async () => {
        // this will be executed within the page, that was loaded before
        return JSON.stringify((window as any).google.ima.dai.api.OmidAccessMode, null, 2)
    });

    console.log('result:', result)

    // we're done; close the browser
    await browser.close();
})();
