var utilities = require('../../pages/utilities')

module.exports = {
    '@tags': ['login'],

    before: function(browser){
        utilities(browser).openBrowser();
    },

    'go to the login page': function (browser) {
        utilities(browser).loginButton();
    },

    'login as admin' : function (browser) {
        utilities(browser).adminLogin();
    },

    after: function(browser){
        utilities(browser).closeBrowser();
    }
};