import { setDefaultTimeout, AfterAll, BeforeAll } from 'cucumber';
import { createSession, closeSession } from 'nightwatch-api';
import { stopWebDriver } from 'nightwatch-api/lib/client';

setDefaultTimeout(60000);

BeforeAll(async () => {
  await createSession({env: process.env.env});
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});

