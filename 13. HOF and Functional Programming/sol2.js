function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
 
delayedMessage("Hello, this message is delayed by 2 seconds!", 2000);
