var schoolPaymentPage = function(){
    //Locators
    var esewaLogo = element(by.xpath('/html/body/div[2]/div[1]/ng-include/div/div/div/div[1]/a/img'));
    var schoolMenu = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[3]/button/div[2]/span'));
    var roseBud = element(by.xpath('//*[@id="paymentMenu-sidenav01"]/div[3]/div/div[1]/div[2]/div[5]/a/span'));
    var studentName = element(by.model('paymentRequest.properties.studentName'));
    var level = element(by.model('paymentRequest.properties.level'));
    var levelOption = element(by.xpath('//option[@value="LKG"]'));
    var year = element(by.model('paymentRequest.properties.year'));
    var yearOption = element(by.xpath('//*[@id="year"]/option[3]'));
    var month = element(by.model('paymentRequest.properties.month'));
    var monthOption = element(by.xpath('//*[@id="month"]/option[3]'));  
    var section = element(by.model('paymentRequest.properties.section'));
    var  rollNumber= element(by.model('paymentRequest.properties.rollNumber'));  
    var mobileNumber = element(by.model('paymentRequest.properties.mobileNumber'));
    var amount = element(by.model('paymentRequest.amount'));
    var depositor = element(by.model('paymentRequest.properties.depositor'));
    var description = element(by.model('paymentRequest.properties.description'));
    var proceedButton = element(by.buttonText('Proceed'));
    var confirmButton = element(by.xpath('//*[@id="paymentConfirmation"]/div[3]/button[1]'));
    //var confirmButton = element(by.xpath('(//button[@ng-click="preparePaymentRequestAndMakePayment(); paymentForm.$setUntouched();"])[2]'));
    var closeButton = element(by.xpath('//*[@id="ecmsg-container"]/div/button'));


    this.clickEsewaLogo = function(){
        esewaLogo.click();
    };
    this.clickSchoolMenu = function(){
        schoolMenu.click();
    };
    this.clickRoseBud = function(){
        roseBud.click();
    };
    this.setStudentName = function(name){
        studentName.sendKeys(name);
    };
    this.selectLevel = function(){
        level.click();
    };
    this.selectLevelOption = function(){
        levelOption.click();
    };
    this.selectYear = function(){
        year.click();
    };
    this.selectYearOption = function(){
        yearOption.click();
    };
    this.selectMonth = function(){
        month.click();
    };
    this.selectMonthOption = function(){
        monthOption.click();
    };
    this.setSection = function(sectionname){
        section.sendKeys(sectionname);
    };
    this.setRollNumber = function(roll){
        rollNumber.sendKeys(roll);
    };
    this.setMobileNumber = function(number){
        mobileNumber.sendKeys(number);
    };
    this.setAmount = function(amt){
        amount.clear().sendKeys(amt);
    };
    this.setDepositor = function(depositorname){
        depositor.sendKeys(depositorname);
    };
    this.setDescripition = function(describe){
        description.sendKeys(describe);
    };
    this.clickProceed = function(){
        proceedButton.click();
    };
    this.clickConfirm = function(){
        confirmButton.click();
    };
    this.clickClose = function(){
        closeButton.click();
    };

};
module.exports = schoolPaymentPage;



