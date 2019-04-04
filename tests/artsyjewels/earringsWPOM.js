var utilities = require('../../pages/utilities')

module.exports = {
    '@tags': ['earrings'],

    before: function(browser){
        utilities(browser).openBrowser();
    },

    'shop for Diamond Stud': function(browser) {
        utilities(browser).clickOnEarringsOnMain();
    },

    after: function(browser){
        utilities(browser).closeBrowser();
    }
};