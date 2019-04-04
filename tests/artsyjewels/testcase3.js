//go to login page
//enter Username
//click on forgot password
//complete the step and validate message

module.exports = {
    tags : ['testcase3'],
    'testing login functionality' : function (browser) {
        browser
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body', 1000)
            .click('#AccessibleNav > li.site-nav__item.site-nav__expanded-item.site-nav__item--compressed > a > span > span.icon.icon-customer')
            .setValue('#CustomerEmail','ronchoqa@gmail.com')
            .setValue('##CustomerPassword','')
            .click('#customer_login > p:nth-child(7) > input')
            .pause(3000)
            .end();
    }
}