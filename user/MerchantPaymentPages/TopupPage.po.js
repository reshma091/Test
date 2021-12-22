
var topupPage = function(){
    //Locators
    var topupBttn = element(by.xpath('/html/body/div[2]/div[2]/div/div/div[1]/ul/li[2]/a'));
    var number= element(by.model('paymentRequest.properties.receiverName'));
    var amount=element(by.model('paymentRequest.amount'));
    var proceedBttn = element(by.xpath('//*[@id="paymentForm"]/div[2]/button[1]'));
    var confirmButton = element(by.buttonText('Confirm'));
    var closeButton =   element(by.xpath('//*[@id="ecmsg-container"]/div/button'));

    // // find click the dropdown
	// 	element(by.tagName("select#first")).click();
	// 	// add sleep to give a time for te options to reveal
	// 	browser.sleep(1000)
	// 	// click the option which has value='Yahoo'
	// 	element(by.css("#first [value='Yahoo']")).click();
    var smartCellAmount = element(by.model('paymentRequest.amount'));
    var smartCellAmt = element(by.xpath('//*[@id="paymentForm"]/ng-include[1]/p[2]/div/div/select/option[2]'));

 
    //operators
    this.clickTopUp = function(){
        topupBttn.click();
    };
    this.setTopupNumber = function(num){
        number.sendKeys(num);
    };
    this.setAmount = function(amt){
        amount.clear().sendKeys(amt);
    };
    this.clickProceed = function(){
        proceedBttn.click();
    };
    this.clickConfirm = function(){
        confirmButton.click();
    };
    this.clickCloseButton = function(){
        closeButton.click();
    };
     this.clickAmountDropDown =function(){
         smartCellAmount.click();
     };
     this.selectAmount = function(){
         smartCellAmt.click();
     };
};
module.exports =topupPage;

