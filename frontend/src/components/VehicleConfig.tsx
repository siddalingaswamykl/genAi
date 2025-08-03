import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function VehicleConfig() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [formData, setFormData] = useState<{ make: string; model: string; year: string; configuration: object }>({
    make: '',
    model: '',
    year: '',
    configuration: {},
  });

  useEffect(() => {
    axios.get(`${API_URL}/api/vehicles`).then(res => setVehicles(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`${API_URL}/api/vehicles`, formData);
    setVehicles([...vehicles, res.data]);
    setFormData({ make: '', model: '', year: '', configuration: {} });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Make"
          value={formData.make}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData(f => ({ ...f, make: e.target.value }))
          }
        />
        <input
          placeholder="Model"
          value={formData.model}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData(f => ({ ...f, model: e.target.value }))
          }
        />
        <input
          placeholder="Year"
          type="text"
          value={formData.year}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData(f => ({ ...f, year: e.target.value }))
          }
        />
        <textarea
          placeholder="Configuration (JSON)"
          value={JSON.stringify(formData.configuration)}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setFormData(f => ({
              ...f,
              configuration: (() => {
                try {
                  return JSON.parse(e.target.value || '{}');
                } catch {
                  return {};
                }
              })(),
            }))
          }
        />
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