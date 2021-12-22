var LoginPage = require('../MerchantPaymentPages/LoginPage.po.js');
var loginPage = new LoginPage();

var TopUpPage = require('../MerchantPaymentPages/TopupPage.po.js');
var topUpPage = new TopUpPage();

var LogoutPage = require('../MerchantPaymentPages/LogoutPage.po.js');
var logoutPage = new LogoutPage();

var InternetBillPage = require('../MerchantPaymentPages/InternetBillPaymentPage.po.js');
var internetBillPage = new InternetBillPage();

var SchoolPaymentPage = require('../MerchantPaymentPages/SchoolPaymentPage.po.js');
var schoolPage = new SchoolPaymentPage();

var SendMoneyPage = require('../MerchantPaymentPages/SendMoneyPage.po.js');
var sendMoneyPage = new SendMoneyPage();


var RechargeCardPage = require('../MerchantPaymentPages/RechargeCard.po.js');
var rechargeCardPage = new RechargeCardPage();

var KhanepaniPage = require('../MerchantPaymentPages/KhanepaniPage.po.js');
var khanepaniPage = new KhanepaniPage();

var NeaPaymentPage = require('../MerchantPaymentPages/NeaPaymentPage.po.js');
var neaPaymentPage = new NeaPaymentPage();

var MiscellaneousPage = require('../MerchantPaymentPages/MiscellaneousPage.po.js');
var miscellaneousPage = new MiscellaneousPage();

var DishHomeRechargePage = require('../MerchantPaymentPages/DishHomeRechargeCard.po.js');
var dishHomeRechargePage = new DishHomeRechargePage();

var CreditCardPage = require('../MerchantPaymentPages/CreditCardPage.po.js');
var creditCardPage = new CreditCardPage();

//Environment
var URL = 'http://10.13.212.61:1080';

//Credentials
var username = '9846548736';
var password = 'test@1234';


//Topup test data
var ntcNumber = '9849992092';
var ncellNumber = '9818624947';
var smartcellNumber = '9641265698';
var amt = '20';

//vianet id
var vianetId = '445645';

//school payment test data
var studentName ='Reshma Maharjan';
var section = 'A'
var  rollNumber= '22';  
var mobileNumber = '9849992092';
var amount = '200';
var depositor = 'Reshma Maharjan';
var description = 'This is school bill payment'

//sendmoney test data
var esewa_id = '9841238021';
var remarks = 'Lunch pay'

//khanepani test data
counterName = 'Pragatinagar Khanepani';
customerId ='202';

//Nea payment test data
var neaCounterName = 'ACHHAM';
var scnumber='1234';
var neaCustomerId ='123';

//Global credit card test data
var number1 ='00';
var number2 = '0006';
var number3 = '4675';
var cname = 'Amit Rai';


describe('User::', function(){
   beforeEach(function(){
    //it('Login', function(){
        
        loginPage.userLogin(URL, username, password);
        
        
            // expect(browser.getCurrentUrl()).toContain(URL+"/#/main"){
            //     console.log("Login successfully");
            //  }

        //expect(browser.getCurrentUrl()).toEqual(URL+"/#/main");
        // .then(function(result){
        //     console.log("Current URL = "+browser.getCurrentUrl());
        //     console.log("Result = "+result);
        //     if(result){
        //         console.log("login Successfully");
        //     }else{
        //         console.log("Could not login");
        //     }
        // });
        browser.sleep(1000);
    });


    it('NTC Topup', function(){
        ntcTopup();
        var label=element(by.xpath('//strong[@class="product_name_statement ng-binding"]'));
        if(expect(label.getText()).toBe("NT Prepaid Topup")){
            console.log('NT Prepaid Topup Successfully completed.');
        }
        browser.sleep(1000);
    });

    it('Ncell Topup', function(){
        ncellTopup();
        var label = element(by.xpath('//strong[@class="product_name_statement ng-binding"]'));
        if(expect(label.getText()).toBe("Ncell Topup")){
            console.log('Ncell Topup Successfully completed.');
        }
        browser.sleep(1000);
    });
     
    it('SmartCell Topup', function(){
        smartCellTopup();
        var label = element(by.xpath('//strong[@class="product_name_statement ng-binding"]'));
        if(expect(label.getText()).toBe("Smart Cell Topup")){
            console.log('Smart Cell Topup Successfully completed.');
        }
        browser.sleep(1000);
    });

    it('Vianet Payment',function(){
        vianetPayment(); 
        var label = element(by.className('product_name_statement ng-binding')); 
        if(expect(label.getText()).toBe("Vianet Pay")){
            console.log('Completed vianet payment');  
        }
        
        browser.sleep(1000);
    });
    it('RoseBud School Payment', function(){
        schoolPayment();
        browser.sleep(1000);
    });

    it('Send Money', function(){
        sendMoney();
        var label = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div/div[1]/div/div/strong'));
        if(expect(label.getText()).toBe("Send Money")){
            console.log("Send Money Successfully completed");
        }    
        browser.sleep(1000);
    });

    it('Recharge Card', function(){
        rechargeCard();
        var label = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div/div[1]/div/div/strong'));
        if(expect(label.getText()).toBe('NT Recharge Card')){
            console.log("NT Recarge Card Completed");
        }
        browser.sleep(1000);
    });

    it('Khanepani', function(){
        khanepani();
        console.log("Kanepani Payment Completed");
        browser.sleep(5000);
    });

    it('NEA Payment', function(){
        neaPayment();
        browser.sleep(5000);
    });
    
    it('Dish Home Recharge Card', function(){
    
            dishHomeRechargeCard();
            var product_name_statement = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div/div[1]/div/div/strong'));
            expect(product_name_statement.getText()).toBe('Dish Home Recharge Card');
             
        browser.sleep(5000);
    });

    it('Credit Card', function(){
        creditCard();
    });
    


   afterEach(function(){
  // it('Logout', function(){
        logoutPage.logout();
        browser.sleep(1000);
    })

});



function ntcTopup(){
   miscellaneousPage.clickEsewaTab();
   topUpPage.clickTopUp();
   topUpPage.setTopupNumber(ntcNumber);
   topUpPage.setAmount(amt);
   topUpPage.clickProceed();
   topUpPage.clickConfirm();
   topUpPage.clickCloseButton();
   miscellaneousPage.clickPdfIcon();
}

function ncellTopup(){
    topUpPage.clickTopUp();
    topUpPage.setTopupNumber(ncellNumber);
    topUpPage.setAmount(amt);
    topUpPage.clickProceed();
    topUpPage.clickConfirm();
    topUpPage.clickCloseButton();
    //miscellaneousPage.clickPdfIcon();
}

function smartCellTopup(){
    topUpPage.clickTopUp();
    topUpPage.setTopupNumber(smartcellNumber);
    topUpPage.clickAmountDropDown();
    topUpPage.selectAmount();
    topUpPage.clickProceed();
    topUpPage.clickConfirm();
    topUpPage.clickCloseButton();
    // miscellaneousPage.clickPdfIcon();
}

function vianetPayment(){
    internetBillPage.clickInternetBill();
    internetBillPage.clickVianet();
    internetBillPage.setCustomerId(vianetId);
    internetBillPage.clickCheckButton();
    internetBillPage.selectBillOptions();
    internetBillPage.selectServiceCharge();
    internetBillPage.clickProceed();
    browser.waitForAngularEnabled(true);
    internetBillPage.clickConfirm();
    internetBillPage.clickClose();
    // miscellaneousPage.clickPdfIcon();
}

function schoolPayment(){
    schoolPage.clickEsewaLogo();
    browser.sleep(1000);
    schoolPage.clickSchoolMenu();
    schoolPage.clickRoseBud();
    schoolPage.setStudentName(studentName);
    schoolPage.selectLevel();
    schoolPage.selectLevelOption();
    schoolPage.selectYear();
    schoolPage.selectYearOption();
    schoolPage.selectMonth();
    schoolPage.selectMonthOption();
    schoolPage.setSection(section);
    schoolPage.setRollNumber(rollNumber);
    schoolPage.setMobileNumber(mobileNumber);
    schoolPage.setAmount(amount);
    schoolPage.setDepositor(depositor);
    schoolPage.setDescripition(description);
    schoolPage.clickProceed();
    schoolPage.clickConfirm();
    schoolPage.clickClose();
    // miscellaneousPage.clickPdfIcon();
}

function sendMoney(){
    sendMoneyPage.clickSendMoneyTab();
    sendMoneyPage.setEsewaId(esewa_id);
    sendMoneyPage.setAmount(amount);
    sendMoneyPage.clickPurpose();
    sendMoneyPage.selectPurposeOption();
    sendMoneyPage.setRemarks(remarks);
    sendMoneyPage.clickProceed();
    sendMoneyPage.clickConfirm();
    sendMoneyPage.clickCloseButton();
    // miscellaneousPage.clickPdfIcon();
}

function rechargeCard(){
    miscellaneousPage.clickEsewaTab();
    rechargeCardPage.clickRechargeCardTab();
    rechargeCardPage.clickNtRechargeCard();
    rechargeCardPage.clickRechargeCard();
    rechargeCardPage.clickrechargeCardOption();
    rechargeCardPage.clickProceed();
    rechargeCardPage.clickConfirm();
    rechargeCardPage.clickCloseButton();
    // miscellaneousPage.clickPdfIcon();
}
function khanepani(){
    miscellaneousPage.clickEsewaTab();
    khanepaniPage.clickKhanepani();
    khanepaniPage.clickCounter();
    khanepaniPage.setCounterName(counterName);
    khanepaniPage.selectCounter();
    //khanepaniPage.selectCounter();
    khanepaniPage.setCustomerId(customerId);
    khanepaniPage.clickProceedButton();
    khanepaniPage.clickProceedButton2();
    khanepaniPage.clickConfirmButton();
    khanepaniPage.clickCloseButton();
    // miscellaneousPage.clickPdfIcon();
}

function neaPayment(){
    miscellaneousPage.clickEsewaTab();
    neaPaymentPage.clickNea();
    neaPaymentPage.clickCounter();
    neaPaymentPage.setCounterName(neaCounterName);
    neaPaymentPage.setScNumber(scnumber);
    neaPaymentPage.setCustomerID(neaCustomerId);
    neaPaymentPage.clickProceedButton();
    neaPaymentPage.clickProceedButton2();
    neaPaymentPage.clickConfirmButton();
    neaPaymentPage.clickCloseButton();
    // miscellaneousPage.clickPdfIcon();
}

function dishHomeRechargeCard(){
    miscellaneousPage.clickEsewaTab();
    dishHomeRechargePage.clickRecharge();
    dishHomeRechargePage.clickRechargeDD();
    dishHomeRechargePage.setAmount();
    dishHomeRechargePage.clickProceed();
    dishHomeRechargePage.clickConfirm();
    dishHomeRechargePage.clickCloseButton();
}

function creditCard(){
    creditCardPage.searchCreditCard('global');
    creditCardPage.selectGlobal();
    creditCardPage.clickCardTypeDD();
    creditCardPage.selectVisaClassic();
    creditCardPage.setCardNumber1(number1);
    creditCardPage.setCardNumber2(number2);
    creditCardPage.setCardNumber3(number3);
    creditCardPage.setName(cname);
    creditCardPage.setAmount(amount);
    creditCardPage.clickProceed();
    creditCardPage.clickConfirm();
    creditCardPage.clickClose();
}