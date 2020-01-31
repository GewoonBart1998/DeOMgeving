# Installatie van DeOMgeving

## Software
De volgende software werdt gebruikt tijdens de bouw en productie van de applicaties.
Daarom wordt het aangeraden om dit ook te gebruiken. 

#### apache2 webserver
In principe kan elke webserver gebruikt worden, maar deze instructies zijn geschreven voor apache2.
Na de installatie moet de `mod_rewrite` module nog aan staan.
Dit is omdat er een `.htaccess` bestand meegeleverd wordt die elke verzoek omleid naar de `index.html`.

#### java 8
Java 8 is nodig om de backend uit te voeren. Daarnaast moet de port 8080 open worden gezet.

#### MySQL database
De backend gebruikt deze database. De standaard port waarop de backend verbind is 3306.

#### Node & angular
Om de frondend te bouwen is node en angular nodig. Meer informatie hierover wordt later verteld.

## Bestanden
Er worden 3 mappen geleverd. `DeOMgeving`, `DeOMgeving_backend` en `database`. 

#### Map `DeOMgeving`

Deze map bevat de source om de html, js en css bestanden te bouwen.
Onder de kop Bouwen bevind zich de instructies om van source te bouwen.

#### Map `DeOMgeving_backend`

Hierin staat het jar bestand dat de backend opstart. Daarnaast bevind zich de `config.yml`.
Hier in staat de standaard configuratie voor de backend, zoals de database gegevens, de port en de JWT beveiligings configuratie.
Wij raden aan om de `secret` hierin aan te passen naar een nieuwe waarde met een lengte van 60 karakters.
Daarnaast moeten de database gegevens aangepast worden.
Met de volgende commando wordt de de backend gestart

`java -jar DeOMgeving_backend.jar server config.yml`

#### Map `database`

Hierin staat het script om de database aan te maken samen met de database functies.
Deze moet uitgevoerd worden in de database.
Hierin staat een standaard gebruiker met de email `verwijder@dit` en wachtwoord `rbXkQMC78bT25vq9!`.

# Bouwen

Deze stap is er voor als het project gebouwd moet worden vanaf de source. De volgende instructies zijn er om zelf installatie bestanden te maken van de frondend en optioneel van de backend.

## Frondend

Er zijn verschillende soorten software nodig om dit te doen. Voor de eerste is `node` nodig. Als `node` geinstalleerd wordt, wordt `npm` ook geinstallerd, dit is nodig om de frontend te compileren. Daarnaast is `angular` nodig. Dit kan geinstallerd worden door dit uit te voeren `npm i angular` in een commandprompt. Nu alles geinstallerd is moet deze github gecloned worden. Vervolgend moeten de volgende commando's uitgevoerd worden:`npm install`, `ng build --prod`. De html, js en css bestanden worden vervolgens gemaakt in de folder /dist/DeOMgeving. Dit moet ten slotte nog in een webserver gekopieërd worden met het `.htaccess` die in de root staat.

## Backend

De backend hoeft niet gebouwd te worden omdat deze al gebouwd geleverd is, maar deze optie is er wel.
Maven (`mvn`) nodig om het te bouwen. Wanneer dit geinstalleerd is moeten alleen nog de volgende commando's uitgevoerd worden.

`mvn clean`

`mvn install`

`mvn package`

Nu is het bestand `target/DeOMgeving_backend-1.0-SNAPSHOT.jar` gemaakt. Dit is de uitvoerbare server.

# First boot

Als het alles is uitgevoerd en de servers draaien, kan er worden ingelogd met de gebruiker hierboven aangegeven.
Wij raden aan om een nieuwe gebruiker te maken, deze admin rechten te geven en de `verwijder@dit` te verwijderen.
Daarna kan de admin voortaan inloggen met de nieuwe gemaakte gebruiker met een eigen aangegeven wachtwoord. 

