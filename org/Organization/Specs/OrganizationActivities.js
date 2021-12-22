var eSewahomePage = require('../PageObjects/HomePage.po.js');
var HomePage = new eSewahomePage();

var changePassword = require('../PageObjects/Activities/ChangePassword.po.js');
var changePasswordPage = new changePassword();

var forgotPassword = require('../PageObjects/Activities/ForgotPassword.po.js');
var forgotPasswordPage = new forgotPassword();

var eSewaCreateCustomer = require('../PageObjects/Activities/UserRegistration.po.js');
var CreateCustomer = new eSewaCreateCustomer();

var eSewaSendMoney = require('../PageObjects/Activities/SendMoney.po.js');
var SendMoney = new eSewaSendMoney();

var url = browser.params.url;
var eSewaID = browser.params.eSewaID;
var password = browser.params.password;
var newPassword = browser.params.newPassword;
var user = browser.params.rcUser;

describe('Organization => No Login => ', function(){
    // Change Password
    it('Change Password', function(){
        HomePage.login();
        HomePage.clickAccountIcon();
        HomePage.clickChangePassword();
        expect((changePasswordPage.changePasswordDiv()).isPresent()).toBe(true);
        changePasswordPage.setOldPassword(password);
        changePasswordPage.setNewPassword(newPassword);
        changePasswordPage.setconfirmNewPassword(newPassword);
        expect((changePasswordPage.clickClearButton()).isPresent()).toBe(true);
        expect((changePasswordPage.clickCancelButton()).isPresent()).toBe(true);
        changePasswordPage.clickSubmitButton();
        browser.waitForAngular();
        browser.navigate().refresh();
        expect(browser.getCurrentUrl()).toContain("home");
        // browser.params.password = newPassword;
        // browser.params.newPassword = password;
    });

    // Forgot Password
    xit('Forgot Password', function(){
        HomePage.url(url);
        HomePage.clickForgotPassword();
        expect((forgotPasswordPage.forgotPasswordDiv()).isPresent()).toBe(true);
        forgotPasswordPage.seteSewaID(eSewaID);
        browser.sleep(10000);
        browser.switchTo().frame(0);
        browser.actions().mouseMove(forgotPasswordPage.setRecaptcha()).perform();
        forgotPasswordPage.setRecaptcha().click();
        browser.sleep(10000);
    });

    xit('Extra', function(){
        var digits = Math.floor(Math.random()*90000000) + 10000000;;
        console.log(digits);
        mobileNumber = '98'+digits;
        console.log('Mobile Number = '+mobileNumber);
    });
});

describe('Organization => ', function(){
    beforeEach(function(){
        HomePage.login();
        browser.waitForAngular();
    });

    //Requires Token
    xit('User Registration', function(){
        userRegistration();
    });

    it('Send Money to Normal User', function(){
        sendMoneyToUser();
        browser.sleep(5000);
    })

    afterEach(function(){
        HomePage.logout();
        browser.waitForAngular();
    });
});

function userRegistration(){
    CreateCustomer.gotoCreateCustomer();

    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('/customer/register');
    CreateCustomer.clickRegisterTab();
    var digits = Math.floor(Math.random()*90000000) + 10000000;;
    console.log(digits);
    mobileNumber = '98'+digits;
    console.log('Mobile Number = '+mobileNumber);
    CreateCustomer.setMobileNumber(mobileNumber);
    CreateCustomer.clickSubmit();
}

function sendMoneyToUser(){
    HomePage.gotoSendMoney();

    browser.waitForAngular();
    expect((SendMoney.sendMoneyBox()).isPresent()).toBe(true);
    console.log(user);
    SendMoney.seteSewaID(user);
    SendMoney.setAmount('100');
    SendMoney.clickPurposeDD();
    SendMoney.selectPurpose();
    SendMoney.setRemarks('Test');

    expect((SendMoney.confirmBox()).isPresent()).toBe(true);
}