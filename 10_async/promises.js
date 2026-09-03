function checkInventory() {
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Checking the inventory...");
            resolve();
        }, 2000);
    })

    return promise;
    
}

function createOrder() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Creating the order...");
            const error = true
            if(!error){
                resolve();
            }
            else{
                reject(new Error("failed create order TRY AGAIN"));
            }
        }, 1000);
    })
    
}

function chargingPayments() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Charging the payments...");
            const paymentAmount = 100;
            resolve(paymentAmount);
        }, 2000);
    })
}

function sendInvoice() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Sending the invoice...");
            resolve();
        }, 1000);
    })
}

function main() {
    checkInventory()
    .then(createOrder)
    .catch((error)=>{
        console.log(error)
    })
    .then(chargingPayments)
    .then(sendInvoice)

    console.log("Other requests processing...");
}

//callback hell

// checkInventory(() => {
//     createOrder((error) => {
//         if (error) {
//             console.log(error);
//         }
//         chargingPayments((error, paymentAmount) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             console.log("Charged Amount : ", paymentAmount);
//             sendInvoice(() => {
//                 console.log("ALL DONE ORDER 😍✅");
//             });
//         });
//     });
// });

main();
