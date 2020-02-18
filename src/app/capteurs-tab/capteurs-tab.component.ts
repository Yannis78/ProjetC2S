import { Component, OnInit } from '@angular/core';
import { Device } from '../classes/devices';
import { ApiService } from '../services/api.service';         

@Component({
  selector: 'app-capteurs-tab',
  templateUrl: './capteurs-tab.component.html',
  styleUrls: ['./capteurs-tab.component.css']
})
export class CapteursTabComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    ) { }

  listdevices: Device[];

  ngOnInit() {
    this._apiService.getdevices()
      .subscribe(
        data => {
          this.listdevices = data;
        }
      );
      
  }
}
