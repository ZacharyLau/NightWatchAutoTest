//lecture 9 snytax and debugging

module.exports = {
    '@tags': ['feelinglucky'], //this is a tag witch you can specify a cartain testcase you current want to run
                     //by typing command such as: node nightwatch -e chrome -a demo 
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(2)') //copy selector is the key
        .pause(2000)
        .end();
    }

};
