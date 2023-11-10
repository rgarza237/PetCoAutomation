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
/*
    public async login(role: string) {
        let email: string;
        let password: string;
    
        switch (role) {
          case 'user':
            email = browser.getEmail('user', 'prod');
            password = browser.getPassword('user', 'prod');
            break;
          case 'admin':
            email = browser.getEmail('admin', 'prod');
            password = browser.getPassword('admin', 'prod');
            break;
          default:
            
            // Just in case there is an error......
            throw new Error(`Role ${role} not recognized`);
        }
    
        await this.inputUsername.setValue(email);
        await this.inputPassword.setValue(password);
      }*/
}

export default new LoginPage();
