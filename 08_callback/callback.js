//Register
//Send welcome email
//Login
//Get User Detail
//Display User Data

///Callback

    function waitForThreeSeconds(){
        let ms = 3000 + new Date().getTime()
        while(new Date() < ms){}
    }



    function register(Callback){
        // waitForThreeSeconds();
        setTimeout(() => {
            console.log("Register Ends");
            Callback();
        }, 1000)
    }

    function sendEmail(Callback){
        // waitForThreeSeconds();
        setTimeout(() => {
            console.log("Email Ends");
            Callback();
        }, 3000);   
    }

    function Login(Callback){
        // waitForThreeSeconds();
        setTimeout(() => {
            console.log("Login Successfully");
            Callback();
        }, 2000);
    }

    function getDetail(Callback){ 
        // waitForThreeSeconds();
        setTimeout(() => {
            console.log("Got User Data");
            Callback();
        }, 1000);
    }

    function displayDetail(){
        // waitForThreeSeconds();
        setTimeout(() => {
            console.log("user data details");
        }, 1000);
    }

    //callback hell
    register(function(){
        sendEmail(function(){
            Login(function(){
                getDetail(function(){
                    displayDetail();
                });
            });
        });
    })
    

console.log("other website works!!!")