const form = document.querySelector('form');
const input = document.querySelector("[data-message-input]");
const lastMessage = document.querySelector("[data-last-message]");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    localStorage.setItem('message', input.value);
    updateMessageFromLocal();
});

function updateMessageFromLocal() {
    let message = localStorage.getItem('message');
    lastMessage.textContent = message;
}

updateMessageFromLocal();