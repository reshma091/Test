

var dataUtility = function(){
  
    const fs = require('fs'); //json to be
    describe('login data', function( path , propertyToRetrieve){
        var rawdata = fs.readFileSync(path);
        var x = JSON.parse(rawdata);
        var username =x[propertyToRetrieve]
        return username
    });


}