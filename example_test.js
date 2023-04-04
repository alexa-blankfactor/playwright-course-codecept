Feature('My test suite');

Scenario('Should load example.com website',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see("Example")
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
})

Scenario('Should load example.com website - 2',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see("Example")
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
})

Scenario('Should load example.com website - 3',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see("Example")
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
})