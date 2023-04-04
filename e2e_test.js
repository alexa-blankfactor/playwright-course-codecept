const LoginPage = require("./pages/LoginPage")

Feature("Zero Bank Application -E2E Test")

Before(({I})=>{
    console.log('BEFORE HOOK')
    I.amOnPage("http://zero.webappsecurity.com/")
})

After(({I})=>{
    console.log('AFTER HOOK')
})

Scenario("Login Test - Negative",({I,LoginPage})=>{
    I.click('#signin_button')
    LoginPage.assertLoginFormIsVisible()
    LoginPage.submitLogin('invalid_username', 'invalid_password')
    LoginPage.assertMessageError()
})