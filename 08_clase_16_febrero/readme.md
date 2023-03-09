# PROYECTO PRECIO DE LA LUZ. <center>![image info](https://play-lh.googleusercontent.com/4S5picdrlHRKUCDjG9qi9Q54U9D0565UIuTH0SUqtOe05enZHqkeWF_XVXOLN1SEKQ=w240-h480-rw)

</center>
Deseamos crear una aplicación, para llevar una gestión telemática de la horas baratas de luz, para ello a través de la publica
(api.preciodelaluz.org) se necesita crear una interfaz con las siguientes características.

1. Comenzamos redireccionando a /login campo emoticono, user, contraseña nos permitirá guardar dentro de un estado null o datos del usuario si estamos logeados o no

2. Una vez logeados nos llevara a /precioluz donde mostraremos las 6 horas mas baratas (RUTA PROTEGIDA).

- Color verde 6 mas baratas, 6 mas caras rojas, otras naranja
- Al hacer click sobre cada uno me aparecerá una tarjeta con el precio de la luz y un gráfico (diferencia entre precio de la luz y el precio promedio)
  3- Creamos un navbar con menu desplegable para cerrar sesion

## --- REQUISITOS ---

- [x] Tiene que tener Router DOM (Si no existe error 404)
- [x] Login con firebase solo con 2 usuarios, admin y usuario normal
- [x] Crear un formulario con hook-form.
- [x] Añadimos un logo en el navbar.
- [x] Mandar correo con PDF con las 6 horas mas baratas dentro del menu desplegable del nav
- [x] Utilizar más de un componente de React. Recomendable estructurar con pages, helpers, assets, components, etc.

## --- INSTALACIÓN ---

Entrar en la carpeta de backend y lanzar los comandos:

    npm install

_#Para la ejecución del servidor lanzamos_

    npm run server

_#El servidor se monta en la dirección:_
localhost:3000/api

    http://localhost:3000/api

_#Sobre esa dirección deberemos hacer la petición fetch._

> Profesor: Isaías FL.
