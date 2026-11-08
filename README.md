# Selenium JavaScript Automation Testing

## About the Project

This is a practice automation testing project developed using JavaScript and Selenium WebDriver.

The project focuses on automating UI test scenarios on the [SauceDemo](https://www.saucedemo.com/) website. It uses Mocha as the testing framework, Chai for assertions, and Mochawesome for generating test reports.

## Technologies & Tools

- **JavaScript (ES Modules)** – Programming language
- **Selenium WebDriver** – Browser automation
- **Mocha** – Test framework
- **Chai** – Assertion library
- **Mochawesome** – HTML test reporting
- **Node.js & npm** – Runtime and package management
- **Git & GitHub** – Version control

## Project Structure

```text
saucedemo-automation-tests/
│
├── test/
│   ├── index.js
│   ├── index2.js
│   └── index3_tc007.js
│
├── examples/
│   ├── mocha_tests.js
│   └── mocha_tests2.js
│
├── mochawesome-report/
│   ├── assets/
│   ├── images/
│   ├── mochawesome.html
│   └── mochawesome.json
│
├── functions.js
├── data.json
├── package.json
├── package-lock.json
└── .gitignore
```

## Automated Test Scenarios

| Test Case | Description                    | Expected Result                         |
| --------- | ------------------------------ | --------------------------------------- |
| TC001     | Login with valid credentials   | User successfully logs in               |
| TC002     | Login with invalid credentials | Appropriate error message is displayed  |
| TC007     | Complete product checkout      | Order confirmation message is displayed |

### TC007 – Checkout Process

The checkout test performs the following steps:

1. Log in using valid credentials.
2. Add Sauce Labs Backpack to the shopping cart.
3. Open the shopping cart.
4. Verify that the correct product is displayed.
5. Proceed to checkout.
6. Enter customer information.
7. Complete the checkout process.
8. Verify the order confirmation message.

## Project Features

- Reusable functions for login and checkout operations.
- External test data management using JSON.
- Positive and negative login testing.
- UI validation using Chai assertions.
- Browser automation using Selenium WebDriver.
- Screenshot capture during test execution.
- HTML test reports generated with Mochawesome.

## Installation & Setup

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Mozilla Firefox browser

### 1. Clone the repository

```bash
git clone https://github.com/RostoRM/saucedemo-automation-tests.git
```

### 2. Navigate to the project folder

```bash
cd saucedemo-automation-tests
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run automated tests

```bash
npx mocha --no-timeouts
```

To run a specific test file:

```bash
npx mocha --no-timeouts test/index3_tc007.js
```

## Test Reports

Mochawesome is used to generate HTML test reports containing test execution results and screenshots.

After executing the tests, the report can be found in:

```text
mochawesome-report/mochawesome.html
```

Open the HTML file in a browser to view the report.

## Learning Objectives

This project was created to practice and improve knowledge of:

- JavaScript fundamentals and ES Modules.
- Selenium WebDriver automation.
- Writing and organizing automated test cases.
- Using Mocha and Chai.
- Working with JSON test data.
- Implementing reusable automation functions.
- Capturing screenshots and generating test reports.
- Using Git and GitHub for version control.

## Project Status

This is a learning project that will be continuously improved as I develop my software testing and test automation skills.

---

**Author:** Rostom Matchavariani
