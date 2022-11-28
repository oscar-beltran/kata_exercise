# spring-blog-example
Implementación usando spring boot del administrador del blog.

## Dependencias
Para la ejecución de esta implementación se requiere tener instalado y configurado:
* Java 11
* Apache Maven (versión sugerida 3.8.6)
* La base de datos configurada
* Cualquier herramienta que permita realizar peticiones HTTP, por ejemplo [cURL](https://curl.se/) o [Postman](https://www.postman.com/)

## Ejecución
Una vez se haya configurado adecuadamente el entorno de desarrollo, dirigirse al directorio **spring-blog-example** y ejecutar el comando: 
```bash
mvn spring-boot:run
```
Y realizar algún consumo a los servicios expuestos, por ejemplo:
```bash
curl http://127.0.0.1:8765/blog/health -i
```
Obteniendo la siguiente respuesta:
```bash
HTTP/1.1 200 OK
Connection: keep-alive
Content-Type: text/plain;charset=UTF-8
Content-Length: 2
Date: Mon, 28 Nov 2022 14:51:56 GMT

OK
```

### Documentación de referencia
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.7.5/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.7.5/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.7.5/reference/htmlsingle/#web)

### Guías
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)