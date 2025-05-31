// login.js para Django

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        if (type === 'text') {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });

    // Get CSRF token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!email || !password) {
            showMessage('Por favor, completa todos los campos', 'error');
            return;
        }

        // Simulate login process
        showMessage('Iniciando sesión...', 'info');
        
        // Simple authentication (you can replace this with real Django authentication)
        setTimeout(() => {
            if (validateCredentials(email, password)) {
                showMessage('¡Inicio de sesión exitoso!', 'success');
                // Redirect to chat after successful login
                setTimeout(() => {
                    // Usa la URL del chat de Django
                    // Puedes cambiar 'chat' por el nombre de tu URL en urls.py
                    window.location.href = '/chat/';  // O usa {% url 'chat' %} si lo tienes en el template
                }, 1500);
            } else {
                showMessage('Credenciales incorrectas. Intenta de nuevo.', 'error');
            }
        }, 1000);
    });

    // Simple credential validation (replace with real Django authentication)
    function validateCredentials(email, password) {
        // For demo purposes, accept any email with password "sofia123"
        // En un proyecto real de Django, esto se haría con una vista de autenticación
        return password === 'sofia123' || password === '12345';
    }

    // Show messages to user
    function showMessage(message, type) {
        // Remove existing alerts
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create new alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${getBootstrapClass(type)} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Insert before the form
        const container = document.querySelector('.login-container');
        const form = document.getElementById('loginForm');
        container.insertBefore(alertDiv, form);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv && alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    // Convert message type to Bootstrap class
    function getBootstrapClass(type) {
        switch(type) {
            case 'error': return 'danger';
            case 'success': return 'success';
            case 'info': return 'info';
            default: return 'primary';
        }
    }

    // Handle "Forgot Password" link
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        showMessage('Funcionalidad de recuperación de contraseña próximamente', 'info');
    });

    // Handle "Register" link
    document.querySelector('.register-link').addEventListener('click', function(e) {
        e.preventDefault();
        showMessage('Funcionalidad de registro próximamente', 'info');
    });

    // Add some interactive effects
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});