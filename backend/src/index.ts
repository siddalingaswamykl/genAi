import express from 'express';
import { sequelize } from './config/database';
import vehicleRoutes from './routes/vehicle';

const app = express();
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
});