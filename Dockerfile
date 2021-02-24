FROM openjdk:15

MAINTAINER REM Java 21 1 <jimmydang12@hotmail.de>

ADD backend/target/github-bingo-master.jar app.jar

CMD ["sh", "-c", "java -jar /app.jar"]