import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavsComponent } from './components/navs/navs.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountingComponent } from './components/accounting/accounting.component';

//services 
import {AccountingService} from './services/accounting.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    FooterComponent,
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
