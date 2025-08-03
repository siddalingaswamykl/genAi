import express from 'express';
import { Vehicle } from '../models/vehicle';

const router = express.Router();

router.get('/', async (req, res) => {
  const vehicles = await Vehicle.findAll();
  res.json(vehicles);
});

router.post('/', async (req, res) => {
  const vehicle = await Vehicle.create(req.body);
  res.json(vehicle);
});

export default router;