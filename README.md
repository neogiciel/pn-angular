## <h1>Application Spring Boot Rabbit MQ</h1>
***
<table>
  <tr>
    <td><img src="https://blog.mossroy.fr/wp-content/uploads/2019/09/spring-boot-logo.png" alt="drawing" height="280px"/></td>
    <td><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/rabbitmq_logo_icon_170812.png" alt="drawing" height="280px"/></td>
  </tr>
</table>

## Informations Générales
***
Mise en place d'un broker Rabit MQ permettan la gestion de message Asynchrone

## Technologies
***
Technologies utilisées:
* Java 17 
* Maven 3.6
* Spring-boot: 3.2
## Instalation
***
Deploiement de Rabbit MQ via docker compose
```
version: '3'

services:
  rabbitmq:
    image: rabbitmq:management
    container_name: rabbitmq
    environment:
      - RABBITMQ_DEFAULT_USER=guest
      - RABBITMQ_DEFAULT_PASS=guest
    ports:
      - "5672:5672"
      - "15672:15672"

networks:
  default:
    driver: bridge
```
Lancement de RabbitMQ
docker-compose up -d

Lancement de l'application Spring-boot<br>
```
$ mvn  clean
$ mvn spring-boot:run
```
Le service est accessible sur http://localhost:8080

## FAQs
***
**Serveur RabbitMQ**<br>
Le seveur est accessible via http://localhost:5672

**Interface d'Administration de RabbitMQ**<br>
Le seveur est accessible via http://localhost:15672<br>
Login: guest<br>
Password: guest<br>



