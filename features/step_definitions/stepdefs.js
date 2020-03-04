const assert = require('assert')
const {Given, When, Then} = require('cucumber');
function IsItFriday(today){
    if(today === "Friday"){
        return "TGIF"
    }
    else{
        return "Nope"
    }
}