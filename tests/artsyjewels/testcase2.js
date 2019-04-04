//click on search box
//search for a specific term
//assert a valid page result based on the type-in

module.exports = {
    tags : ['testcase2'],
    'testing search box functionality' : function (browser) {
        browser
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body', 1000)
            .click('#AccessibleNav > li:nth-child(12) > a > span > span.icon.icon-search')
            .setValue('#SearchModal > form > input',['silver bracelets', '\n'])
            .pause(2000)
        browser.saveScreenshot('./screenshots/testcase2.jpg')
            .end();
    }
}