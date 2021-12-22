var eSewaHomePage = function() {

    //Locators
    var eSewaId = element(by.model('login.esewaId'));
    var eSewaPassword = element(by.model('login.password'));
    var loginButton = element(by.buttonText('Login'));
    var elementsInMainMenu = element.all(by.css('ul.nav')).get(1).all(by.css('li a'));
    var accountIcon = element(by.id('ACCOUNT_ICON'));
    var elementsInAccountIcon = element.all(by.css('ul.dropdown-menu')).get(2).all(by.css('li'));
    var searchBar = element(by.xpath('//input[@type="stext"]'));
    var changePassword = element(by.linkText('Change Password'));
    var forgotPassword = element(by.linkText('Forgot Password ?'));
    var invalidPassword = element(by.className('login-error-toast ng-binding'));
    var NEA = element(by.linkText('Nepal Electricity Authority Online'));
    var globalIME = element(by.linkText('Global IME Visa Credit Cards'));
    var nabilBankCreditCard = element(by.linkText('Nabil Bank Credit Card'));
    var rosebudSchool = element(by.linkText('Rosebud School, Buddhanagar, Kathmandu'));
    var dishHome = element(by.partialLinkText('Dish Home Recharge Card'));
    var topUpAndRecharge = element(by.xpath('(//span[@class="paymentMenu-h5 ng-binding"])[5]'));
    var ntRechargeCard = element(by.partialLinkText('NT Recharge Card'));
    var dishHomeRecharge = element(by.linkText('Dish Home Recharge Card'));    
    var Topup = element(by.linkText('Top Up'));
    var topUpAndRechargeContent = element(by.className('paymentMenu-dropdown-content'));
    var Kaspersky = element(by.linkText('Kaspersky Antivirus'));
    var sendMoney = element(by.linkText('Send Money'));

    //Operators
    this.url = function(url){
        browser.get(url);
    };

    this.seteSewaId = function(id){
        eSewaId.sendKeys(id);
    };

    this.setPassword = function(password){
        eSewaPassword.sendKeys(password);
    };

    this.clickLoginButton = function(){
        loginButton.click();
    };

    this.elementsMainMenu = function(){
        return elementsInMainMenu;
    };

    this.clickonTopUp = function(){
        Topup.click();
    };

    this.clickAccountIcon = function(){
        accountIcon.click();
    };

    this.elementsAccountIcon = function(){
        return elementsInAccountIcon;
    };

    this.goToPageFromMainMenu = function(page){
        elementsInMainMenu.each(function(element, index){
            element.getText().then(function (text) {
                console.log(index, text);
                if(text == page){
                    element.click();
                }
            });
        });
    };

    this.searchBar = function(){
        return searchBar;
    };

    this.clickChangePassword = function(){
        changePassword.click();
    };

    this.clickForgotPassword = function(){
        forgotPassword.click();
    }

    this.clickNEA = function(){
        NEA.click();
    }

    this.clickGlobalIME = function(){
        globalIME.click();
    }

    this.clickNabilBankCreditCard = function(){
        nabilBankCreditCard.click();
    }

    this.clickRosebud = function(){
        rosebudSchool.click();
    }

    this.clickDishHome = function(){
        dishHome.click();
    }

    this.clickTopupRecharge = function(){
        topUpAndRecharge.click();
    }

    this.clickntRecharge = function(){
        ntRechargeCard.click();
    }

    this.clickDishHomeRecharge = function(){
        dishHomeRecharge.click();
    }

    this.contentArea = function(){
        return topUpAndRechargeContent;
    }

    this.clickKaspersky = function(){
        Kaspersky.click();
    }

    this.gotoSendMoney = function(){
        sendMoney.click();
    }


    var URL = browser.params.url;
    //var URL = 'https://rc.esewa.com.np';
    var id = browser.params.eSewaID;
    var password = browser.params.password;
    var newPassword = browser.params.newPassword;

    this.login = function(){
        browser.get(URL);
        browser.waitForAngular();
        eSewaId.sendKeys(id);
        eSewaPassword.sendKeys(password);
        loginButton.click();
        browser.waitForAngular();
        // expect((invalidPassword).isPresent()).toBe(false);
        // invalidPassword.isPresent().then(function(result) {
        //     if(result){
        //         eSewaPassword.clear();
        //         eSewaPassword.sendKeys(newPassword);
        //         loginButton.click();
        //     } else {

        //     }
        // });
    };

    this.logout = function(){
        accountIcon.click();
        element(by.buttonText('Logout')).click();
    }
};
module.exports = eSewaHomePage;