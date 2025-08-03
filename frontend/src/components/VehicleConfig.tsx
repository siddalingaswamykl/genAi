import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function VehicleConfig() {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({ make: '', model: '', year: '', configuration: {} });

  useEffect(() => {
    axios.get(`${API_URL}/api/vehicles`).then(res => setVehicles(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post(`${API_URL}/api/vehicles`, formData);
    setVehicles([...vehicles, res.data]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Make" onChange={e => setFormData(f => ({ ...f, make: e.target.value }))} />
        <input placeholder="Model" onChange={e => setFormData(f => ({ ...f, model: e.target.value }))} />
        <input placeholder="Year" type="number" onChange={e => setFormData(f => ({ ...f, year: Number(e.target.value) }))} />
        <textarea placeholder="Configuration (JSON)" onChange={e => setFormData(f => ({ ...f, configuration: JSON.parse(e.target.value || '{}') }))} />
        <button type="submit">Add Vehicle</button>
      </form>
      <ul>
        {vehicles.map((v: any) => (
          <li key={v.id}>{v.make} {v.model} ({v.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleConfig;