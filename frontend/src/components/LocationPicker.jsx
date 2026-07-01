function LocationPicker({ location, setLocation }) {
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('El navegador no permite obtener ubicacion.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude)
        });
      },
      () => {
        alert('No se pudo obtener la ubicacion. Puede ingresarla manualmente.');
      }
    );
  };

  return (
    <div className="card">
      <h3>Ubicacion del reporte</h3>
      <p className="small-text">
        Puede obtenerse desde el navegador o escribirse manualmente para la demostracion.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Latitud</label>
          <input
            type="number"
            value={location.lat}
            onChange={(e) =>
              setLocation({ ...location, lat: Number(e.target.value) })
            }
          />
        </div>

        <div className="form-group">
          <label>Longitud</label>
          <input
            type="number"
            value={location.lng}
            onChange={(e) =>
              setLocation({ ...location, lng: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <button className="secondary" type="button" onClick={getCurrentLocation}>
        Usar mi ubicacion actual
      </button>
    </div>
  );
}

export default LocationPicker;
