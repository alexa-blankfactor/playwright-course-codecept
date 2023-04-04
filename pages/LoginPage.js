const { I } = inject();

module.exports = {
  loginFrom: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitButton: '.btn-primary',
  messageError:'.alert-error',

  submitLogin(username,password){
    I.fillField(this.username,"inavlid_username")
    I.fillField(this.password,"inavlid_password")
    I.click(this.submitButton)
  },

  assertMessageError(){
    I.seeElement(this.messageError)
  },
  assertLoginFormIsVisible(){
    I.seeElement(this.loginFrom)
  }
  
}
