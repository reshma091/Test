var userLoginPage = function () {

    //Locators
    var esewaId = element(by.model('login.esewaId'));
    var password = element(by.model('login.password'));
    var loginButton = element(by.xpath('//*[@id="loginForm"]/div[3]/div[3]/button'));
   


    // Operators
    this.setesewaId = function (esewaid) {
        esewaId.sendKeys(esewaid);
    };

    this.setPassword = function (pass) {
        password.sendKeys(pass)
    };

    this.clickLogin = function () {
        loginButton.click();
    };

    this.userLogin = function(URL, username, pass){
        browser.get(URL);
        esewaId.sendKeys(username);
        password.sendKeys(pass);
        loginButton.click();
    };
};
module.exports = userLoginPage;

