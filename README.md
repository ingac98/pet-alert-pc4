# PetAlert

PetAlert es un sistema web desarrollado para la Práctica Calificada 4 del curso de Desarrollo de Software.

El sistema permite registrar mascotas perdidas, capturar coordenadas, registrar avistamientos anónimos, simular alertas cercanas y realizar una búsqueda por imagen simulada.

## Funcionalidades

- Registro de mascotas perdidas.
- Captura de ubicación.
- Registro de avistamientos anónimos.
- Simulación de notificaciones.
- Buscador por imagen con intención.
- Interfaz de cuidadores.
- Vista de reportes registrados.

## Patrones usados

- Command
- Observer
- Strategy
- Chain of Responsibility
- State

## Arquitectura

El proyecto utiliza arquitectura Cliente-Servidor con API REST.

- Frontend: React + Vite.
- Backend: Node.js + Express.
- Almacenamiento: memoria temporal.

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd pet-alert-pc4

Instalar backend:

cd backend
npm install

Instalar frontend:

cd ../frontend
npm install
Ejecución

Ejecutar backend:

cd backend
npm run dev

Backend:

http://localhost:4000

Ejecutar frontend:

cd frontend
npm run dev

Frontend:

http://localhost:5173
Endpoints principales
POST /api/lost-pets
GET  /api/lost-pets
GET  /api/lost-pets/active

POST /api/sightings
GET  /api/sightings

POST /api/search/image
Alcance del proyecto

Este proyecto es un MVP académico. No utiliza base de datos externa ni reconocimiento real por imagen. Los datos se guardan temporalmente en memoria y se pierden al reiniciar el backend.

Documentación

La documentación se encuentra en:

docs/arquitectura.md
docs/patrones.md