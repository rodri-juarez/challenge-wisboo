
Objetivo
El objetivo de esta asignación es hacer una API que permite crear y
administrar encuestas y una SPA que consuma esta API.

Descripción
Una encuesta está compuesta por varias preguntas que pueden ser de
selección múltiple, selección simple o de texto. Una encuesta puede estar
publicada o en draft. Cada encuesta tiene un código que la identifica.

1. Una API con 2 endpoints (POST /forms y GET /forms/:id), uno para guardar un formulario en la base de datos y otro para acceder a un formulario específico mediante su id.
2. Una SPA realizada con React que contendrá una única vista con dos secciones:
- Un formulario destinado a la creación de una nueva encuesta, que solicite el nombre y la descripción de la misma, junto con la posibilidad 
- de crear una o más preguntas asociadas (con las validaciones del formulario correspondientes)
- Un preview de la encuesta que se deberá actualizar en tiempo real según el usuario ingresa datos en el formulario.

Para poder ejecutar el proyecto:

1. Clonar el repo
2. Se utilizó PostgreSQL como BD y Sequelize como ORM, se debe crear un archivo .env con los datos DB_USER, DB_PASSWORD, DB_HOST y DB_NAME para la BD
3. Se debe agregar en el archivo .env el puerto donde se quiere levantar la api en la variable PORT
4. Se deben instalar las dependencias ejecutando npm install en las carpetas client y api.
5. Se levanta el proyecto haciendo npm start en las carpetas client y api.
6. Para correr los tests de la api se ejecuta npm test.
