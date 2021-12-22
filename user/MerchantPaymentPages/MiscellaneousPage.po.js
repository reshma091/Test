var miscellaneousPage = function(){

    //Locators
    var esewaTab = element(by.xpath('/html/body/div[2]/div[1]/ng-include/div/div/div/div[1]/a/img'));
    var pdfIcon = element(by.xpath('/html/body/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[1]/div/a/img'));


    this.clickEsewaTab = function(){
        esewaTab.click();
    };
    this.clickPdfIcon = function(){
        pdfIcon.click();
    };
};
module.exports = miscellaneousPage;