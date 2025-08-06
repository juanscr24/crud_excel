import { router } from './router.js';

// Escucha los cambios de hash en la URL
window.addEventListener('hashchange', router);

// Ejecuta el router en la carga inicial
window.addEventListener('DOMContentLoaded', router);
