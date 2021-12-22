var orgChangePassword = function() {

    //Locators
    var changePasswordBox = element(by.className('payment-box'));
    var oldPasswordTF = element(by.id('oldPassword'));
    var newPasswordTF = element(by.id('newPassword'));
    var confirmPasswordTF = element(by.id('confirmNewPassword'));
    var submitButton = element(by.xpath('(//button[@type="submit"])[3]'));
    var clearButton = element(by.xpath('//button[@type="reset"]'));
    var cancelButton = element(by.buttonText('Cancel'));

    //Operators
    this.changePasswordDiv = function(){
        return changePasswordBox;
    };

    this.setOldPassword = function(oldPassword){
        oldPasswordTF.sendKeys(oldPassword);
    };

    this.setNewPassword = function(newPassword){
        newPasswordTF.sendKeys(newPassword);
    };

    this.setconfirmNewPassword = function(confirmNewPassword){
        confirmPasswordTF.sendKeys(confirmNewPassword);
    };

    this.clickSubmitButton = function(){
        submitButton.click();
    };

    this.clickClearButton = function(){
        return clearButton;
    };

    this.clickCancelButton = function(){
        return cancelButton;
    };
};
module.exports = orgChangePassword;