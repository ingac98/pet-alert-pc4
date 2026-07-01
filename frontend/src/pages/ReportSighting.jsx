import { useState } from 'react';
import { createSighting } from '../services/api';
import LocationPicker from '../components/LocationPicker';

function ReportSighting() {
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const [location, setLocation] = useState({
    lat: -12.0463,
    lng: -77.0430
  });

  const [result, setResult] = useState(null);

  const handlePhoto = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPhoto(file.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await createSighting({
      photo,
      description,
      location
    });

    setResult(response);
  };

  return (
    <section>
      <div className="card">
        <h2>Registrar avistamiento anonimo</h2>
        <p className="small-text">
          El ciudadano puede reportar un posible avistamiento sin mostrar datos personales.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Foto del avistamiento</label>
              <input type="file" accept=".jpg,.jpeg,.png" onChange={handlePhoto} />
              <span className="small-text">
                Archivo seleccionado: {photo || 'ninguno'}
              </span>
            </div>

            <div className="form-group">
              <label>Descripcion breve</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ejemplo: lo vi cerca del parque"
              />
            </div>
          </div>

          <LocationPicker location={location} setLocation={setLocation} />

          <button className="primary" type="submit">
            Enviar avistamiento
          </button>
        </form>

        {result && (
          <div className={result.success ? 'result-box' : 'error-box'}>
            {JSON.stringify(result, null, 2)}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReportSighting;
