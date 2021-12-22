var eSewaNEA = function() {

    //Locators
        var counterDropDown = element(by.xpath('//div[@placeholder="Select Counter"]'));
        var coutnerTF = element(by.model('$select.search'));
        var scNumberTF = element(by.id('scNumber'));
        var customerIDTF = element(by.id('customerId'));
        var proceedButton2 = element(by.className('btn btn-primary btn-success btn-green btn-raised mt20'));
        var proceedButton = element(by.buttonText('Proceed'));
        var clearButton = element(by.buttonText('Clear'));

        var confirmationBoxDiv = element(by.id('paymentConfirmation'));
        var confirmButton = element(by.xpath('(//button[@type="submit"])[4]'));
        
        var closeButton = element(by.buttonText('x Close'));

    //Operators
    this.clickCounterDP = function(){
        counterDropDown.click();
    };

    this.setCounterName = function(counterName){
        coutnerTF.sendKeys(counterName);
        coutnerTF.sendKeys(protractor.Key.ENTER);
    };

    this.setScNumber = function(ScNubmer){
        scNumberTF.sendKeys(ScNubmer);
    };

    this.setCustomerID = function(customerID){
        customerIDTF.sendKeys(customerID);
    };

    this.clickProceed = function(){
        proceedButton.click();
    };

    this.clickProceed2 = function(){
        proceedButton2.click();
    };

    this.confirmationBox = function(){
        return confirmationBoxDiv;
    };

    this.clickConfirm = function(){
        confirmButton.click();
    };

    this.clickClose = function(){
        closeButton.click();
    };
};
module.exports = eSewaNEA;