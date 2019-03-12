import { client } from 'nightwatch-api';
import { Given, Then } from 'cucumber';

Given(/^I open Google`s search page$/, async () => {
  await client.url('http://google.com')
      .pause(2000);

});

Given(/^I open DuckDuckGo search page$/, async () => {
  await client.url('https://duckduckgo.com/');
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.CheckTitle(text);
});

Then(/^the Google search form exists$/, async () => {
  await client.assert.visible('input[name="q"]')
      .pause(2000);
});

Then(/^the DuckDuckGo search form exists$/, async () => {
  await client.assert.visible('input[name="q"]');
});
