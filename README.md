# Welcome to Fudo challenge!
![fudo logo](https://github.com/hernnanvera/fudo-challenge/blob/main/public/icons/logo-fudo.png)

# Hosteado en Vercel
https://fudo-challenge.vercel.app/

## Objetivo
El ejercicio consiste en crear una aplicación simple en algún framework web (Por ej.
Angular, React, Vue, u otro) para visualizar noticias, utilizando la API de NewsApi.

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

## Especificaciones técnicas
 - Desarrollado en React + Remix en Typescript
 - Node engine >=14
  

## Iniciando el proyecto
Para correr la aplicacion de manera local, primero debemos asegurarnos de instalar las dependencias necesarias. Ademas se debe configurar el archivo [.env](https://drive.google.com/file/d/1UoDeQnUnBByU7lS9XnMAGTn7ZPj94lIN/view?usp=share_link) en la raiz del proyecto. 

```sh
npm install
```

Luego, podremos correr la aplicacion con el siguiente comando:

```sh
npm run dev
```

## Documentación adicional
[Notion del challenge](https://slime-operation-f35.notion.site/Fudo-Challenge-40e8f08dd71447698492ef9855d1794b)

## Próximas iteraciones
 - Breadcrumbs
 - Lazyload para mejorar el rendimiento en la carga de imágenes
 - Pantalla de error 
 - Mejoras en el paginado para favorecer al crawleo de google.
 - Implementacion de test unitarios
 - Filtro por Origen de la noticia y por Región
 - Página de error 404 para id de artículo inválido
 - Mejoras en meta tags en paginado
 - Mejoras en meta tags en página de error.
