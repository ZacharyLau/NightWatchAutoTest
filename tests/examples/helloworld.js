// body > main > div > div:nth-child(1) > a

// test clickclickclick.click

module.exports ={
    '@tags':['helloworldclick'],
    'we are going to click adn click on a button ': function (browser) {
        browser
            .url('https://clickclickclick.click')
            .waitForElementVisible('body', 1000)
            .click('body > main > div > div:nth-child(1) > a')
            .pause(3000)
            .end();
        console.log('hello world click')
    } 
}