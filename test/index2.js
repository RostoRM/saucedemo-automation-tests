// const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const {
//   login,
//   sanityCheckPageLoad,
//   sanityCheckInvalidLogin,
// } = require("./functions");
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { describe, it, beforeEach, afterEach } from "mocha";
import addContext from "mochawesome/addContext.js";
import { login, sanityCheckInvalidLogin, readData, takeScreenshot } from "../functions.js";

describe("Login with invalid credentials", async function () {
  beforeEach(function () {
    console.log("This is before each test - Regression Test Suite");
  });

  afterEach(function () {
    console.log("End of Test - Regression Test Suite");
  });

  it("TC002 - Should not allow login for an invalid credentials", async function () {
    let orgDriver = await new Builder().forBrowser(Browser.FIREFOX).build();
    const tcData = await readData("tc002");
    try {
      console.log("TC002 entry");
      await login(orgDriver, tcData.data.username, tcData.data.password);
      // First Screenshot
      let screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);
      //
      await sanityCheckInvalidLogin(orgDriver, tcData.data.expectedText);

      // First Screenshot
      screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);
      //
      await new Promise((resolve) => setTimeout(resolve, 7000));

      console.log("Our test tc002 was run successfully, Gip Gip Ura Ura");
    } catch (error) {
      console.log("Test encountered an error:", error);
      throw error;
    } finally {
      await orgDriver.quit();
      console.log("TC002 Exit");
    }
  });
});
