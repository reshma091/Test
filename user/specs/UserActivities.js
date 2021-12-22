var AddLoginCredentialPage = require('../UserActivitiesPages/AddLoginCredentialPage.po.js');
var addLoginCredentialPage = new AddLoginCredentialPage();

var LoginPage = require('../MerchantPaymentPages/LoginPage.po.js');
var loginPage = new LoginPage();

var LogoutPage = require('../MerchantPaymentPages/LogoutPage.po.js');
var logoutPage = new LogoutPage();

var ChangePasswordPage = require('../UserActivitiesPages/ChangePasswordPage.po.js');
var changePasswordPage = new ChangePasswordPage();

var ChangeMpinPage = require('../UserActivitiesPages/ChangeMpinPage.po.js');
var changeMpinPage = new ChangeMpinPage();

var AddBankAccountPage = require('../UserActivitiesPages/AddBankAccountPage.po.js');
var addBankAccountPage = new AddBankAccountPage();

//login test data

var URL = 'https://rc.esewa.com.np';
var username = '9846548736';
var password = 'test@123';

//change password test data
var oldPassword = 'test@123';
var newPassword = 'test@1234';
var confirmPassword = 'test@1234'; 

//change mpin test data
var oldmpin ='1234';
var newmpin ='1111';
var confirmnewmpin ='1111';

//add bank account test data
//make sure account number is verified account number
var fullName = 'Reshma Maharjan';
var accountNumber = '01102563252';

describe('User Activities ::', function(){
   // beforeEach(function(){
    it('Login', function(){
        loginPage.userLogin(URL, username, password);
    });

    xit('Add Login Credential', function(){
        addLoginCredential();
    });

    //If you are changing mpin Logout function is not required
    it('ChangePassword', function(){
        changeMpin();
    });

    it('Add Favourite Bank Account', function(){
        addBankAccount();
    });

    //If you are changing password Logout function is not required
    it('ChangePassword', function(){
        changePassword();
    });

    //afterEach(function(){
        it('Logout', function(){
             logoutPage.logout();
             browser.sleep(1000);
         })

});



function addLoginCredential(){
    addLoginCredentialPage.clickAccountIcon();
    addLoginCredentialPage.clickProfile('Profile');
    addLoginCredentialPage.clickSidebar('Login Credentials');
    addLoginCredentialPage.clickAddLoginCredentialButton();

};

function changePassword(){
    loginPage.clickEsewaTab();
    addLoginCredentialPage.clickAccountIcon();
    addLoginCredentialPage.clickProfile('Profile');
    addLoginCredentialPage.clickSidebar('Change Password');
    changePasswordPage.setOldPassword(oldPassword);
    changePasswordPage.setNewPassword(newPassword);
    changePasswordPage.setconfirmNewPassword(confirmPassword);
    changePasswordPage.clickSubmitButton();

};

function changeMpin(){
    loginPage.clickEsewaTab();
    addLoginCredentialPage.clickAccountIcon();
    addLoginCredentialPage.clickProfile('Profile');
    addLoginCredentialPage.clickSidebar('Change MPIN');
    changeMpinPage.setOldMPin(oldmpin);
    changeMpinPage.setNewMpin(newmpin);
    changeMpinPage.setconfirmNewMpin(confirmnewmpin);
    changeMpinPage.clickSubmitButton();

};

function addBankAccount(){
    loginPage.clickEsewaTab();
    addLoginCredentialPage.clickAccountIcon();
    addLoginCredentialPage.clickProfile('Profile');
    addLoginCredentialPage.clickSidebar('Bank Accounts');
    addBankAccountPage.clickFavouriteAccountButton();
    addBankAccountPage.setFullName(fullName);
    addBankAccountPage.clickBankDropDown();
    addBankAccountPage.selectBankName();
    addBankAccountPage.setAccountNumber(accountNumber);
    browser.sleep(5000);
    addBankAccountPage.clickVerifyButton();
    addBankAccountPage.clickConfirmButton();
}