describe('サンプルテスト', () => {
  context('Yahoo!', () => {
    it('トップページにアクセスできること', () => {
      cy.visit('https://www.yahoo.co.jp/')

      cy.location().should('eq', 'https://www.yahoo.co.jp/')
      cy.location('origin').should('eq', 'https://www.yahoo.co.jp')
      cy.location('protocol').should('eq', 'https:')
      cy.location('port').should('eq', 443)
    })
  })
})
