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

Given ('Today is Sunday', function(){
    this.today = 'Sunday';
});

When ('I ask whether it\'s Friday yet', function(){
    this.actualAnswer = IsItFriday(this.today)
});

Then ("I should be told {string}", function(expectedAnswer){
    assert.equal(this.actualAnswer, expectedAnswer);
})