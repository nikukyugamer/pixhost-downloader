describe('サンプルテスト', () => {
  context('Yahoo!', () => {
    it('トップページにアクセスできること', () => {
      cy.visit('https://www.yahoo.co.jp/')

      cy.url().should('eq', 'https://www.yahoo.co.jp/')
      cy.location('origin').should('eq', 'https://www.yahoo.co.jp')
      cy.location('protocol').should('eq', 'https:')
    })
  })
})
