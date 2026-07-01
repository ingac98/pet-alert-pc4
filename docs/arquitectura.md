# Arquitectura del Proyecto PetAlert

## Descripción general

PetAlert es un sistema web para reportar mascotas perdidas, registrar avistamientos anónimos y simular alertas cercanas a usuarios registrados.


## Tipo de arquitectura

El sistema usa una arquitectura Cliente-Servidor basada en API REST.

- El frontend consume servicios HTTP del backend.
- El backend centraliza la lógica de negocio.
- Los datos se almacenan temporalmente en memoria.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Node.js
- Express
- Git y GitHub
- API de geolocalización del navegador

## Estructura general

```text
pet-alert-pc4/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── patterns/
│       ├── routes/
│       └── services/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
└── docs/

```
## Requerimientos implementados
RF 1.1

El sistema permite registrar una mascota perdida ingresando nombre, especie, raza, foto y descripción.

RF 1.2

El sistema captura coordenadas geográficas mediante la API de geolocalización del navegador. También permite ingresar latitud y longitud manualmente.

RF 1.3

El sistema permite registrar avistamientos anónimos con foto, descripción y ubicación.

RF 1.4

El sistema simula notificaciones a usuarios cercanos dentro de un radio configurable.

RF 2.1 - RF 2.5

El sistema incluye un buscador por imagen simulado, donde el usuario selecciona una intención: adopción, venta o verificar pérdida.

RF 3.1 - RF 3.4

El sistema incluye una interfaz visual para la red de cuidadores, con roles, restricciones, calificación simulada y toggle para recibir alertas.

Almacenamiento

Para esta versión, los datos se guardan en memoria dentro del backend usando arreglos de JavaScript.

Esto significa que los reportes existen mientras el servidor está encendido. Al reiniciar el backend, los datos se pierden.
