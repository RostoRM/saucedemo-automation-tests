// const assert = require("assert");
// import assert from "node:assert/strict";
// const chai = require("chai").should();

import { By } from "selenium-webdriver";
import { readFileSync, writeFileSync } from "node:fs";
import { should } from "chai";

should();

//Read Data from the json
//match the key for testname
const readData = async (tcName) => {
  const content = readFileSync("./data.json", "utf8");
  const obj = JSON.parse(content);
  for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    if (tcName === element.testName) {
      return element;
    }
  }
};

const sanityCheckShoppingCart = async (driver, expectedText) => {
  let actualText = await driver.findElement(By.className("inventory_item_name")).getText();

  actualText.should.equal(expectedText);
};

const sanityCheckCheckout = async (driver, expectedText) => {
  let actualText = await driver.findElement(By.className("complete-header")).getText();

  actualText.should.equal(expectedText);
};

// adding item to card
const checkoutFunction = async (driver) => {
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
  // add item to card
  await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
  // Enter in shopping card section
  await driver.findElement(By.xpath("//a[@aria-label='Cart, 1 items']")).click();
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
};

// finish checkout
const finishCheckoutFunction = async (driver, firstName, lastName, zip) => {
  // Click checkout
  await driver.findElement(By.id("checkout")).click();
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
  // Filling form
  await driver.findElement(By.id("first-name")).sendKeys(firstName);
  await driver.findElement(By.id("last-name")).sendKeys(lastName);
  await driver.findElement(By.id("postal-code")).sendKeys(zip);
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
  // Continiue to checkout
  await driver.findElement(By.id("continue")).click();
  await new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
  // Click Finish button to checkout
  await driver.findElement(By.id("finish")).click();
};

const login = async (driver, username, password) => {
  const globalData = await readData("global");
  await driver.get(globalData.data.url);
  // Enter valid username and password
  await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username);
  await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
  // Click the Login button
  await driver.findElement(By.xpath("//input[@id='login-button']")).click();
};

const sanityCheckPageLoad = async (driver, expectedText) => {
  // Verify the text - Logged In Successfully
  let actualText = await driver.findElement(By.xpath("//div[@class='app_logo']")).getText();
  // chai method
  actualText.should.equal(expectedText);
  // assert node.js method
  //   assert.equal(actualText, expectedText, "Validation for Login");
};

const sanityCheckInvalidLogin = async (driver, expectedText) => {
  // FOR CHROME EDGE
  // let actualText = await driverP
  //   .findElement(By.xpath("//div[@id='error']"))
  //   .getAttribute("innerText");
  let actualText = await driver.findElement(By.xpath("//h3[@role='alert']")).getText();
  console.log("what does this value contain,it contains STRING", actualText);
  actualText.should.equal(expectedText);
  //   assert.equal(actualText, expectedText, "Validation for Login");
};

const takeScreenshot = async function (driver) {
  let image = await driver.takeScreenshot();
  let fileName = "./mochawesome-report/images/" + Date.now() + ".png";
  writeFileSync(fileName, image, "base64");
  return fileName;
};

// module.exports = {
//   login,
//   sanityCheckPageLoad,
//   sanityCheckInvalidLogin,
// };
export {
  login,
  sanityCheckPageLoad,
  sanityCheckInvalidLogin,
  readData,
  takeScreenshot,
  checkoutFunction,
  finishCheckoutFunction,
  sanityCheckShoppingCart,
  sanityCheckCheckout,
};
