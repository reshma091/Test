'use strict'
exports.config = {
    framework: 'jasmine',
    seleniumAddress:'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'firefox',
        // 'moz:firefoxOptions': {
        //     args: [ "--headless" ]
        // }
    },
    specs: [
        //'Organization/Specs/MerchantPayment.js',
        'Organization/Specs/OrganizationActivities.js'
    ],
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    },
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,               // Use colors in the command line report.
        defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
    },

    params: {
         url: '10.13.213.61:1080',
        //url: 'https://rc.esewa.com.np',
        eSewaID: '9868570570',
        password: 'test@123',
        newPassword: 'test@1234',
        rcUser : '9810347878'
    }
};