var orgSendMoney = function() {

    //Locators
    var sendMoneyDiv = element(by.className('payment-box row mn'));
    var eSewaID = element(by.id('receiverName'));
    var amount = element(by.id('amount'));
    var purposeDD = element(by.model('paymentRequest.properties.purpose'));
    var purpose = element(by.xpath('//option[@value="Lend/borrow"]'));
    var remarks = element(by.id('remarks'));
    var proceed = element(by.id('es-payment-proceed'));

    var confirmDiv = element(by.className('payment-box row mn'));
    var confirm = element(by.xpath('(//button[@type="submit"])[3]'));

    //Operators
    this.sendMoneyBox = function(){
        return sendMoneyDiv;
    }

    this.seteSewaID = function(user){
        eSewaID.sendKeys(user);
    }

    this.setAmount = function(amountToSend){
        amount.sendKeys(amountToSend);
    }

    this.clickPurposeDD = function(){
        purposeDD.click();
    }

    this.selectPurpose = function(){
        purpose.click();
    }

    this.setRemarks = function(reason){
        remarks.sendKeys(reason);
    }

    this.clickProceed = function(){
        proceed.click();
    }

    this.confirmBox = function(){
        return confirmDiv;
    }

    this.clickConfirm = function(){
        confirm.click();
    }
};
module.exports = orgSendMoney;