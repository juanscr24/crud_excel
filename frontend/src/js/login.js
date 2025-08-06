import { loginUser } from './auth.js';

export function renderLogin() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Iniciar sesión</h2>
        <form id="loginForm">
            <input type="email" name="correo" placeholder="Correo" required />
            <input type="password" name="contrasena" placeholder="Contraseña" required />
            <button type="submit">Entrar</button>
            <p>¿No tienes cuenta? <a href="#register">Regístrate</a></p>
        </form>
    `;

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/api/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Credenciales incorrectas');

            const user = await response.json();
            loginUser(user);
            window.location.hash = '#dashboard';
        } catch (err) {
            alert(err.message);
        }
    });
}
