# NightwatchCucumberTemplate
---QUICKSTART---


npm install
npm test



---INTRODUCTION---


This is a stripped down framework in Javascript comprising of Nightwatch.js, Nightwatch API and Cucumber 

Given that you can understand nightwatch syntax and capabilities

And you have previous experience with Cucumber

When you write up some features and step definitions

Then you can run the tests very damn quickly

Further reading can be found below:

http://nightwatchjs.org/

https://nightwatch-api.netlify.com/

https://docs.cucumber.io/cucumber/

https://www.npmjs.com/package/start-server-and-test

---SETUP---


-Run 'npm install' 

-Verify installatation by running 'npm test' and executing the template feature files

---CONFIG---


-Build process is managed in package.json using 'scripts:{}'

-You can modify test:run script using CLI commandds to configure cucumber runtime options

-You can modify webdriver launch process by modifying helpers/startServer.js

-You can modify other cucumber options and test hooks in helpers/setup.config.js

---DEVELOP---


-This is standard cucumber implementation

-Write features in features, write step definitions in step-definitions

---EXECUTE---

-Run 'npm test' to execute

---FUTURE WORK---


-Reporter options (other than cucumber pretty)

-Parallelized browsers

-Adding custom libraries and hooks
