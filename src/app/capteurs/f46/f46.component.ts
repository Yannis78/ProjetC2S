import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Messages } from '../../classes/messages';

@Component({
  selector: 'app-f46',
  templateUrl: './f46.component.html',
  styleUrls: ['./f46.component.css']
})
export class F46Component implements OnInit {

  constructor(private _apiService: ApiService) { }

  listmessagesF46: Messages[];
  
  ngOnInit() {
    this._apiService.getmessagesF46()
      .subscribe(
        data => {
          this.listmessagesF46 = data['messages'];
        }
      );
  }

}
