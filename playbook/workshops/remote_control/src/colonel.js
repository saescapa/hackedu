// Twilio could just be assigned to the Phone variable, but that exposes a lot 
// of functions. Best to be safe!
var Phone = {
    canSend: true,
    MAX_SENT: 20,
    currentSent: 0,
    duration: 500
};

Phone.sendSMS = function(to, content) {
    if (!Phone.canSend) {
        return;
    }

    Twilio.sendMessage(to, content);

    Phone._rate();
}

Phone.callAndSay = function(to, message) {
    if (!Phone.canSend) {
        return;
    }

    Twilio.callAndSay(to, message);

    Phone._rate();
}

Phone.callAndPlay = function(to, url) {
    if (!Phone.canSend) {
        return;
    }

    Twilio.callAndPlay(to, url);

    Phone._rate();
}

Phone._rate = function() {
    Phone.currentSent += 1;

    if (Phone.currentSent > Phone.MAX_SENT && Phone.canSend) {
        console.info("You have been rate limited!")
        return;
    }

    Phone.canSend = false;

    setTimeout(function() {
        Phone.canSend = true;
        Phone.currentSent = 0;
        Phone.duration *= 2;
    }, Phone.duration);
}

setInterval(function() {
    if (Phone.currentSent > 0) {
        Phone.currentSent -= 1;
    }
}, 700);
