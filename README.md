## <h1>Application Angular JS</h1>
***
<table>
  <tr>
    <td><img src="https://www.mag-corp.com/wp-content/uploads/2021/08/angular.png" alt="drawing" height="260px"/></td>
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



