import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Messages } from '../classes/messages';

@Component({
  selector: 'app-f41',
  templateUrl: './f41.component.html',
  styleUrls: ['./f41.component.css']
})
export class F41Component implements OnInit {

  constructor(private _apiService: ApiService) { }

  listmessagesF41: Messages[];

  ngOnInit() {
    this._apiService.getmessagesF41()
    .subscribe(
      data => {
        this.listmessagesF41 = data['messages'];
      }
    );
  }

}
