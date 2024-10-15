// Immediately Invoked Function Expressions
// jaise hi function likha, immediately execute karvana hai
// eg. - file likhni ek jismei sirf database connection hai, we want jaise hi application start ho humare database ka connection start ho jaaye
// global scope se koi pollution nhi chaahiye in our function - isiliye alag se ek scope bana lete hai + we want immediately execute ho jaaye vo

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() 
// first () is for function definition, second () is for execution
// iife ko nhi pta kab end krna execution so we use ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')