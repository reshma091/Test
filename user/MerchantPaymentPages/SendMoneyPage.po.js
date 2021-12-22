var sendMoneyPage = function(){
    //Locators
    //var sendMoneyTab = element(by.xpath('//a[@ng-click="goToState(StateConstant.MAKE_PAYMENT,{\'product_code\': \'BALTXN', 'product_name\': \'Fund Transfer\'})"]'));
    var sendMoneyTab = element(by.xpath('/html/body/div[2]/div[2]/div/div/div[1]/ul/li[6]/a'));
    var esewaid = element(by.model('paymentRequest.properties.receiverName'));
    var amount = element(by.model('paymentRequest.amount'));
    var purpose = element(by.model('paymentRequest.properties.purpose'));
    var purposeOption = element(by.xpath('//*[@id="purpose"]/option[3]'));
    var remarks = element(by.model('paymentRequest.properties.remarks'));
    var proceedBttn = element(by.xpath('//*[@id="paymentForm"]/div[2]/button[1]'));
    var confirmButton = element(by.buttonText('Confirm'));
    var closeButton =   element(by.xpath('//*[@id="ecmsg-container"]/div/button'));



    this.clickSendMoneyTab = function(){
        sendMoneyTab.click();
    };
    this.setEsewaId = function(id){
        esewaid.sendKeys(id);
    };
    this.setAmount = function(amt){
        amount.clear().sendKeys(amt);  
    };
    this.clickPurpose = function(){
        purpose.click();
    };
    this.selectPurposeOption = function(){
        purposeOption.click();
    };
    this.setRemarks = function(remark){
        remarks.sendKeys(remark);
    };
    this.clickProceed = function(){
        proceedBttn.click();
    };
    this.clickConfirm = function(){
        confirmButton.click();
    };
    this.clickCloseButton = function(){
        closeButton.click();
    };

};
module.exports = sendMoneyPage;