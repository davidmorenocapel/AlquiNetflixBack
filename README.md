# AlquiNetflixBack
---

proyecto alojado en: [Pulsa aqui para accedet al repositorio](https://github.com/davidmorenocapel/AlquiNetflixBack) (en dos ramas, master y develop)

Este es el backend del proyecto de "Classic Netflix", una web para alquiler de películas, con información de las mismas y posibilidad de registro de usuarios.


## Tecnologías usadas e instalación

* express
* mysql2
* nodemon
* sequelize
* bcryptjs
* cors
* jsonwebtoken

> npm i

ejecuta este comando tras la descarga o clonación para que el proyecto funcione en tu máquina

## Diseño del backend (modelos)

Los datos se distribuyen en 4 tablas: FILMS, USERS, ORDERS (resultante de la relacion entre FILMS y USERS de muchos a muchos) y TOKENS (necesaria para la creacion y almacenamiento de los tokens de usuario para el login de las sesiones).

![image](./resources)

## Uso de SEQUELIZE para las consultas a la base de datos y envio al frontend (vistas y controladores)

Raíces de las rutas para los endpoints necesarios en el front

>app.use('/films', require('./routes/films'));

>app.use('/users', require('./routes/users'));

>app.use('/orders', require('./routes/orders'));


Ejemplo con lista de /USERS:

>router.get('/', usersController.usersList);






## Autores

[David  Moreno](https://github.com/davidmorenocapel)

[Iñigo Vadillo](https://github.com/Vadithalion)