function checkInventory(callback){
    setTimeout(() => {
        console.log("Checking the inventory...");
        callback();
    }, 2000);
}

function createOrder(callback){
    setTimeout(() => {
        console.log("Creating the order...")  
        const error = new Error("Creating order Failed!!!")  
        callback(error);
    }, 1000);
}   

function chargingPayments(callback){
    setTimeout(() => {
        console.log("Charging the payments...");
        let error = null;
        const paymentAmount = 100;
        callback(error, paymentAmount);
    }, 2000);
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log("Sending the invoice...");
        callback();
    }, 1000);
}


function main(){
    checkInventory(() => {
        createOrder((error) => {
            if(error){
                console.log(error);
            } 
            chargingPayments((error, paymentAmount) => {
                if(error){
                    console.log(error)
                    return;
                }
                console.log("Charged Amount : ", paymentAmount);
                sendInvoice(()=>{
                    console.log("ALL DONE ORDER 😍✅");
                });
            });
        });
    });
    
    console.log("Other requests processing...");
}

//callback hell

main();