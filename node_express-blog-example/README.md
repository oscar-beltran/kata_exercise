# nodejs-express-blog-example
Implementación usando nodejs del administrador del blog.

## Dependencias
Para la ejecución de esta implementación se requiere tener instalado y configurado:
* Node JS - 14.x
* La base de datos configurada
* Cualquier herramienta que permita realizar peticiones HTTP, por ejemplo [cURL](https://curl.se/) o [Postman](https://www.postman.com/)

## Ejecución
Una vez se haya configurado adecuadamente el entorno de desarrollo, dirigirse al directorio **node_express-blog-example** y ejecutar el comando: 
```bash
node src
```
Y realizar algún consumo a los servicios expuestos, por ejemplo:
```bash
curl http://127.0.0.1:8765/blog/health -i
```
Obteniendo la siguiente respuesta:
```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 2
ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
Date: Tue, 29 Nov 2022 21:28:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5

OK
```

### Documentación de referencia
For further reference, please consider the following sections:

* [Express JS](https://expressjs.com/)
* [Node JS](https://nodejs.org/docs/latest-v14.x/api/)
* [Descargar Node JS](https://nodejs.org/en/download/)

### Guías
The following guides illustrate how to use some features concretely:

* [Express + Node JS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
* [NodeJS + Express + Postgresql](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)



