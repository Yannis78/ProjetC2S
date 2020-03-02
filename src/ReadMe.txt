Installation de l'application depuis un environnement vierge :


1/ Créer un projet vierge :

	- ng new NomDuProjet


2/ Remplacer le dossier "src" vierge par le dossier "src" de l'application à installer.


3/ Importations des modules nécessaires :

	- Angular material :

		- ng add @angular/material

		- prebuilt theme : purple-green.css

		- hammerJS --> yes

		- browser animations --> yes

	- MapBox :

		- npm install mapbox-gl --save

		- npm install @types/mapbox-gl --save

	- Leaflet :

		- npm install leaflet

		- npm install @asymetrik/ngx-leaflet

		- npm install --save-dev @types/leaflet

	- GoogleMapsApi :

		- npm install --save @types/googlemaps

	- Turf : 

		- npm install @turf/along