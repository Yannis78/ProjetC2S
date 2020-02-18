import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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
      center: [2.0353911021865, 48.794867804003],
      zoom: 13
    });

    map.on('load', function () {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [2.0353911021865, 48.794867804003],
              [2.0353669092924, 48.787642494471],
              [2.0353669092924, 48.787642494471],
              [2.0662168304415, 48.773233220609],
              [2.0361389066074, 48.794151067047],
              [2.036494743122, 48.780728511341],
              [2.0353669092924, 48.787642494471],
              [2.0388954728581, 48.78152270965],
              [2.0349402198548, 48.781590302501]
            ]
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
