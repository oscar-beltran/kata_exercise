## Dependencias
* [Docker compose](https://docs.docker.com/compose/)

## Ejecución

Para realizar la ejecución y configuración de la base de datos proporcionada se puede usar el comando:

```bash
docker compose up -d
```
Una vez finalizadas las pruebas se puede ejecutar el siguiente comando para eliminar la base de datos y sus elementos relacionados:

```bash
docker-compose down -v --rmi all --remove-orphans
```