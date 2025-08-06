import { renderLogin } from './login.js';
import { renderRegister } from './register.js';
import { renderDashboard } from './dashboard.js';
import { isAuthenticated } from './auth.js';

export function router() {
    const route = window.location.hash || '#login';

    if (!isAuthenticated() && route !== '#login' && route !== '#register') {
        window.location.hash = '#login';
        return;
    }

    switch (route) {
        case '#dashboard':
            renderDashboard();
            break;
        case '#register':
            renderRegister();
            break;
        case '#login':
        default:
            renderLogin();
    }
}
