import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For form handling

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NickListComponent } from './comopnent/nick-list/nick-list.component';
import { NickFormComponent } from './comopnent/nick-form/nick-form.component';
import { NickLogComponent } from './nick-log/nick-log.component';

@NgModule({
  declarations: [
    AppComponent,
    NickListComponent,
    NickFormComponent,
    NickLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
