var utilities = require('../../pages/utilities')

module.exports = {
    '@tags': ['shopnow'],

    before: function(browser){
        utilities(browser).openBrowser();
    },

    'click on black Friday shop now button on the main page': function(browser) {
        utilities(browser).blackFriButton();
    },

    after: function(browser){
        utilities(browser).closeBrowser();
    }
};