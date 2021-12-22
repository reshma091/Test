var eSewaNTRecharge = function() {

    //Locators
        var dishHomeDiv = element(by.className('payment-box row mn'));
        var rechargeDD = element(by.id('rechargeCard'));
        var amount = element(by.xpath('//option[@value="350"]'));
        var proceed = element(by.id('es-payment-proceed'));

        var confirmDiv = element(by.className('payment-box row mn'));
        var confirm = element(by.buttonText('Confirm'));

        var popup = element(by.className('ecmsg-message'));
        var close = element(by.className('ecmsg-close-button ng-scope'));

        var finalStatement = element(by.className(' panel panel-default'));

    //Operators
    this.dishHomeBox = function(){
        return dishHomeDiv;
    }

    this.clickRechargeDD = function(){
        rechargeDD.click();
    }

    this.setAmount = function(){
        amount.click();
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

    this.popBox = function(){
        return popup;
    }

    this.clickClose = function(){
        close.click();
    }

    this.statementBox = function(){
        return finalStatement;
    }
};
module.exports = eSewaNTRecharge;