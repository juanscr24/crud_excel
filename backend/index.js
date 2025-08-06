require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const librosRoutes = require('./routes/libros.routes');
const usuarioRoutes = require('./routes/usuarios.routes');
const prestamosRoutes = require('./routes/prestamos.routes');
const autoresRoutes = require('./routes/autores.routes');

app.use(cors());
app.use(express.json());

app.use('/api/libros', librosRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/prestamos', prestamosRoutes);
app.use('/api/autores', autoresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
