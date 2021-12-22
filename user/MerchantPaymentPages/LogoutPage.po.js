
var userLogoutPage = function(){
    //locators
    var account_icon = element( by.id('ACCOUNT_ICON'));
    var logoutButton = element(by.xpath('//*[@id="logoutForm"]/button'));

    this.clickAccountIcon = function(){
        account_icon.click();
    };
    this.clickLogout = function(){
        logoutButton.click();
    };
    this.logout = function(){
        account_icon.click();
        logoutButton.click();
    };
};
module.exports = userLogoutPage;