module.exports = function (browser) {
    this.openBrowser = function(){
        browser 
            .windowMaximize()
            .url('http://artsyjewels.com')
            .waitForElementVisible('body', 1000);
        return browser
    };

    this.loginButton = function (){
        browser
        .click('#AccessibleNav > li.site-nav__item.site-nav__expanded-item.site-nav__item--compressed > a > span > span.icon.icon-customer')
    };

    this.adminLogin = function (){
        browser
        .setValue('#CustomerEmail','ronchoqa@gmail.com')
        .setValue('#CustomerPassword','')
        .click('#customer_login > p:nth-child(7) > input')
    };

    this.xudiao = function () {
        browser
            .windowMaximize()
            .url('https://www.artsyjewels.com/collections/top-rings/products/antique-design-engagement-diamond-ring-crafted-ring-in-solid-gold-1-carat-halo')
            .waitForElementVisible('body', 1000);
    return browser
    };

    this.featureProductAddToCart = function () {
        browser
            .click('#AddToCart--product-template > span')
    };

    this.blackFriButton = function () {
        browser 
            .click('#Hero > div > div > div > div > div > div > a')
            .waitForElementVisible('body', 1000);
            browser.assert.containsText('#CollectionSection > header > h1', '2018 Black Friday Jewelry Sale');
    };

    this.closeBrowser = function (){
        browser
            .pause(3000)
            .end();
    };

    this.clickOnEarringsOnMain = function () {
        browser
            .click('#shopify-section-header > div > div.header-container.drawer__header-container > div > header > div > div > div.grid__item.large--one-sixth.one-quarter > div > button')
            .pause(1000)
            .click('#NavDrawer > div > ul > li:nth-child(3) > div > div > button > span.icon-fallback-text.mobile-nav__toggle-open > span.icon.icon-plus')
            .pause(100)
            .click('#Linklist-3 > li:nth-child(1) > a')
            .waitForElementVisible('body', 1000);
            browser.assert.containsText('#CollectionSection > header > h1', 'Diamond Stud');
    };

    this.diamondStud = function () {
        browser 
            .click()
    };


    return this;
}