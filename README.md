# Elearn
ELearning platform repo
## some notes:
+ make sure to start MySQL before running the app.
+ the database will be created if doesn't already exist and it will **be DROPPED** after the termination of the app, this is made to facilitate testing *(for me at least)*, to change it go to [application.properties](backend/src/main/resources/application.properties) and change the following:
```properties
spring.jpa.hibernate.ddl-auto=create-drop
```
to:
```properties
spring.jpa.hibernate.ddl-auto=update
```