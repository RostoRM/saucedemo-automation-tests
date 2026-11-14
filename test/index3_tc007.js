import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { describe, it, beforeEach, afterEach } from "mocha";
import addContext from "mochawesome/addContext.js";
import {
  login,
  sanityCheckShoppingCart,
  sanityCheckCheckout,
  readData,
  takeScreenshot,
  checkoutFunction,
  finishCheckoutFunction,
} from "../functions.js";

describe("Complete product checkout", async function () {
  it("Tc007 - Allow a valid user to login to site and make checkout", async function () {
    let orgDriver = await new Builder().forBrowser(Browser.FIREFOX).build();

    const tcData = await readData("tc007");

    try {
      await login(orgDriver, tcData.data.username, tcData.data.password);
      // First Screenshot
      let screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);
      // Add product and open shopping cart
      await checkoutFunction(orgDriver);
      // Validate product in shopping cart
      await sanityCheckShoppingCart(orgDriver, tcData.data.ShoppingCardText);

      await finishCheckoutFunction(orgDriver, tcData.form.firstName, tcData.form.lastName, tcData.form.zip);
      // Validate successful checkout
      await sanityCheckCheckout(orgDriver, tcData.data.expectedOrderText);
      // second Screenshot
      screenshotPath = await takeScreenshot(orgDriver);
      addContext(this, "../" + screenshotPath);
      await new Promise(function (resolve) {
        setTimeout(resolve, 7000);
      });

      console.log("Our test tc007 was run successfully, Gip Gip Ura Ura");
    } catch (error) {
      console.log("Test encountered an error:", error);
      throw error;
    } finally {
      await orgDriver.quit();
      console.log("TC001 Exit");
    }
  });
});
