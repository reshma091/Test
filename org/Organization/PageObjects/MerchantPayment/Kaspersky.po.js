var eSewaKaspersky = function(){

    var kasperskyDiv = element(by.className('payment-box row mn'));
    var productNameDD = element(by.id('productName'));
    var selectOption = element(by.xpath('//option[@value="Kaspersky Antivirus 1 Pc/1 User"]'));
    var proceed = element(by.id('es-payment-proceed'));

    var confirmDiv = element(by.className('payment-box row mn'));
    var confirm = element(by.xpath('(//button[@type="submit"])[3]'));

    var popup = element(by.className('ecmsg ecmsg-info'));
    var close = element(by.className('ecmsg-close-button ng-scope'));

    var finalStatement = element(by.className('container ng-scope'));

    this.kasperskyBox = function(){
        return kasperskyDiv;
    }

    this.clickProductNameDD = function(){
        productNameDD.click();
    }

    this.setProductName = function(){
        selectOption.click();
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

    this.popupBox = function(){
        return popup;
    }

    this.clickClose = function(){
        close.click();
    }

    this.finalStatementBox = function(){
        return finalStatement;
    }
};
module.exports = eSewaKaspersky;