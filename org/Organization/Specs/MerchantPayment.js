var eSewahomePage = require('../PageObjects/HomePage.po.js');
var HomePage = new eSewahomePage();

var esewaTopUpPage = require('../PageObjects/MerchantPayment/TopUpPage.po.js');
var TopUpPage = new esewaTopUpPage();

var eSewaNEA = require('../PageObjects/MerchantPayment/NEA.po.js');
var eSewaNEA = new eSewaNEA();

var eSewaKhanepani = require('../PageObjects/MerchantPayment/Khanepani.po.js');
var khanepaniPage = new eSewaKhanepani();

var eSewaInternetBill = require('../PageObjects/MerchantPayment/InternetBill.po.js');
var internetBillPage = new eSewaInternetBill();

var eSewaCreditCard = require('../PageObjects/MerchantPayment/CreditCard.po.js');
var CreditCardPage = new eSewaCreditCard();

var eSewaSchoolPayment = require('../PageObjects/MerchantPayment/SchoolPayment.po.js');
var SchoolPayment = new eSewaSchoolPayment();

var eSewaDishHomeTopup = require('../PageObjects/MerchantPayment/DishhomeTopup.po.js');
var DishHomeTopUp = new eSewaDishHomeTopup();

var eSewaNTRechargeCard = require('../PageObjects/MerchantPayment/NTRechargeCard.po.js');
var NTRecharge = new eSewaNTRechargeCard();

var eSewaDishHomeRechargeCard = require('../PageObjects/MerchantPayment/DishHomeRecharge.po.js');
var DishHomeRecharge = new eSewaDishHomeRechargeCard();

var eSewaKaspersky = require('../PageObjects/MerchantPayment/Kaspersky.po.js');
var KasperskyAntivirus = new eSewaKaspersky();

describe('Merchant Payment => ', function(){
    beforeEach(function(){
        HomePage.login();
        browser.waitForAngular();
    });
    
    //Top Up
    it('NTC Top Up Rs.100', function(){
        HomePage.clickonTopUp();

        expect(browser.getCurrentUrl()).toContain("TOPUP");

        //TopUp Number Textfield
        TopUpPage.mobileNoTextField("9841414141");

        //Amount*:
        TopUpPage.amountTextField("100");

        //Proceed
        TopUpPage.clickProceedButton();

        //Confirm Page
        expect(browser.getCurrentUrl()).toContain("make_payment");
        TopUpPage.clickConfirm();

        //Statement Page
        expect(browser.getCurrentUrl()).toContain("transaction");
        TopUpPage.clickClose();
    });

    it('Ncell Top Up Rs.100', function(){
        HomePage.clickonTopUp();

        expect(browser.getCurrentUrl()).toContain("TOPUP");

        //TopUp Number Textfield
        TopUpPage.mobileNoTextField("9818181818");

        //Amount*:
        TopUpPage.amountTextField("100");

        //Proceed
        TopUpPage.clickProceedButton();

        //Confirm Page
        expect(browser.getCurrentUrl()).toContain("make_payment");
        TopUpPage.clickConfirm();

        //Statement Page
        expect(browser.getCurrentUrl()).toContain("transaction");
        TopUpPage.clickClose();
    });

    it('SmartCell Top Up Rs.100', function(){
        HomePage.clickonTopUp();

        expect(browser.getCurrentUrl()).toContain("TOPUP");

        //TopUp Number Textfield
        TopUpPage.mobileNoTextField("9618181818");

        //Amount*:
        TopUpPage.clickAmount();
        TopUpPage.Click100Rs();

        //Proceed
        TopUpPage.clickProceedButton();

        //Confirm Page
        expect(browser.getCurrentUrl()).toContain("make_payment");
        TopUpPage.clickConfirm();

        //Statement Page
        expect(browser.getCurrentUrl()).toContain("transaction");
        TopUpPage.clickClose();
    });

    it('ADSL Top Up Rs.100', function(){
        HomePage.clickonTopUp();

        expect(browser.getCurrentUrl()).toContain("TOPUP");

        //TopUp Number Textfield
        TopUpPage.mobileNoTextField("015547838");

        //Select Type*:
        TopUpPage.clickType();
        TopUpPage.selectADSL();
        //Amount*:
        TopUpPage.amountTextField("100");

        //Proceed
        TopUpPage.clickProceedButton();

        //Confirm Page
        expect(browser.getCurrentUrl()).toContain("make_payment");
        TopUpPage.clickConfirm();

        //Statement Page
        expect(browser.getCurrentUrl()).toContain("transaction");
        TopUpPage.clickClose();
    });

    it('NEA Payment', function(){
        HomePage.clickNEA();
        eSewaNEA.clickCounterDP();
        eSewaNEA.setCounterName('RATNAPARK DC');
        eSewaNEA.setScNumber('12345');
        eSewaNEA.setCustomerID('12345');
        eSewaNEA.clickProceed();
        eSewaNEA.clickProceed2();

        expect(eSewaNEA.confirmationBox().isPresent()).toBeTruthy();
        browser.sleep(5000);
        eSewaNEA.clickConfirm();
        eSewaNEA.clickClose();
    });

    it('Khanepani', function(){
        khanepani();
        browser.sleep(5000);
    });

    it('Vianet Payment',function(){
        vianetPayment();
        var label = element(by.className('product_name_statement ng-binding'));
        expect(label.getText()).toEqual("Vianet Pay");
    });

    it('Global IME Visa Credit Cards', function(){
        creditCardGlobal();
        browser.sleep(2000);
    });

    it('Nabil Bank Credit Card', function(){
        creditCardNabil();
        browser.sleep(2000);
    });

    it('School Payment', function(){
        schoolPayment();
        browser.sleep(2000);
    });

    it('Dish Home TopUp', function(){
        dishHomePayment();
        browser.sleep(2000);
    });

    it('NT Recharge Card', function(){
        ntRechargeCard();
        browser.sleep(2000);
    });

    it('Dish Home Recharge Card', function(){
        dishHomeRechargeCard();
        browser.sleep(2000);
    });

    it('Kaspersky Payment', function(){
        kasperskyPayment();
        browser.sleep(2000);
    });

    afterEach(function(){
        HomePage.logout();
    });
});

function vianetPayment(){
    internetBillPage.clickInternetBill();
    internetBillPage.clickVianet();
    internetBillPage.setCustomerId('123456');
    internetBillPage.clickCheckButton();
    internetBillPage.selectBillOptions();
    internetBillPage.selectServiceCharge();
    internetBillPage.clickProceed();
    browser.waitForAngularEnabled(true);
    expect((internetBillPage.confirmDiv()).isPresent()).toBe(true);
    internetBillPage.clickConfirm();
    internetBillPage.clickClose();
}

function khanepani(){
    khanepaniPage.clickKhanepani();
    khanepaniPage.clickCounter();
    khanepaniPage.setCounterName('Pragatinagar Khanepani');
    khanepaniPage.selectCounter();
    //khanepaniPage.selectCounter();
    khanepaniPage.setCustomerId('202');
    khanepaniPage.clickProceedButton();
    khanepaniPage.clickProceedButton2();
    khanepaniPage.clickConfirmButton();
    khanepaniPage.clickCloseButton();
}

function creditCardGlobal(){
    HomePage.searchBar().sendKeys('Global IME');
    HomePage.clickGlobalIME();

    CreditCardPage.clickCardTypeDD();
    CreditCardPage.selectVisaClassic();
    CreditCardPage.setCardNumber1('00');
    CreditCardPage.setCardNumber2('0006');
    CreditCardPage.setCardNumber3('4675');
    CreditCardPage.setName('Amit Rai');
    CreditCardPage.setAmount('500');
    CreditCardPage.clickProceed();

    expect((CreditCardPage.confirmBox()).isPresent()).toBe(true);
    CreditCardPage.clickConfirm();

    expect((CreditCardPage.popupBox()).isPresent()).toBe(true);
    CreditCardPage.clickClose();
}

function creditCardNabil(){
    HomePage.searchBar().sendKeys('Nabil Bank Credit Card');
    HomePage.clickNabilBankCreditCard();

    CreditCardPage.clickCardTypeDD();
    CreditCardPage.selectMasterCreditCard();
    CreditCardPage.setCardNumber1('00');
    CreditCardPage.setCardNumber2('0026');
    CreditCardPage.setCardNumber3('4887');
    CreditCardPage.setName('Mani Rai');
    CreditCardPage.setAmount('500');
    CreditCardPage.clickProceed();

    expect((CreditCardPage.confirmBox()).isPresent()).toBe(true);
    CreditCardPage.clickConfirm();

    expect((CreditCardPage.popupBox()).isPresent()).toBe(true);
    CreditCardPage.clickClose();
}

function schoolPayment(){
    HomePage.searchBar().sendKeys('Rosebud');
    HomePage.clickRosebud();

    SchoolPayment.setStudentName('Sheldon Jr');
    SchoolPayment.clickLevelDD();
    SchoolPayment.setClass();
    SchoolPayment.clickYearDD();
    SchoolPayment.setYear();
    SchoolPayment.clickMonthDD();
    SchoolPayment.setMonth();
    SchoolPayment.setSection('J');
    SchoolPayment.setRollNumber('18');
    SchoolPayment.setMobileNumber('9818181818');
    SchoolPayment.setAmount('500');
    SchoolPayment.setDepositor('Mrijan Man Singh');
    SchoolPayment.setDescription('You Will Never Walk Alone!!!');
    SchoolPayment.clickProceed();

    expect((SchoolPayment.paymentBox()).isPresent()).toBe(true);
    SchoolPayment.clickConfirm();

    expect((SchoolPayment.popup()).isPresent()).toBe(true);
    SchoolPayment.clickClose();
}

function dishHomePayment(){
    HomePage.searchBar().sendKeys('Dishhome');
    HomePage.clickDishHome();

    expect((DishHomeTopUp.dishHomePageBox()).isPresent()).toBe(true);
    DishHomeTopUp.setChipID('12345');
    DishHomeTopUp.clickProceed();

    expect((DishHomeTopUp.confirmBox()).isPresent()).toBe(true);
    DishHomeTopUp.clickRechargeCard();
    DishHomeTopUp.setAmount();
    DishHomeTopUp.clickProceed1();

    expect((DishHomeTopUp.confirmBox1()).isPresent()).toBe(true);
    DishHomeTopUp.confirm1();
    expect((DishHomeTopUp.popupBox()).isPresent()).toBe(true);
    DishHomeTopUp.clickClose();
}

function ntRechargeCard(){
    HomePage.clickTopupRecharge();
    expect((HomePage.contentArea()).isPresent()).toBe(true);
    HomePage.clickntRecharge();

    browser.waitForAngular();
    expect((NTRecharge.ntBox()).isPresent()).toBe(true);
    NTRecharge.clickRechargeDD();
    NTRecharge.setAmount();
    NTRecharge.clickProceed();

    browser.waitForAngular();
    expect((NTRecharge.confirmBox()).isPresent()).toBe(true);
    NTRecharge.clickConfirm();

    browser.waitForAngular();
    expect((NTRecharge.popBox()).isPresent()).toBe(true);
    NTRecharge.clickClose();
    expect((NTRecharge.statementBox()).isPresent()).toBe(true);
}

function dishHomeRechargeCard(){
    HomePage.clickTopupRecharge();
    expect((HomePage.contentArea()).isPresent()).toBe(true);
    HomePage.clickDishHome();

    browser.waitForAngular();
    expect((DishHomeRecharge.dishHomeBox()).isPresent()).toBe(true);
    DishHomeRecharge.clickRechargeDD();
    DishHomeRecharge.setAmount();
    DishHomeRecharge.clickProceed();

    browser.waitForAngular();
    expect((DishHomeRecharge.confirmBox()).isPresent()).toBe(true);
    DishHomeRecharge.clickConfirm();

    browser.waitForAngular();
    expect((DishHomeRecharge.popBox()).isPresent()).toBe(true);
    DishHomeRecharge.clickClose();
    expect((DishHomeRecharge.statementBox()).isPresent()).toBe(true);
}

function kasperskyPayment(){
    HomePage.searchBar().sendKeys('Kaspersky');
    HomePage.clickKaspersky();
    
    browser.waitForAngular();
    expect((KasperskyAntivirus.kasperskyBox()).isPresent()).toBe(true);
    KasperskyAntivirus.clickProductNameDD();
    KasperskyAntivirus.setProductName();
    browser.sleep(1000);
    KasperskyAntivirus.clickProceed();

    browser.waitForAngular();
    expect((KasperskyAntivirus.confirmBox()).isPresent()).toBe(true);
    KasperskyAntivirus.clickConfirm();

    expect((KasperskyAntivirus.popupBox()).isPresent()).toBe(true);
    KasperskyAntivirus.clickClose();
    expect((KasperskyAntivirus.finalStatementBox()).isPresent()).toBe(true);
}