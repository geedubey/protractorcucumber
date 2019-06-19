//features/step_definitions/my_step_definitions.js
var chai = require('chai');
var { Given, When, Then } = require("cucumber");
//var { browser, by } = require("protractor");
//var chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
var expect = chai.expect;

 
Given(/^I go to "([^"]*)"$/, async function(site) {
  await browser.get(site);
  await console.log("HI")
});

When(/^I add "([^"]*)" in the task field$/, async function(task) {
  await element(by.model('todoList.todoText')).sendKeys(task);
});

When(/^I click the add button$/, async function() {
  var el = element(by.css('[value="add"]'));
  await el.click();
});

Then(/^I should see my new task in the list$/, async function() {
  var todoList = element.all(by.repeater('todo in todoList.todos'));
  expect(await todoList.count()).to.equal(3);
  expect(await todoList.get(2).getText()).to.equal('Be Awesome');
});
