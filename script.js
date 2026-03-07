// Navegación entre secciones
function navigateTo(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Actualizar navegación desktop
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.classList.remove('active');
    });
    const navLink = document.getElementById('nav-' + sectionId);
    if (navLink) {
        navLink.classList.add('active');
    }

    // Scroll al inicio
    window.scrollTo(0, 0);

    // Cerrar menú móvil si está abierto
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    this.reset();
});

// Formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Bienvenido! Has iniciado sesión correctamente.');
    navigateTo('dashboard');
});

// Formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
    navigateTo('login');
});

// Cerrar sesión
function logout() {
    alert('Has cerrado sesión correctamente.');
    navigateTo('home');
}

// Detectar tamaño de ventana para ajustar navegación
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('mobileNav').classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
    }
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});