// Verificar si el usuario está logueado
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Agregar mensaje del usuario
    addMessage(message, 'user-message');
    userInput.value = '';

    // Simular respuesta de la IA
    setTimeout(() => {
        // Aquí puedes integrar una verdadera IA o API de chat
        const response = "Esta es una respuesta simulada. Aquí puedes integrar una API de IA real.";
        addMessage(response, 'ai-message');
    }, 1000);
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Permitir enviar mensaje con Enter
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
