describe('SQL test', function(){
    function ConnectDatabase(){
        var mysql = require("mysql");
        this.connect = mysql.createConnection({
            host: "10.13.212.199",
            user: "reshma.maharjan",
            password: "reshma@123",
            database: "esewa_ns_uat"
        });
    }
    it('Database testing', function(){
        var connectDatabase = new ConnectDatabase();
        connectDatabase.connect.connect();
        connectDatabase.connect.query('SELECT * FROM `esewa_ns_uat`.`batch_sms` a ORDER BY a.`id` DESC LIMIT 1', function(err, rows){
            if(err){
                console.log(err);
            }else{
                console.log(rows);
            }
        })
    });
});
