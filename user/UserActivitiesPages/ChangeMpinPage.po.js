var changeMpinPage = function(){
     //Locators
  
     var oldMpin = element(by.model('ecModelForOldPassword'));
     var newMpin = element(by.model('ecModelForNewPassword'));
     var confirmMpin = element(by.model('ecModelForConfirmPassword'));
     var submitButton = element(by.xpath('(//button[@type="submit"])[2]'));
     var clearButton = element(by.xpath('//button[@type="reset"]'));
     var cancelButton = element(by.buttonText('Cancel'));
 
     //Operators
 
     this.setOldMPin = function(oldmpin){
         oldMpin.sendKeys(oldmpin);
     };
 
     this.setNewMpin = function(newmpin){
         newMpin.sendKeys(newmpin);
     };
 
     this.setconfirmNewMpin = function(confirmnewmpin){
         confirmMpin.sendKeys(confirmnewmpin);
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
module.exports = changeMpinPage;