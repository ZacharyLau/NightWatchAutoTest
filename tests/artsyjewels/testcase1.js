module.exports = {
    '@tags' : ['testcase1'],
    'open homepage and click on headers' : function (browser) {
        browser
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
            .click('#shopify-section-header > div > div.header-container.drawer__header-container > div > header > div > div > div.grid__item.large--one-sixth.one-quarter > div > button')
            .pause(3000)
            .end();
    }
}