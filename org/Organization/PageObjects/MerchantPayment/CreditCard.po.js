var creditCardPayment = function(){
  
    //Locators
    var cardTypeDD = element(by.id('cardType'));
    var VisaClassic = element(by.xpath('//option[@value="486266"]'));
    var MasterCreditCard = element(by.xpath('//option[@value="543496"]'));
    var cardNumber1 = element(by.id('cardNumber1'));
    var cardNumber2 = element(by.id('cardNumber2'));
    var cardNumber3 = element(by.id('cardNumber3'));
    var nameOnCard = element(by.id('nameOnCard'));
    var amount = element(by.id('amount'));
    var proceed = element(by.xpath('//button[@ui-sref=".confirm"]'));


    var confirmBoxDiv = element(by.className('payment-box row mn'));
    var confirm = element(by.xpath('(//button[@type="submit"])[3]'));

    var popup = element(by.xpath('//div[@class="ecmsg ecmsg-info"]'));
    var close = element(by.xpath('//button[@class="ecmsg-close-button ng-scope"]'));

    this.clickCardTypeDD = function(){
        cardTypeDD.click();
    };

    this.selectVisaClassic = function(){
        VisaClassic.click();
    };

    this.selectMasterCreditCard = function(){
        MasterCreditCard.click();
    };

    this.setCardNumber1 = function(number1){
        cardNumber1.sendKeys(number1);
    };

    this.setCardNumber2 = function(number2){
        cardNumber2.sendKeys(number2);
    };

    this.setCardNumber3 = function(number3){
        cardNumber3.sendKeys(number3);
    };

    this.setName = function(name){
        nameOnCard.sendKeys(name);
    };

    this.setAmount = function(price){
        amount.sendKeys(price);
    };

    this.clickProceed = function(){
        proceed.click();
    };

    this.confirmBox = function(){
        return confirmBoxDiv;
    };

    this.clickConfirm = function(){
        confirm.click();
    };

    this.popupBox = function(){
        return popup;
    };

    this.clickClose = function(){
        close.click();
    };
};

module.exports= creditCardPayment;