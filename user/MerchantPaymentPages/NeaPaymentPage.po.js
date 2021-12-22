var neaPaymentPage = function() {

    //Locators
        var nea = element(by.xpath('//*[@id="showCaseTemplate"]/div/div[2]/div/div/div/data-owl-carousel/div[1]/div/div[2]/div/div/div[2]'));
        var counterDropDown = element(by.xpath('//div[@placeholder="Select Counter"]'));
        var counter = element(by.model('$select.search'));
        var scNumber = element(by.id('scNumber'));
        var customerId = element(by.id('customerId'));
        var proceedButton2 = element(by.className('btn btn-primary btn-success btn-green btn-raised mt20'));
        var proceedButton = element(by.buttonText('Proceed'));
        var clearButton = element(by.buttonText('Clear'));

        var confirmationBoxDiv = element(by.id('paymentConfirmation'));
        var confirmButton = element(by.xpath('(//button[@type="submit"])[4]'));
        
        var closeButton = element(by.buttonText('x Close'));

    //Operators
    this.clickNea = function(){
        nea.click();
    };
    
    this.clickCounter = function(){
        counterDropDown.click();
    };

    this.setCounterName = function(counterName){
        counter.sendKeys(counterName);
        counter.sendKeys(protractor.Key.ENTER);
    };

    this.setScNumber = function(ScNubmer){
        scNumber.sendKeys(ScNubmer);
    };

    this.setCustomerID = function(customerID){
        customerId.sendKeys(customerID);
    };

    this.clickProceedButton = function(){
        proceedButton.click();
    };

    this.clickProceedButton2 = function(){
        proceedButton2.click();
    };

    this.confirmationBox = function(){
        return confirmationBoxDiv;
    };

    this.clickConfirmButton = function(){
        confirmButton.click();
    };

    this.clickCloseButton = function(){
        closeButton.click();
    };
};
module.exports = neaPaymentPage;