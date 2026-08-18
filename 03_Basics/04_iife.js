//immediately involked function
//add (;) at last to end iife

// (function decl.) (func. call)
// () ()

(function chai(){
    //named iife
    console.log("DB connected");
})();


( () => {
    console.log('DB connected TWO');
}) ();

( (name) => {
    //simple iife or unnamed iife
    console.log(`DB connected TWO ${name}`);
}) ('hitesh');
