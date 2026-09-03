function checkInventory() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Checking the inventory...");
            let inStock = 4;
            resolve(inStock);
        }, 2000);
    });

    return promise;
}

//passing value in resolve 
//error handling

function createOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Creating the order...");
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject(new Error("failed create order TRY AGAIN"));
            }
        }, 1000);
    });
}

function chargingPayments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Charging the payments...");
            const paymentAmount = 100;
            resolve(paymentAmount);
        }, 2000);
    });
}

function sendInvoice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending the invoice...");
            resolve();
        }, 1000);
    });
}

async function main() {

    setTimeout(() => {
        console.log("Other processing Items...");
    }, 3000)

    try{
        const inStock = await checkInventory();
        console.log("InStock : ",inStock);
    } catch(err){
        console.log(err)
    }
    
    try{
        await createOrder();
    } catch(error){
        console.log(error);
    }

    try{
        await chargingPayments();
    } catch(error){
        console.log(error);
    }

    try{
        await sendInvoice();
    } catch(error){
        console.log(error);
    }
    
    




    // checkInventory()
    //     .then(createOrder)
    //     .catch((error) => {
    //         console.log(error);
    //     })
    //     .then(chargingPayments)
    //     .then(sendInvoice);

    // console.log("Other requests processing...");
}


main();
