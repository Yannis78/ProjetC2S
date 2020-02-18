import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { CapteursTabComponent } from './capteurs-tab/capteurs-tab.component';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HexToDec } from './parseInt.pipe';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { F41Component } from './f41/f41.component';
import { F45Component } from './f45/f45.component';
import { F46Component } from './f46/f46.component';

@NgModule({
  declarations: [
    AppComponent,
    CapteursTabComponent,
    NavBarComponent,
    FooterComponent,
    HexToDec,
    MapComponent,
    F41Component,
    F45Component,
    F46Component,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot([
      { path: 'capteurs', component: CapteursTabComponent },
      { path: '', redirectTo: '/capteurs', pathMatch: 'full' },
      { path:  'map', component: MapComponent},
      { path: 'messages/C2S F41', component: F41Component },
      { path: 'messages/C2S F45', component: F45Component },
      { path: 'messages/C2S F46', component: F46Component }
      
  ]),
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
