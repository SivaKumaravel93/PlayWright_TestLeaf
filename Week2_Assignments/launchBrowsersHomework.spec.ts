import {chromium,firefox,test} from "@playwright/test";

test("Load the Red Bus home page and print the page title and current URL",
async() => {
const browser = await chromium.launch({headless:false,channel:"msedge"});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.redbus.in");
await page.waitForTimeout(5000);
console.log(await page.title());
console.log(await page.url());
await browser.close();
})


test("Load the Flipkart home page and print the page title and current URL",
async() => {
const browser = await firefox.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.flipkart.com");
await page.waitForTimeout(5000);
console.log(await page.title());
console.log(await page.url());
await browser.close();
})