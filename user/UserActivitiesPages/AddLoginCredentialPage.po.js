var addLoginCredentialPage = function(){
    //locators
    var accountIcon = element(by.xpath('//*[@id="ACCOUNT_ICON"]'));
    var accountList = element.all(by.xpath('//ul[@class="dropdown-menu"]/li'));
    var sidebarList = element.all(by.xpath('//ul[@class="nav navbar-nav static-menus profile-static-menus"]/li'));
    var addLoginCredentialButton = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[2]/div[1]/div/div[2]/a/img'));
    var newUsername = element(by.model('credential.esewaId'));
    var newName = element(by.model('credential.name'));
    var addButton = element(by.xpath('//button[@ng-click="ecClick()"][1]'));
    this.clickAccountIcon = function(){
        accountIcon.click();
    };
    
    this.clickProfile = function(page){
        accountList.each(function(element, index){
            element.getText().then(function (text) {
              
                if(text == page){
                    console.log(index, text);
                     element.click();
                }
            });
        });
    };

    this.clickSidebar = function(page){
        sidebarList.each(function(element, index){
            element.getText().then(function (text) {
                
                if(text == page){
                    console.log(index, text);
                     element.click();
                }
            });
        });
    };

    this.clickAddLoginCredentialButton = function(){
        addLoginCredentialButton.click();
    };

    this.clickAddButton = function(){
        addButton.click();
    };


    
};
module.exports =  addLoginCredentialPage;