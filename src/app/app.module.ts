import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OperadorModule } from './modules/operador/operador.module';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './general/components/navbar/navbar.component';
import { GeneralService } from './interceptors/generalService.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,OperadorModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:GeneralService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
