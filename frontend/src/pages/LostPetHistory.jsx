import { useEffect, useState } from 'react';
import { getLostPets } from '../services/api';

function LostPetHistory() {
  const [reports, setReports] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const loadReports = async () => {
    setLoading(true);

    try {
      const response = await getLostPets();
      setReports(response.data || []);
      setMessage(response.message || 'Reportes cargados correctamente.');
    } catch (error) {
      setMessage('No se pudo conectar con el backend.');
    }

    setLoading(false);
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <section>
      <div className="card">
        <h2>Reportes registrados</h2>
        <p className="small-text">
          Esta vista permite consultar las alertas registradas durante la ejecucion del sistema.
        </p>

        <button className="secondary" type="button" onClick={loadReports}>
          Actualizar listado
        </button>

        {loading && <p>Cargando reportes...</p>}

        {message && <p className="small-text">{message}</p>}

        {reports.length === 0 ? (
          <div className="error-box">
            No hay reportes registrados. Primero publique una alerta de mascota perdida.
          </div>
        ) : (
          <div className="report-list">
            {reports.map((report) => (
              <div className="report-card" key={report.id}>
                <h3>{report.name}</h3>

                <p>
                  <strong>Especie:</strong> {report.species}
                </p>

                <p>
                  <strong>Raza:</strong> {report.breed}
                </p>

                <p>
                  <strong>Descripcion:</strong> {report.description}
                </p>

                <p>
                  <strong>Estado:</strong> {report.status}
                </p>

                <p>
                  <strong>Ubicacion:</strong> {report.location.lat}, {report.location.lng}
                </p>

                <p>
                  <strong>Fecha:</strong> {new Date(report.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LostPetHistory;