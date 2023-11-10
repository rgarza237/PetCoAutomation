import { Given, When, Then } from '@wdio/cucumber-framework';
import { LoginPO, MainPO, PagePO } from '../pageobjects/index';

Given(/^the user navigates to the sign page$/, async () => {
    await PagePO.open();
    await MainPO.logIn.waitForDisplayed()
    await MainPO.logIn.click();
    await MainPO.iniciarSesion.waitForDisplayed()
    await MainPO.iniciarSesion.click();
    await LoginPO.loginTitle.waitForDisplayed()
    await browser.pause(500)
});

// "([^"]*)"
When(/^the user submit username and password$/, async () => {
    await LoginPO.login()
});

Then(/^the user should be logged into home screen$/, async () => {
    await MainPO.navBar.waitForExist();
    await browser.pause(1000)
});

