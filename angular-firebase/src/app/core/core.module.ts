import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './api.service';
import { LoadingComponent } from './loading.component';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    LoadingComponent,
    ErrorComponent
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    LoadingComponent,
    ErrorComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        Title,
        DatePipe,
        ApiService
      ]
    };
  }
}
