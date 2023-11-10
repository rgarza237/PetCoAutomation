import { $ } from '@wdio/globals'


class LoginPage {

    public get inputUsername () {
        return $('#j_username');
    }

    public get inputPassword () {
        return $('#j_password');
    }

    public get btnSubmit() {
      return $('.btn.btn-primary.btn-block');
  }  

    public get forgottenPassword(){
        return $('.js-password-forgotten')
    }

    public get loginTitle(){
      return $('.login-page__headline')
    }

    public async login(){
      await this.inputUsername.setValue("mitojai182@hotmail.com");
      await this.inputPassword.setValue("Petco1234");
      await this.btnSubmit.click()
    }

}

export default new LoginPage();
