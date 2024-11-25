import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    retries: {
      runMode: 0,
      openMode: 0
    },
    video: true,
    chromeWebSecurity: false,
    requestTimeout: 10000,
    setupNodeEvents() {}
  }
});
