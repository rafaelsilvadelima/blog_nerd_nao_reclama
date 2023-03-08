import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CarrocelComponent } from './carrocel/carrocel.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderNavComponent,
    CarrocelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderNavComponent,
    CarrocelComponent
  ]
})
export class ComponentesModule { }
