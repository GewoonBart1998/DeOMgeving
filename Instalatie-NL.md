# Installatie van DeOMgeving

## Software
De volgende software werdt gebruikt tijdens de bouw en productie van de applicaties.
Daarom wordt het aangeraden om dit ook te gebruiken. 

#### apache2 webserver
De `mod_rewrite` module moet aan staan.
Dit is omdat er een `.htaccess` bestand meegeleverd wordt dat elke verzoek omleid naar de `index.html`.

#### java 8
Java 8 is nodig om de backend uit te voeren. Daarnaast moet de port 8080 open worden gezet.

#### MySQL database
De backend gebruikt deze database. De standaard port waarop de backen verbind is 3306.

## Bestanden

Er worden 3 mappen geleverd. `DeOMgeving`, `DeOMgeving_backend` en `database`. 

#### Map `DeOMgeving`

Deze map bevat de html en javascript bestanden. Deze moeten gehost worden op de webserver.

#### Map `DeOMgeving_backend`

Hierin staat het jar bestand dat de backend opstart. Daarnaast bevind zich de `config.yml`.
Hier in staat de standaard configuratie voor de backend, zoals de database gegevens, de port en de JWT beveiligings configuratie.
Wij raden aan om de `secret` hierin aan te passen naar een nieuwe waarde met een lengte van 60 karakters.
Met de volgende commando wordt de de backend gestart

`java -jar DeOMgeving_backend.jar server config.yml`

#### Map `database`

Hierin staat het script om de database aan te maken samen met de database functies.
Deze moet uitgevoerd worden in de database.
Hierin staat een standaard gebruiker met de email `verwijder@dit` en wachtwoord `rbXkQMC78bT25vq9!`.

## Setup

Als het alles is uitgevoerd kan er worden ingelogd met de gebruiker hierboven aangegeven.
Wij raden aan om een nieuwe gebruiker te maken, deze admin rechten te geven en de `verwijder@dit` te verwijderen.
Daarna kan de admin voortaan inloggen met de nieuwe gemaakte gebruiker met een eigen aangegeven wachtwoord. 
