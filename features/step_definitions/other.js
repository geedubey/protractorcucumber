//features/step_definitions/my_step_definitions.js
var chai = require('chai');
var { Given, When, Then } = require("cucumber");
//var { browser, by } = require("protractor");
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
var expect = chai.expect;



When(/^I add negative "([^"]*)" in the task field$/, async function(task) {
  await element(by.model('todoList.todoText')).sendKeys(task);
});

