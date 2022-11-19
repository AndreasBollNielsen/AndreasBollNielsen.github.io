import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalUploadComponent } from './Components/modal-upload/modal-upload.component';
import { DataGridComponent } from './Components/image-Grid/data-grid.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ImageDetailsComponent } from './Components/image-details/image-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ModalUploadComponent,
    ImageDetailsComponent,
    DataGridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },{ provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
