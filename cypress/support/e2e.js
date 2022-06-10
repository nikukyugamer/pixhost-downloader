// https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
