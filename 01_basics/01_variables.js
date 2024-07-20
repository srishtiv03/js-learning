const accountId = 144553
let accountEmail = "srishti@goole.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 25638 // not allowed
accountEmail = "sv@sv.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/