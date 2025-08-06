export function renderRegister() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Registro</h2>
        <form id="registerForm">
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="correo" placeholder="Correo" required />
            <input type="password" name="contrasena" placeholder="Contraseña" required />
            <button type="submit">Registrarse</button>
            <p>¿Ya tienes cuenta? <a href="#login">Inicia sesión</a></p>
        </form>
    `;

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/api/usuarios/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Error al registrarse');

            alert('Registrado con éxito');
            window.location.hash = '#login';
        } catch (err) {
            alert(err.message);
        }
    });
}
