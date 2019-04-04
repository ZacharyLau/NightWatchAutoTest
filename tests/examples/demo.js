module.exports = {
    '@tags': ['demo'], //this is a tag witch you can specify a cartain testcase you current want to run
                     //by typing command such as: node nightwatch -e chrome -a demo 
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]') //.click('#id') click on a selected button by using id
                                    //.click('#id') again if the button flicking
        .pause(1000)
        .assert.containsText('ol#rso li:first-child',
          'Rembrandt - Wikipedia')

        .end();
    }

};
