var bankAccountPage = function(){

    //Locators
    var favouriteAccountButton = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div/div[2]/div/div[3]/button'))    
    var fullName = element(by.model('bankInfo.account_holder_name'));
    var bankDropDown = element(by.xpath('//select[@name="bankSelector"]'));
    var bankList = element.all(by.xpath('//select//option'));
    var accountNumber = element(by.model('bankInfo.account_number'));
    var verifyButton = element(by.xpath('//*[@id="buttonContainerDiv"]/button[1]'));
    var confirmButton = element(by.xpath('//button[@ng-click="addBankAccount()"]'));
    

    this.clickFavouriteAccountButton = function(){
        favouriteAccountButton.click();
    };

    this.setFullName = function(name){
        fullName.sendKeys(name);
    };

    this.clickBankDropDown = function(){
        bankDropDown.click();
    };

    this.selectBankName= function(){
        bankList.each(function(element, index){   
            element.getText().then(function (text) {
                        console.log(index, text);
                    });
                });  
                bankList.get(2).click();    
    };
    this.setAccountNumber = function(number){
        accountNumber.sendKeys(number);
    };

    this.clickVerifyButton = function(){
        verifyButton.click();
    };

    this.clickConfirmButton = function(){
        confirmButton.click();
    }

};
module.exports = bankAccountPage;