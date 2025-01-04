# App de Mensajes - README

## Descripción

**App de Mensajes** Es un tablón de mensajes donde se podrán observar los mensajes escritos por los distintos usuarios, creado usando **Node.JS**, **Express**, **Postgres** y **JWT Auth** para el BackEnd y **React.js**, **Vite** y **TailwindCSS** para el FrontEnd.

**Message App** Is a message board where messages written by different users can be viewed, built using Node.JS, Express, Postgres, and JWT Auth for the BackEnd, and React.js, Vite, and TailwindCSS for the FrontEnd.



## Características

- Registro e inicio de sesión de usuarios.
- Enviar y recibir mensajes en tiempo real.
- Interfaz intuitiva y fácil de usar.
- Historial de mensajes persistente.

## Tecnologías utilizadas

- **Frontend**: [React, TailwindCSS, Vite] (elige tu tecnología preferida)
- **Backend**: Node.js con Express
- **Base de datos**: MongoDB / PostgreSQL
- **Autenticación**: JWT (JSON Web Tokens)

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
