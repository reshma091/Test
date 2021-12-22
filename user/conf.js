exports.config = {
    framework : "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: "specs/MerchantPayment.js",
    //specs: ["specs/MerchantPayment.js","specs/UserActivities.js"],
    capabilities: {
        // 'browserName': 'chrome',
        // 'chromeOptions': {
        //     'args': ['no-sandbox']
        // }
        browserName : 'firefox'
    },
    onPrepare:function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
    },
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,               // Use colors in the command line report.
        defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
    }
};

