# Welcome to Fudo challenge!
![fudo logo](https://github.com/hernnanvera/fudo-challenge/blob/main/public/icons/logo-fudo.png)

# Hosteado en Vercel
https://fudo-challenge-hernnanvera.vercel.app/

## Objetivo
El ejercicio consiste en crear una aplicación simple en algún framework web (Por ej.
Angular, React, Vue, u otro) para visualizar noticias, utilizando  API de NewsApi.

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

## Requerimientos Fundamentales
 - Deberá tener un Header y un Footer.
 - La página principal debería mostrar todos los artículos devueltos en la primera
página del request en formato de cards, incluyendo título, autor, descripción e
imagen.
 -  El diseño de la página y de las cards queda totalmente libre de definición. La única
restricción es que tendría que ser responsive e idealmente no utilizar ningún
framework CSS.
 - Al clickear una card, debería redirigir a una nueva página mostrando únicamente el
contenido de la noticia seleccionada.
 - El proyecto debería subirse a un repositorio en cualquier plataforma.
 - Optativo: Hostear la aplicación en gh-pages o cualquier otro hosting.

## Iniciando el proyecto

Para correr la aplicacion de manera local, primero debemos asegurarnos de instalar las dependencias necesarias.

```sh
npm install
```

Luego, podremos correr la aplicacion con el siguiente comando:

```sh
npm run dev
```