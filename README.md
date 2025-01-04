# App de Mensajes - README

## Descripción

**App de Mensajes** es una aplicación sencilla diseñada para enviar y recibir mensajes entre usuarios. Ideal para aprender los conceptos básicos de desarrollo de aplicaciones de mensajería en tiempo real o como base para proyectos más complejos.

**Message App** is a simple application designed to send and receive messages between users. Ideal for learning the basics of real-time messaging app development or as a foundation for more complex projects.

Un simple tablón de mensajes donde se podrán observar los mensajes escritos por los distintos usuarios, creado usando **Node.JS**, **Express**, **Postgres** y **JWT Auth** para el BackEnd y **React.js**, **Vite** y **TailwindCSS** para el FrontEnd.

## Características

- Registro e inicio de sesión de usuarios.
- Enviar y recibir mensajes en tiempo real.
- Interfaz intuitiva y fácil de usar.
- Historial de mensajes persistente.

## Tecnologías utilizadas

- **Frontend**: [React / Angular / Vue.js] (elige tu tecnología preferida)
- **Backend**: Node.js con Express
- **Base de datos**: MongoDB / PostgreSQL
- **Autenticación**: JWT (JSON Web Tokens)
- **Mensajería en tiempo real**: WebSockets (Socket.IO)

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Git](https://git-scm.com/)
- Un gestor de paquetes como npm o yarn
- MongoDB o PostgreSQL configurado

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/app-mensajes.git
   cd app-mensajes
2. Instala las dependencias
   ```bash
   # Para el Backend
   cd api
   npm install

   # Para el Frontend
   cd ../webapp
   npm install
3. Configura las variables de entorno
   Copia el archivo example.env y renombralo como .env
   edita el archivo .env con los datos de tu configuracion (puerto, URL de la base de datos, clave JWT, etc)
4. Inicia la aplicacion
   ```bash
   # En el Backend
   npm run start
   # En el frontend
   cd ../webapp
   npm run start
5. Abre la aplicacion en tu navegador en http://localhost:3000

## Uso
--Por construir
