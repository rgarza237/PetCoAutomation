import { Given, When, Then } from '@wdio/cucumber-framework';
import { LoginPO, MainPO, PagePO, BuyingPO } from '../pageobjects/index';

Given(/^the user search for 2 articles and add them to cart$/, async () => {
    await MainPO.mamiferos.click()
    await browser.pause(500)
    await BuyingPO.addProduct()
    await browser.pause(500)
    await MainPO.perros.click()
    await browser.pause(500)
    await BuyingPO.addProduct()
});


When(/^the user move into cart and fill the payment information$/, async () => {
    await MainPO.goToCart.click()
    await browser.pause(500)
    await BuyingPO.comprarButton.click()
    await BuyingPO.verDirecciones.waitForDisplayed()
    await BuyingPO.fillPaying()
});

Then(/^The payment should proceed successfully$/, async () => {

});