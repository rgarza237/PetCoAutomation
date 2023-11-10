import { $ } from '@wdio/globals'

class MainPage {

    public get navBar() {
        return $('.js-navigation--middle');
    }
    get searchInput(){
        return $('#js-site-search-input');
    }
    get logIn(){
        return $$('.txtCuentaHr')[2]
    }
    get iniciarSesion(){
        return $('p=Iniciar Sesión')
    }
    get mamiferos(){
        return $$('.caja-mascota-bloque2-homee00')[2]
    }
    get perros(){
        return $$('.caja-mascota-bloque2-homee00')[0]
    }
    get goToCart(){
        return $$('.mini-cart-icon')[1]
    }

}

export default new MainPage();
