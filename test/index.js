// const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const {
//   login,
//   sanityCheckPageLoad,
//   sanityCheckInvalidLogin,
// } = require("./functions");
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { describe, it, beforeEach, afterEach } from "mocha";
import addContext from "mochawesome/addContext.js";
import { login, sanityCheckPageLoad, readData, takeScreenshot } from "../functions.js";

describe("Successful login", async function () {
  beforeEach(function () {
    console.log("This is before each test - Functional Test Suite");
    addContext(this, "Where should i see it");
  });

  afterEach(function () {
    console.log("End of Test - Functional Test Suite");
    // addContext(this, "Where should i see it after lets see where it goes");
  });

  it("Tc001 - Allow a valid user to login to site", async function () {
    let orgDriver = await new Builder().forBrowser(Browser.FIREFOX).build();

    const tcData = await readData("tc001");

    try {
      console.log("TC001 entry");

      await login(orgDriver, tcData.data.username, tcData.data.password);
      // First Screenshot
      let screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);

      await sanityCheckPageLoad(orgDriver, tcData.data.expectedText);

      // addContext(this, "This is where our evidence will go");
      //Second Screenshot
      screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);

      await new Promise(function (resolve) {
        setTimeout(resolve, 7000);
      });

      console.log("Our test tc001 was run successfully, Gip Gip Ura Ura");
    } catch (error) {
      console.log("Test encountered an error:", error);
      throw error;
    } finally {
      await orgDriver.quit();
      console.log("TC001 Exit");
    }
  });
});
