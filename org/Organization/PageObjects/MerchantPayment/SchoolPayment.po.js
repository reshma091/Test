var eSewaSchoolPayment = function() {

    //Locators
    var studentName = element(by.id('studentName'));
    var levelDD = element(by.id('level'));
    var selectClass = element(by.xpath('//option[@value="Nursery"]'));
    var yearDD = element(by.id('year'));
    var selectYear = element(by.xpath('//option[@value="2076"]'));
    var monthDD = element(by.id('month'));
    var selectMonth = element(by.xpath('//option[@value="Baisakh"]'));
    var section = element(by.id('section'));
    var rollNumber = element(by.id('rollNumber'));
    var mobileNumber = element(by.id('mobileNo'));
    var amount = element(by.id('amount'));
    var depositor = element(by.id('depositor'));
    var description = element(by.id('description'));
    var proceed = element(by.id('es-payment-proceed'));
    var clear = element(by.id('es-payment-clear'));

    var paymentDiv = element(by.className('payment-box row mn'));
    var confirm = element(by.xpath('//button[@ng-click="preparePaymentRequestAndMakePayment(); paymentForm.$setUntouched();"]'));

    var popupBox = element(by.className('ecmsg ecmsg-info'));
    var close = element(by.className('ecmsg-close-button ng-scope'));    

    //Operators
    this.setStudentName = function(name){
        studentName.sendKeys(name);
    }

    this.clickLevelDD = function(){
        levelDD.click();
    }

    this.setClass = function(){
        selectClass.click();
    }

    this.clickYearDD = function(){
        yearDD.click();
    }

    this.setYear = function(){
        selectYear.click();
    }

    this.clickMonthDD = function(){
        monthDD.click();
    }

    this.setMonth = function(){
        selectMonth.click();
    }

    this.setSection = function(sectionName){
        section.sendKeys(sectionName);
    }

    this.setRollNumber = function(rollNo){
        rollNumber.sendKeys(rollNo);
    }

    this.setMobileNumber = function(mobile){
        mobileNumber.sendKeys(mobile);
    }

    this.setAmount = function(price){
        amount.sendKeys(price);
    }

    this.setDepositor = function(depositorName){
        depositor.sendKeys(depositorName);
    }

    this.setDescription = function(desciption1){
        description.sendKeys(desciption1);
    }

    this.clickProceed = function(){
        proceed.click();
    }
    
    this.paymentBox = function(){
        return paymentDiv;
    }

    this.clickConfirm = function(){
        confirm.click();
    }

    this.popup = function(){
        return popupBox;
    }

    this.clickClose = function(){
        close.click();
    }
};
module.exports = eSewaSchoolPayment;