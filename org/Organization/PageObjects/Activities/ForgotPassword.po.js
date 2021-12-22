var orgForgotPassword = function() {

    //Locators
    var forgotPasswordBox = element(by.className('panel panel-default'));
    var esewaIDField = element(by.model('forgotPasswordDto.esewaId'));
    var reCaptcha = element(by.className('recaptcha-checkbox-border'));
    var submitButton = element(by.xpath('//button[@ec-button-text="Submit"]'));
    var cancelButton = element(by.xpath('//button[@ec-button-text="Cancel"]'));

    //Operators
    this.forgotPasswordDiv = function(){
        return forgotPasswordBox;
    };

    this.seteSewaID = function(eSewaID){
        esewaIDField.sendKeys(eSewaID);
    };

    this.setRecaptcha = function(){
        return reCaptcha;
    };

    this.clickSubmitButton = function(){
        submitButton.click();
    };

    this.clickCancelButton = function(){
        cancelButton.click();
    };
};
module.exports = orgForgotPassword;