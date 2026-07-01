import { useState } from 'react';

function Caregivers() {
  const [receivesAlerts, setReceivesAlerts] = useState(true);

  return (
    <section>
      <div className="card">
        <h2>Red de cuidadores de mascotas</h2>
        <p className="small-text">
          Modulo visual para representar el registro de cuidadores y sus restricciones de servicio.
        </p>

        <div className="form-grid">
          <div className="form-group">
            <label>Nombre del cuidador</label>
            <input value="Ana Torres" readOnly />
          </div>

          <div className="form-group">
            <label>Rol</label>
            <select defaultValue="Profesional">
              <option>Cuidador Solidario</option>
              <option>Profesional</option>
              <option>Especializado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Especies aceptadas</label>
            <input value="Perros y gatos" readOnly />
          </div>

          <div className="form-group">
            <label>Documento de identidad</label>
            <input value="Validacion pendiente" readOnly />
          </div>

          <div className="form-group full-width">
            <label>Restricciones del servicio</label>
            <textarea
              value="Acepta mascotas pequeñas y medianas. No administra medicamentos inyectables."
              readOnly
            />
          </div>

          <div className="form-group full-width">
            <label>
              <input
                type="checkbox"
                checked={receivesAlerts}
                onChange={(e) => setReceivesAlerts(e.target.checked)}
              />
              {' '}Recibir alertas de mascotas perdidas cercanas
            </label>
          </div>
        </div>

        <div className="caregiver-card">
          <h3>Perfil publico simulado</h3>
          <p><strong>Cuidador:</strong> Ana Torres</p>
          <p><strong>Rol:</strong> Profesional</p>
          <p><strong>Calificacion promedio:</strong> 4.6 / 5</p>
          <p>
            <span className="badge">Documento pendiente</span>
            <span className="badge">
              Alertas: {receivesAlerts ? 'activadas' : 'desactivadas'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Caregivers;
