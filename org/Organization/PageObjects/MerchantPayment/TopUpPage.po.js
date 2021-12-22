var eSewaTopUpPage = function() {

    //Locators
        //TopUp Page
        var topUpLabel = element(by.xpath('//label[@ng-class="classLabel"]'));
        var mobileNoTextField = element(by.xpath('//input[@type="text"][1]'));
        var amountLabel = element(by.xpath('//span/label'));
        var amountTextField = element(by.xpath('//input[@type="number"]'));
        var proceedButton = element(by.xpath('//button[@ng-click="filterProps();"]'));
        var amountDropdown = element(by.model('paymentRequest.amount'));
        var hundredOption = element(by.xpath('//option[@label="NPR 100"]'));
        var selectType = element(by.model('landlineOption'));
        var selectADSL = element(by.xpath('//option[@value="ADSL(Unlimited)"]'));

        //Confirmation Page
        var confirmButton = element(by.buttonText('Confirm'));

        //
        var closeButton = element(by.buttonText('× Close'));

    //Operators
    this.topUpLabel = function(){
        return topUpLabel;
    };

    this.mobileNoTextField = function(){
        return mobileNoTextField;
    };

    this.mobileNoTextField = function(mobileNo){
        mobileNoTextField.sendKeys(mobileNo);
    };

    this.amountLabel = function(){
        return amountLabel;
    };

    this.amountTextField = function(){
        return amountTextField;
    };

    this.amountTextField = function(amount){
        amountTextField.clear();
        amountTextField.sendKeys(amount);
    };
    
    this.clickProceedButton = function(){
        proceedButton.click();
    };

    this.clickConfirm = function(){
        confirmButton.click();
    };

    this.clickClose = function(){
        closeButton.click();
    };

    this.clickAmount = function(){
        amountDropdown.click();
    };

    this.Click100Rs = function(){
        hundredOption.click();
    };

    this.clickType = function(){
        selectType.click();
    };

    this.selectADSL = function(){
        selectADSL.click();
    };
};
module.exports = eSewaTopUpPage;