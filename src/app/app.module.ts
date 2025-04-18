import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemspageComponent } from './components/itemspage/itemspage.component';
import { CustomersComponent } from './components/customers/customers.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllcustomersComponent } from './components/allcustomers/allcustomers.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AllquotesComponent } from './components/allquotes/allquotes.component';
import { QuoteComponent } from './components/quote/quote.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; // Correct import
import { MatInputModule } from '@angular/material/input';       // Correct import
import { MatButtonModule } from '@angular/material/button';    
import { MatSelectModule } from '@angular/material/select';
import { ProformaInvoiceListComponent } from './components/proforma-invoice-list/proforma-invoice-list.component';
import { ProformaInvoiceDetailComponent } from './components/proforma-invoice-detail/proforma-invoice-detail.component';    
import { AuthInterceptor } from './auth.interceptor';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    NavbarComponent,
    ItemspageComponent,
    CustomersComponent,
    WelcomepageComponent,
    AllcustomersComponent,
    AdminHomepageComponent,
    AllquotesComponent,
    QuoteComponent,
    ProformaInvoiceListComponent,
    ProformaInvoiceDetailComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,

 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
