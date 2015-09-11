Phone.sendSMS("+1-484-238-5555", "WHATUP?!");
Phone.callAndSay("+1-484-238-5555", "Hello! My name is Jonathan! How are you?");
Phone.callAndPlay("+1 (310) 303-5555", "http://a.tumblr.com/tumblr_lie8ewfdbO1qzbwpvo1.mp3");

document.getElementById("button").onclick = function() {
    Phone.sendSMS("+1-555-555-5555", "Whats up dawg?");
};

Twilio.listenForMessages(function(message) {
  document.write(message.body);
})
