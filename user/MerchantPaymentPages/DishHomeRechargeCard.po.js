var DishHomeRecharge = function() {

    //Locators
        var recharge = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[5]/a/div[1]/span'));
        var dishomeRecharge = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[5]/div/div[3]/div/div[1]/a/span'));
        var amount = element(by.xpath('//*[@id="rechargeCard"]/option[2]'));
        var proceed = element(by.id('es-payment-proceed'));
        var closeButton = element(by.xpath('//*[@id="ecmsg-container"]/div/button'));

        var confirmDiv = element(by.className('payment-box row mn'));
        var confirm = element(by.buttonText('Confirm'));

        var popup = element(by.className('ecmsg-message'));
        var finalStatement = element(by.className(' panel panel-default'));

    //Operators
    this.clickRecharge = function(){
        recharge.click();
    }

    this.clickRechargeDD = function(){
        dishomeRecharge.click();
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

    this.clickCloseButton = function(){
        closeButton.click();
    };

    this.statementBox = function(){
        return finalStatement;
    }
};
module.exports = DishHomeRecharge;