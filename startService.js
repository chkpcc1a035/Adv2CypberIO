const cypress = require('cypress')

cypress.run({
  reporter: 'junit',
  browser: 'chrome',
  config: {
    baseUrl: 'http://localhost:3000',
    video: true,
  },
  env: {
    login_url: '/login',
    products_url: '/products',
  },
})