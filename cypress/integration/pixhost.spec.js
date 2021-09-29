describe('PiXhost', () => {
  context('URLへのアクセス', () => {
    it('画像が埋め込まれているページへページめくりを経て遷移できること', () => {
      cy.visit('https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg')

      cy.get('#image').should('be.visible')

      cy.get('#image')
        .should('have.attr', 'src')
        .should('matches', /https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-006\.jpg/)
      cy.get('#image')
        .invoke('attr', 'src')
        .then((target) => {
          const targetUrl = target
          cy.writeFile('tmp/image_direct_link_urls.txt', `${targetUrl}\n`, { flag: 'a' })
        })

      // ページめくり（ループさせたりCommand化したりしてもいい）
      cy.get('body').type('{rightarrow}')
      cy.get('#image')
        .should('have.attr', 'src')
        .should('matches', /https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-007\.jpg/)
      cy.get('#image')
        .invoke('attr', 'src')
        .then((target) => {
          const targetUrl = target
          cy.writeFile('tmp/image_direct_link_urls.txt', `${targetUrl}\n`, { flag: 'a' })
        })

      cy.get('body').type('{rightarrow}')
      cy.get('#image')
        .should('have.attr', 'src')
        .should('matches', /https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-008\.jpg/)
      cy.get('#image')
        .invoke('attr', 'src')
        .then((target) => {
          const targetUrl = target
          cy.writeFile('tmp/image_direct_link_urls.txt', `${targetUrl}\n`, { flag: 'a' })
        })

      cy.get('body').type('{rightarrow}')
      cy.get('#image')
        .should('have.attr', 'src')
        .should('matches', /https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-009\.jpg/)
      cy.get('#image')
        .invoke('attr', 'src')
        .then((target) => {
          const targetUrl = target
          cy.writeFile('tmp/image_direct_link_urls.txt', `${targetUrl}\n`, { flag: 'a' })
        })

      cy.get('body').type('{rightarrow}')
      cy.get('#image')
        .should('have.attr', 'src')
        .should('matches', /https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-010\.jpg/)
      cy.get('#image')
        .invoke('attr', 'src')
        .then((target) => {
          const targetUrl = target
          cy.writeFile('tmp/image_direct_link_urls.txt', `${targetUrl}\n`, { flag: 'a' })
        })
    })

    it('特定のページの画像のダイレクトリンクのURLが取得できること', () => {
      cy.request('https://pixhost.to/show/228/126849268_picturepub-iskra-lawrence-006.jpg').as('urlRequest')

      cy.get('@urlRequest').then((response) => {
        cy.task('directImageUrlByCheerio', response).then((directImageUrl) => {
          expect(directImageUrl).to
          .match(/https:\/\/img[0-9]+\.pixhost\.to\/images\/228\/[0-9]+_picturepub-iskra-lawrence-006\.jpg/)
        })

        // 念のため元ファイルのファイル名が取得できることも確認する
        cy.task('sourceFilename', response).then((filename) => {
          expect(filename).to.eq('picturepub-iskra-lawrence-006.jpg')
        })
      })
    })
  })
})
