# CodeChallenge1-Thinking-API


## Dependencias utilizadas:
- Express: Funciona para crear servidores y asi poder crear endpoints con informacion y recepcion de datos
devDependecia:
- eslint: Fixea el codigo, haciendo que tenga algo estandar a prueba de algunos fallos y presentacion futura, como puntos y comas.
- Jest: Permite la creacion de pruebas para el proyecto, pudiendo ejecutarlas con simples scripts, ademas de su ayuda para la automatizacion en github

## Proyecto:
El proyecto cuenta con la estructura basica de un proyecto Nodo
- .Github/workflows/test.yml para la automatizacion de mis pruebas en Github Actions
- lib - Carpeta con todos los archivos JS, que sirven para dar lugar a los scripts necesarios para hacer funcionar cada enpoind, junto con archivo server.js
- test - Carpeta con todos los archivos test que se hicieron para ejecutar las pruebas de los codigos de la carpeta lib
- .eslintrc.ls - Archivo creado por eslinter para poder agregar reglas de como queremos fixear nuestro proyecto
- .Json - Archivos Json con algunos objetos guardados para controlar nuestras configuraciones, y obtener informacion necesaria para utilizar en la api

## Explicacion API

La API maneja una carpeta lib donde guardamos los siguientes carpetas, {Controllers,Services,Utils} ademas de un archivo llamado server.js, 
- Empezando por la carpeta **utils** donde encontramos un archivo JS, que nos permite obtener una variable que podemos exportar con los datos del archivo json en este caso que deseamos
- En la carpeta **service** podemos encontrar el archivo StudentService.js, este archivo nos permite exportar la clase donde guardamos las principales funciones para obtener los datos que son los estudiantes, los emails si tienen certificacionm, y aquellos estudiantes que tengan mas de 500 creditos
- La siguiente carpeta **controllers** en la que importamos las clases de los anteriores archivos, ademas de mandar a llamar sus funciones, esto principalmente lo hacemos para tener enlazado solo un archivo con el archivo server que nos permitira crear los endpoints
- Ahora tenemos el archivo server.js, archivo que nos permite importar primeramente la clase StundentsController, para utilizar todos los metodos ademas de abrir un servidor localhost que se le asigno el puerto 3000, ademas se crearon 3 rutas que al mandar a llamar podremos obtener los datos que esta api tiene como objetivo mostrar
## Utilizacion API

Para la utilizacion de esta API, es atravez de la consola utilizamos el comando __**npm run server**__ y procederemos a entrar a nuestro navegador
para escribir http://localhost:3000/ esta ruta nos permitira acceder a los mensajes de nuestra api, empezando por recibir un mensaje de bienvenida "Visual Thinking API welcome!"
- Ahora accediendo a la ruta http://localhost:3000/v1/students ,podremos ver en forma .json los estudiantes que se tienen
- Accediento a la ruta http://localhost:3000/v1/students/emails ,obtendremos todos los emails de los estudiantes que tengan su certificacion
- Y por ultimo accediento a la ruta http://localhost:3000/v1/students/creditos ,podremos ver los estudiantes que cuentan con una cantidad mayor a 500 creditos
Para salir de la api es necesario en la consola presionar "Cntrol + c' despues presionar Y, para despues dar enter y Listo. Ya estas usando esta API

