var orgUserRegistration = function() {

    //Locators
    var register = element(by.xpath('(//a[@ui-sref="organization_customer.register"])[2]'));
    var number = element(by.model('customerRegistration.esewa_id'));
    var submit = element(by.id('send'));
    var createCustomer = element(by.xpath('//a[@ui-sref="organization_customer.register"]'));

    //Operators
    this.gotoCreateCustomer = function(){
        createCustomer.click();
    };

    this.clickRegisterTab = function(){
        register.click();
    }

    this.setMobileNumber = function(mobileNumber){
        number.sendKeys(mobileNumber);
    }

    this.clickSubmit = function(){
        submit.click();
    }
};
module.exports = orgUserRegistration;