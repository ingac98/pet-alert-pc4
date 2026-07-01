# Arquitectura del Proyecto PetAlert

## Descripción general

PetAlert es un sistema web para reportar mascotas perdidas, registrar avistamientos anónimos y simular alertas cercanas a usuarios registrados.

El proyecto fue desarrollado como un MVP académico para la PC4 del curso de Desarrollo de Software. Por ello, algunas funcionalidades se implementan completamente y otras se representan de forma simulada.

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

Requerimientos implementados
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


---

# 2. `docs/patrones.md`

```md
# Patrones de Comportamiento Usados

El proyecto utiliza cinco patrones de comportamiento.

## 1. Command

### Archivos

- backend/src/patterns/command/CreateLostPetCommand.js
- backend/src/patterns/command/CreateSightingCommand.js

### Uso

Se usa para encapsular acciones del sistema, como registrar una mascota perdida o registrar un avistamiento anónimo.

### Beneficio

Permite separar la lógica de ejecución del controlador.

---

## 2. Chain of Responsibility

### Archivos

- backend/src/patterns/chain/ReportValidator.js
- backend/src/patterns/chain/RequiredFieldsValidator.js
- backend/src/patterns/chain/LocationValidator.js
- backend/src/patterns/chain/ImageValidator.js

### Uso

Se usa para validar los reportes por etapas:

1. Campos obligatorios.
2. Ubicación.
3. Imagen.

### Beneficio

Permite organizar las validaciones de forma separada y ordenada.

---

## 3. State

### Archivos

- backend/src/patterns/state/ActiveState.js
- backend/src/patterns/state/ResolvedState.js
- backend/src/patterns/state/ExpiredState.js

### Uso

Representa los estados de una alerta:

- ACTIVE
- RESOLVED
- EXPIRED

### Beneficio

Permite controlar el comportamiento de la alerta según su estado.

---

## 4. Observer

### Archivos

- backend/src/patterns/observer/AlertSubject.js
- backend/src/patterns/observer/UserObserver.js
- backend/src/services/notificationService.js

### Uso

Cuando se registra una mascota perdida, el sistema notifica de forma simulada a usuarios cercanos.

### Beneficio

Permite desacoplar la creación de la alerta del envío de notificaciones.

---

## 5. Strategy

### Archivos

- backend/src/patterns/strategy/ImageSearchContext.js
- backend/src/patterns/strategy/AdoptionSearchStrategy.js
- backend/src/patterns/strategy/SaleSearchStrategy.js
- backend/src/patterns/strategy/LostPetSearchStrategy.js

### Uso

Se usa en el buscador por imagen. Según la intención seleccionada, cambia la estrategia:

- ADOPTION
- SALE
- VERIFY_LOST

### Beneficio

Permite cambiar el comportamiento de búsqueda sin modificar el controlador principal.