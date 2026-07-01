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