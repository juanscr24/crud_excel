import { logoutUser } from './auth.js';

export function renderDashboard() {
    const app = document.getElementById('app');
    const user = JSON.parse(localStorage.getItem('user'));

    app.innerHTML = `
        <h2>Bienvenido, ${user?.nombre || 'Usuario'}</h2>
        <button id="logoutBtn">Cerrar sesión</button>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
        logoutUser();
        window.location.hash = '#login';
    });
}
