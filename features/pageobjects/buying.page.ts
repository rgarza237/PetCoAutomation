import { $ } from '@wdio/globals'

class BuyingPage {

    get productCard(){
        return $$('.name')[2];
    }
    get addToCart(){
        return $('#addToCartButton')
    }
    get goToMainPage(){
        return $('.banner__component.banner')
    }
    get comprarButton(){
        return $('.btn.btn-primary.btn-block.btn--continue-checkout.js-continue-checkout-button')
    }
    get verDirecciones(){
        return $('//button[contains(text(), "Ver direcciones")]')
    }
    get directionSelect(){
        return $('//input[@id="9878715596823"]')
    }
    get confirmarButton(){
        return $('//button[contains(text(), "Confirmar")]')
    }
    get formasDePago(){
        return $('//div[@class="panel-title" and contains(text(), "Formas de Pago")]')
    }
    get pagoConTarjeta(){
        return $('input[name="spPayments"][type="radio"][value="CR"]')
    }
    get nuevaTarjeta(){
        return $('button[type="button"][class*="btn-primary"][ng-click*="showCardForm"]')
    }
    get cardName(){
        return $('input[pattern="[a-zñA-ZÑ\' ]{2,40}"]')
    }
    get cardNumber(){
        return $('input[pattern="[0-9]{15,16}"]')
    }
    get saveCardInfoButton(){
        return $('//*[@id="sp-card-form"]/div[3]/button')
    }
    get orderConfirmation(){
        return $('//*[@id="orderConfirmationPPP"]')
    }

    public async addProduct(){
        await this.productCard.waitForClickable()
        await this.productCard.click()
        await browser.pause(500)
        await this.addToCart.waitForClickable()
        await this.addToCart.click()
        await browser.pause(500)
        await this.goToMainPage.waitForClickable()
        await this.goToMainPage.click()
        await browser.pause(500)
      }
    
    public async fillPaying(){
        await browser.pause(1000)
        await this.verDirecciones.click()
        await this.directionSelect.waitForDisplayed()
        await this.directionSelect.click()
        await this.confirmarButton.waitForDisplayed()
        await this.confirmarButton.click()
        await this.pagoConTarjeta.waitForDisplayed()
        await this.pagoConTarjeta.click()
        await browser.pause(400)
        await this.nuevaTarjeta.waitForDisplayed()
        await this.nuevaTarjeta.click()
        await browser.pause(300)
        await this.cardName.waitForDisplayed()
        await this.cardName.setValue('JAMES SKIPS')
        await this.cardNumber.waitForDisplayed()
        await this.cardNumber.setValue('5535115985249456')
        await browser.pause(500)
        await this.saveCardInfoButton.waitForClickable()
        await browser.pause(500)
        await this.saveCardInfoButton.click()
        await browser.pause(1000)
        await this.saveCardInfoButton.click()
    }
}

export default new BuyingPage();
