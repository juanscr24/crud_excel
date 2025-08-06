export function isAuthenticated() {
    return localStorage.getItem('user') !== null;
}

export function loginUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
}

export function logoutUser() {
    localStorage.removeItem('user');
}
