import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
