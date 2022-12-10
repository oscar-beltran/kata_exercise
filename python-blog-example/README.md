# spring-blog-example
Implementación usando Flask (python) del administrador del blog.

## Dependencias
Para la ejecución de esta implementación se requiere tener instalado y configurado:
* PIP3
* Python 3
* La base de datos configurada
* Cualquier herramienta que permita realizar peticiones HTTP, por ejemplo [cURL](https://curl.se/) o [Postman](https://www.postman.com/)

## Ejecución
Una vez se haya configurado adecuadamente el entorno de desarrollo, dirigirse al directorio **python-blog-example** y ejecutar los comandos: 

### Instalar dependencias
```bash
python3 -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
```

### Ejecución de pruebas
Posterior a la instalación de las dependencias
```bash
pytest -s
```

### Iniciar el componente
Posterior a la instalación de las dependencias
```bash
export FLASK_APP=server.py
flask run -p 8765
```
Y realizar algún consumo a los servicios expuestos, por ejemplo:
```bash
curl http://127.0.0.1:8765/blog/health -i
```
Obteniendo la siguiente respuesta:
```bash
HTTP/1.1 200 OK
Server: Werkzeug/2.2.2 Python/3.10.8
Date: Fri, 09 Dec 2022 20:50:38 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 2
Connection: close

OK 
```

### Documentación de referencia
For further reference, please consider the following sections:

* [Modular Applications with Blueprints](https://flask.palletsprojects.com/en/2.2.x/blueprints/)
* [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
* [pytest-mock](https://github.com/pytest-dev/pytest-mock/)
