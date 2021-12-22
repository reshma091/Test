var internetBillPaymentPage = function(){
    //Locators
    //var internetBill = element(by.css('[ng-click="goToState('serviceList')"]')); adding \
    var internetBill = element(by.linkText('Internet Bill'));
    var vianet = element(by.xpath('//img[@ng-src="https://cdn.esewa.com.np//ui/images/logos/merchants/1b1Ra8QiCwm1cWy53cyZ0-02-03-89dc8946d10c496c24dd0cef55314b15e388fc54c98277b71793b1a3b558ff00_ba15710b.jpg"]'));
    var customerId = element(by.id('username'));
    var checkButton = element(by.buttonText('Check'));
    var selectBillOption = element(by.model('selectedVianetOption'));
    var selectServiceCharge = element(by.xpath('//option[@label="Service Charge"]'));
    var proceedButton = element(by.buttonText('Proceed'));
    var confirmBoxDiv = element(by.className('payment-box row mn'));
    var confirmButton = element(by.xpath('(//button[@type="submit"])[4]'));
    var closeButton = element(by.xpath('//*[@id="ecmsg-container"]/div/button'));

    this.clickInternetBill = function(){
        internetBill.click();
    };
    this.clickVianet =function(){
        vianet.click();
    };
    this.setCustomerId = function(cid){
        customerId.sendKeys(cid);
    };
    this.clickCheckButton =function(){
        checkButton.click();
    };
    this.selectBillOptions = function(){
        selectBillOption.click();   
    };
    this.selectServiceCharge = function(){
        selectServiceCharge.click();
    };
    this.clickProceed = function(){
        proceedButton.click();
    };

    this.confirmDiv = function(){
        return confirmBoxDiv;
    };

    this.clickConfirm = function(){
        confirmButton.click();
    };
    this.clickClose = function(){
        closeButton.click();
    };
  

};

module.exports= internetBillPaymentPage;