import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Messages } from '../classes/messages';

@Component({
  selector: 'app-f45',
  templateUrl: './f45.component.html',
  styleUrls: ['./f45.component.css']
})
export class F45Component implements OnInit {

  constructor(private _apiService: ApiService) { }

  listmessagesF45: Messages[];
  
  ngOnInit() {
    this._apiService.getmessagesF41()
      .subscribe(
        data => {
          this.listmessagesF45 = data['messages'];
        }
      );
  }

}