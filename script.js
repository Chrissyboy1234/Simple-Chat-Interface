function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        var message = document.createElement("div");
        message.className = "chat-message";

        var sender = document.createElement("span");
        sender.className = "sender sender-you"; // Add sender class based on sender
        sender.textContent = "You: ";
        message.appendChild(sender);

        var text = document.createTextNode(userInput);
        message.appendChild(text);

        chatBox.appendChild(message);
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
        // Replace the following line with code to send the user input to ChatGPT and display the response
    }
}
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}




