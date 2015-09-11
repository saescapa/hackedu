// Twilio could just be assigned to the Phone variable, but that exposes a lot 
// of functions. Best to be safe!
var Phone = {};

Phone.sendSMS = function(to, content) {
    Twilio.sendMessage(to, content);
}

Phone.callAndSay = function(to, message) {
    Twilio.callAndSay(to, message);
}

Phone.callAndPlay = function(to, url) {
    Twilio.callAndPlay(to, url);
}
