import { useState } from 'react';
import { searchByImage } from '../services/api';

function ImageSearch() {
  const [image, setImage] = useState('');
  const [intention, setIntention] = useState('ADOPTION');
  const [species, setSpecies] = useState('Perro');
  const [breed, setBreed] = useState('');
  const [result, setResult] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await searchByImage({
      image,
      intention,
      metadata: {
        species,
        breed
      }
    });

    setResult(response);
  };

  return (
    <section>
      <div className="card">
        <h2>Buscador multiproposito por imagen</h2>
        <p className="small-text">
          Para esta version se simula el analisis de imagen usando metadatos en JSON.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Imagen</label>
              <input type="file" accept=".jpg,.jpeg,.png" onChange={handleImage} />
              <span className="small-text">
                Archivo seleccionado: {image || 'ninguno'}
              </span>
            </div>

            <div className="form-group">
              <label>Intencion de busqueda</label>
              <select value={intention} onChange={(e) => setIntention(e.target.value)}>
                <option value="ADOPTION">Adopcion</option>
                <option value="SALE">Venta</option>
                <option value="VERIFY_LOST">Verificar perdida</option>
              </select>
            </div>

            <div className="form-group">
              <label>Especie detectada o ingresada</label>
              <select value={species} onChange={(e) => setSpecies(e.target.value)}>
                <option>Perro</option>
                <option>Gato</option>
                <option>Conejo</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Raza aproximada</label>
              <input
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Ejemplo: Labrador"
              />
            </div>
          </div>

          <button className="primary" type="submit">
            Buscar
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

export default ImageSearch;
