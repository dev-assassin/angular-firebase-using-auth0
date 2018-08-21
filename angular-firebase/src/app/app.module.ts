import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
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
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LoadingComponent, ErrorComponent]
})
export class AppModule { }
