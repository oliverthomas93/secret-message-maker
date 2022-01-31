let secretMessageInput = document.querySelector("#secret");
let secretMessageButton = document.querySelector(".secret-message-button");
let secretMessageOutput = document.querySelector(".secret-message-output");
let decodeSecretMessageInput = document.querySelector("#decode");
let decodeSecretMessageButton = document.querySelector(".decode-secret-message-button");
let decodedSecretMessageOutput = document.querySelector(".decoded-secret-message-output");

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
const encryptedAlphabet = ['f','x','l','j','z','o','u','b','d','w','n','e','c','r','v','h','a','g','i','k','y','m','q','t','s','p',' '];


const messageEncrypter = (val) => {
    let x;
    alphabet.forEach((letter, index) => {
        if (val == letter) {
            x = encryptedAlphabet[index];
        }
    });
    return x;
}

const messageDecrypter = (val) => {
    let x;
    encryptedAlphabet.forEach((letter, index) => {
        if (val == letter) {
            x = alphabet[index];
        }
    });
    return x;
}

let createSecretMessage = () => {
    // Create an empty message array to store the individual letters from the input value
    let message = [];

    // Create an empty encrypted message array to store the encrypted message
    let encryptedMessage = [];

    // Convert the input field value to lower case and store in a variable
    let secretMessage = secretMessageInput.value.toLowerCase();

    // Loop through the secretMessage variable to push each individual letter 
    // to the empty message array
    for (let i = 0; i < secretMessage.length; i++) {
        message.push(secretMessage[i]);
    }

    // Send each letter in the message array to the messageEncrypter function 
    // and return an encrypted letter that is then pushed to the encyptedMessage array
    message.forEach(letter => {
        encryptedMessage.push(messageEncrypter(letter));
    });
    
    // Remove the commas seperating each letter in the encyptedMessage array
    // and set the output to equal the inner HTML of the secretMessageOutput element
    secretMessageOutput.innerHTML = encryptedMessage.join("");
}

// This function essentially does the oposite of the createSecretMessage function
let decodeSecretMessage = () => {
    let message = [];
    let encryptedMessage = [];
    let secretMessage = decodeSecretMessageInput.value;

    for (let i = 0; i < secretMessage.length; i++) {
        message.push(secretMessage[i]);
    }

    message.forEach(letter => {
        encryptedMessage.push(messageDecrypter(letter));
    });
    
    decodedSecretMessageOutput.innerHTML = encryptedMessage.join("");
}

secretMessageButton.addEventListener('click', createSecretMessage);
decodeSecretMessageButton.addEventListener('click', decodeSecretMessage);