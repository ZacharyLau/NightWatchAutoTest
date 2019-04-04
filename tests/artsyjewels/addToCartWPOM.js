var utilities = require('../../pages/utilities')

module.exports = {
    '@tags': ['cart'],

    before: function(browser){
        utilities(browser).xudiao();
    },

    'add a featured product to cart': function(browser) {
        utilities(browser).featureProductAddToCart();
    },

    after: function(browser){
        utilities(browser).closeBrowser();
    }
};

