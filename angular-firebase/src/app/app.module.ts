import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { LoadingComponent } from './core/loading.component';
import { ErrorComponent } from './core/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoadingComponent, ErrorComponent]
})
export class AppModule { }
