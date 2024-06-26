function writeCards(names, eventName) {
    let thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }

    return thankYouMessages;
}

// Example usage:
const namesArray = ["Charlie", "Samip", "Ali"];
const event = "birthday";

const messages = writeCards(namesArray, event);
console.log(messages);



function countDown(){
    let countDown = 10;
    while (countDown >=0){
        console.log(countDown);
        countDown--;

    }
}