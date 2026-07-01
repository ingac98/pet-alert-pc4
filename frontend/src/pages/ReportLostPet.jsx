import { useState } from 'react';
import { createLostPet } from '../services/api';
import LocationPicker from '../components/LocationPicker';

function ReportLostPet() {
  const [form, setForm] = useState({
    name: '',
    species: 'Perro',
    breed: '',
    photo: '',
    description: ''
  });

  const [location, setLocation] = useState({
    lat: -12.0464,
    lng: -77.0428
  });

  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handlePhoto = (event) => {
    const file = event.target.files[0];

    if (file) {
      setForm({
        ...form,
        photo: file.name
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...form,
      location
    };

    const response = await createLostPet(payload);
    setResult(response);
  };

  return (
    <section>
      <div className="card">
        <h2>Registrar mascota perdida</h2>
        <p className="small-text">
          Esta pantalla cubre el registro de mascota perdida y la captura de coordenadas.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Nombre de la mascota</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ejemplo: Rocky"
              />
            </div>

            <div className="form-group">
              <label>Especie</label>
              <select name="species" value={form.species} onChange={handleChange}>
                <option>Perro</option>
                <option>Gato</option>
                <option>Conejo</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Raza</label>
              <input
                name="breed"
                value={form.breed}
                onChange={handleChange}
                placeholder="Ejemplo: Labrador"
              />
            </div>

            <div className="form-group">
              <label>Foto</label>
              <input type="file" accept=".jpg,.jpeg,.png" onChange={handlePhoto} />
              <span className="small-text">
                Archivo seleccionado: {form.photo || 'ninguno'}
              </span>
            </div>

            <div className="form-group full-width">
              <label>Descripcion</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Color, collar, ultima vez visto, caracteristicas..."
              />
            </div>
          </div>

          <LocationPicker location={location} setLocation={setLocation} />

          <button className="primary" type="submit">
            Publicar alerta
          </button>
        </form>

        {result && (
          <div className={result.success ? 'result-box' : 'error-box'}>
            <h3>{result.success ? 'Alerta publicada' : 'No se pudo publicar la alerta'}</h3>

            <p>{result.message}</p>

            {result.success && result.data && (
              <div>
                <p><strong>Mascota:</strong> {result.data.name}</p>
                <p><strong>Especie:</strong> {result.data.species}</p>
                <p><strong>Raza:</strong> {result.data.breed}</p>
                <p><strong>Estado:</strong> {result.data.status}</p>
                <p>
                  <strong>Ubicacion:</strong> {result.data.location.lat}, {result.data.location.lng}
                </p>
              </div>
            )}

            {result.notifications && (
              <div>
                <h4>Notificaciones simuladas</h4>
                <p>
                  <strong>Total enviadas:</strong> {result.notifications.total}
                </p>

                {result.notifications.items.length > 0 ? (
                  result.notifications.items.map((item) => (
                    <div className="notification-card" key={item.userId}>
                      <p><strong>Usuario:</strong> {item.userName}</p>
                      <p><strong>Mensaje:</strong> {item.message}</p>
                      <p><strong>Distancia:</strong> {item.distanceKm} km</p>
                    </div>
                  ))
                ) : (
                  <p>No se encontraron usuarios cercanos para notificar.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReportLostPet;
