var ChangePassword = function() {
    
    //Locators
  
    var oldPassword = element(by.model('ecModelForOldPassword'));
    var newPassword = element(by.model('ecModelForNewPassword'));
    var confirmPassword = element(by.model('ecModelForConfirmPassword'));
    var submitButton = element(by.xpath('(//button[@type="submit"])[2]'));
    var clearButton = element(by.xpath('//button[@type="reset"]'));
    var cancelButton = element(by.buttonText('Cancel'));

    //Operators

    this.setOldPassword = function(oldPass){
        oldPassword.sendKeys(oldPass);
    };

    this.setNewPassword = function(newPass){
        newPassword.sendKeys(newPass);
    };

    this.setconfirmNewPassword = function(confirmNewPass){
        confirmPassword.sendKeys(confirmNewPass);
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
module.exports = ChangePassword;