import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule, MatCommonModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StopDeparturesComponent } from './components/stop-departures/stop-departures.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SavePassageDialogComponent } from './components/save-passage-dialog/save-passage-dialog.component';
import { PassageDetailsComponent } from './components/passage-details/passage-details.component';
import { PassageListItemComponent } from './components/list-items/passage-list-item/passage-list-item.component';
import { TripPassageListItemComponent } from './components/list-items/trip-passage-list-item/trip-passage-list-item.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    StopDeparturesComponent,
    HomeComponent,
    NotFoundComponent,
    SavePassageDialogComponent,
    PassageDetailsComponent,
    PassageListItemComponent,
    TripPassageListItemComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgbModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SavePassageDialogComponent
  ]
})
export class AppModule { }
