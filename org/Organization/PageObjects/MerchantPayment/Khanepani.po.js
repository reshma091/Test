var KhanepaniPage = function(){
    //Locators
    //searching khanepani from search bar
    // var searchBar = element(by.model('product'));
    // var searchList =element.all(by.xpath('//ul[@matches="matches"]/li'));

    var khanepani = element(by.xpath('//*[@id="showCaseTemplate"]/div/div[1]/div/div/div/data-owl-carousel/div[1]/div/div[1]/div/div/div[4]/div'));
    var counter = element(by.xpath('//*[@id="paymentForm"]/ng-include[1]/form/div/p[1]/div/div[1]/span'));
    var counterName = element(by.model('$select.search'));
    var counterList = element.all(by.css('.ui-select-choices-row-inner span'));
    //var pragatinagar = element(by.xpath('//*[@id="ui-select-choices-row-1-0"]'));
    var customerId = element(by.model('paymentRequest.properties.enquiry'));
    var proceedButton = element(by.xpath('//*[@id="paymentForm"]/ng-include[1]/form/div/button'));
    var proceedButton2 = element(by.xpath('//*[@id="paymentForm"]/div[2]/button[1]'));
    var confirmButton = element(by.xpath('(//button[@type="submit"])[3]'));
    var closeButton = element(by.xpath('//*[@id="ecmsg-container"]/div/button'));

    this.clickKhanepani = function(){
        khanepani.click();
    };
    
    this.clickCounter = function(){
        counter.click();
    };

    this.setCounterName = function(name){
        counterName.sendKeys(name);
    };

    this.selectCounter = function(){
        counterList.first().click();
    };

    this.setCustomerId = function(id){
        customerId.sendKeys(id);
    };

    this.clickProceedButton = function(){
        proceedButton.click();
    };
    
    this.clickProceedButton2 = function(){
        proceedButton2.click();
    };

    this.clickConfirmButton = function(){
        confirmButton.click();
    };
    this.clickCloseButton = function(){
        closeButton.click();
    };

};
module.exports = KhanepaniPage;