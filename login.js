function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la validación que necesites
    // Por ahora solo verificamos que los campos no estén vacíos
    if (email && password) {
        // Simulamos una autenticación exitosa
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'chat.html';
    } else {
        alert('Por favor completa todos los campos');
    }
}

// Verificar si el usuario ya está logueado
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'chat.html';
    }
}
