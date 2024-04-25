import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(express.json());

// Routen für TODOs
app.use('/todos', todoRoutes);

// Middleware für die Root-Route
app.get('/', (req, res) => {
  res.send('Willkommen zur TODO-App!');
});

// Middleware für 404-Fehlerbehandlung
app.use((req, res) => {
  res.status(404).send('404 - Seite nicht gefunden');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});