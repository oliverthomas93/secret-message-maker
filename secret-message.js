let secretMessageInput = document.querySelector("#secret");
let secretMessageButton = document.querySelector(".secret-message-button");
let secretMessageOutput = document.querySelector(".secret-message-output");
let decodeSecretMessageInput = document.querySelector("#decode");
let decodeSecretMessageButton = document.querySelector(".decode-secret-message-button");
let decodedSecretMessageOutput = document.querySelector(".decoded-secret-message-output");

let messageEncrypter = (val) => {
    if (val === 'a') {
        return 'f'
    } else if (val === 'b') {
        return 'x'
    } else if (val === 'c') {
        return 'l'
    } else if (val === 'd') {
        return 'j'
    } else if (val === 'e') {
        return 'z'
    } else if (val === 'f') {
        return 'o'
    } else if (val === 'g') {
        return 'u'
    } else if (val === 'h') {
        return 'b'
    } else if (val === 'i') {
        return 'd'
    } else if (val === 'j') {
        return 'w'
    } else if (val === 'k') {
        return 'n'
    } else if (val === 'l') {
        return 'e'
    } else if (val === 'm') {
        return 'c'
    } else if (val === 'n') {
        return 'r'
    } else if (val === 'o') {
        return 'v'
    } else if (val === 'p') {
        return 'h'
    } else if (val === 'q') {
        return 'a'
    } else if (val === 'r') {
        return 'g'
    } else if (val === 's') {
        return 'i'
    } else if (val === 't') {
        return 'k'
    } else if (val === 'u') {
        return 'y'
    } else if (val === 'v') {
        return 'm'
    } else if (val === 'w') {
        return 'q'
    } else if (val === 'x') {
        return 't'
    } else if (val === 'y') {
        return 's'
    } else if (val === 'z') {
        return 'p'
    } else if (val === ' ') {
        return ' '
    }
}
let messageDecrypter = (val) => {
    if (val === 'f') {
        return 'a'
    } else if (val === 'x') {
        return 'b'
    } else if (val === 'l') {
        return 'c'
    } else if (val === 'j') {
        return 'd'
    } else if (val === 'z') {
        return 'e'
    } else if (val === 'o') {
        return 'f'
    } else if (val === 'u') {
        return 'g'
    } else if (val === 'b') {
        return 'h'
    } else if (val === 'd') {
        return 'i'
    } else if (val === 'w') {
        return 'j'
    } else if (val === 'n') {
        return 'k'
    } else if (val === 'e') {
        return 'l'
    } else if (val === 'c') {
        return 'm'
    } else if (val === 'r') {
        return 'n'
    } else if (val === 'v') {
        return 'o'
    } else if (val === 'h') {
        return 'p'
    } else if (val === 'a') {
        return 'q'
    } else if (val === 'g') {
        return 'r'
    } else if (val === 'i') {
        return 's'
    } else if (val === 'k') {
        return 't'
    } else if (val === 'y') {
        return 'u'
    } else if (val === 'm') {
        return 'v'
    } else if (val === 'q') {
        return 'w'
    } else if (val === 't') {
        return 'x'
    } else if (val === 's') {
        return 'y'
    } else if (val === 'p') {
        return 'z'
    } else if (val === ' ') {
        return ' '
    }
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