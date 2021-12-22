var rechargeCardPage = function(){
    //locators
    var rechargeCardTab = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[5]/button/div[2]'));
    var ntRechargeCard = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[5]/div/div[3]/div/div[3]/a/span'));
    var rechargeCard = element(by.model('paymentRequest.properties.cardFaceValue'));
    var rechargeCardOption = element(by.xpath('//*[@id="rechargeCard"]/option[2]'));
    var proceedBttn = element(by.xpath('//*[@id="paymentForm"]/div[2]/button[1]'));
    var confirmButton = element(by.buttonText('Confirm'));
    var closeButton =   element(by.xpath('//*[@id="ecmsg-container"]/div/button'));

    
    this.clickRechargeCardTab= function(){
        rechargeCardTab.click();
    };
    this.clickNtRechargeCard = function(){
        ntRechargeCard.click();
    };
    this.clickRechargeCard = function(){
        rechargeCard.click();
    };
    this.clickrechargeCardOption = function(){
        rechargeCardOption.click();
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
module.exports = rechargeCardPage;