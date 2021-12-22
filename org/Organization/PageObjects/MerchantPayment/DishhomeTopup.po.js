var eSewaDishHomeTopup = function() {

    //Locators
    var dishHomePageDiv = element(by.className('payment-box row mn'));
    var ChipID = element(by.id('enquiry'));
    var proceed = element(by.xpath('//button[@ui-sref=".secondStep"]'));

    var confirmDiv = element(by.className('payment-box row mn'));
    var rechargeCardDD = element(by.id('rechargeCard'));
    var selectAmount = element(by.xpath('(//option[@value="350"])[1]'));
    var proceed1 = element(by.id('es-payment-proceed'));

    var confirmDiv1 = element(by.className('payment-box row mn'));
    var confirm = element(by.xpath('(//button[@type="submit"])[4]'));
    var popup = element(by.xpath('//div[@class="ecmsg ecmsg-info"]'));
    var close = element(by.xpath('//button[@class="ecmsg-close-button ng-scope"]'));


    //Operators
    this.dishHomePageBox = function(){
        return dishHomePageDiv;
    }

    this.setChipID = function(ID){
        ChipID.sendKeys(ID);
    }

    this.clickProceed = function(){
        proceed.click();
    }

    this.confirmBox = function(){
        return confirmDiv;
    }

    this.clickRechargeCard = function(){
        rechargeCardDD.click();
    }

    this.setAmount = function(){
        selectAmount.click();
    }

    this.clickProceed1 = function(){
        proceed1.click();
    }

    this.confirmBox1 = function(){
        return confirmDiv1;
    }

    this.confirm1 = function(){
        confirm.click();
    }

    this.popupBox = function(){
        return popup;
    };

    this.clickClose = function(){
        close.click();
    };
};
module.exports = eSewaDishHomeTopup;