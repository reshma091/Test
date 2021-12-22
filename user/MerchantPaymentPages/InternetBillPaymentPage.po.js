var internetBillPaymentPage = function(){
    //Locators
    //var internetBill = element(by.css('[ng-click="goToState('serviceList')"]')); adding \
    var internetBill = element(by.css('[ng-click="goToState(\'serviceList\')"]'));
    var vianet = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div/div[2]/div/div/div[2]/div/div[1]/div[2]/a/img'));
    var customerId = element(by.id('username'));
    var checkButton = element(by.buttonText('Check'));
    var selectBillOption = element(by.model('selectedVianetOption'));
    var selectServiceCharge = element(by.xpath('//*[@id="paymentForm"]/ng-include/div/div/div/div/div[3]/p[1]/select/option[2]'));
    var proceedButton = element(by.buttonText('Proceed'));
    var confirmButton = element(by.xpath('(//button[@ng-click="preparePaymentRequestAndMakePayment(); paymentForm.$setUntouched();"])[2]'));
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
    this.clickConfirm = function(){
        confirmButton.click();
    };
    this.clickClose = function(){
        closeButton.click();
    };
  

};

module.exports= internetBillPaymentPage;