import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoieWFubmlzNzgiLCJhIjoiY2s2aHBpN29tMGpjdTNscDhpenUzeDc0ciJ9.vL-cWl15k3SBLZhbK4uElg');

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [2.0551832, 48.7858588],
      zoom: 13
    });

    map.on('load', function () {
      var tabCoordonnees =  this.getLastCoordonnees();
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': tabCoordonnees
          }
        }
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'rgb(144, 54, 170)',
          'line-width': 5
        }
      });
    }); 

  }

}