import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemspageComponent } from './components/itemspage/itemspage.component';
import { CustomersComponent } from './components/customers/customers.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AllcustomersComponent } from './components/allcustomers/allcustomers.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AllquotesComponent } from './components/allquotes/allquotes.component';
import { ProformaInvoiceListComponent } from './components/proforma-invoice-list/proforma-invoice-list.component';
import { ProformaInvoiceDetailComponent } from './components/proforma-invoice-detail/proforma-invoice-detail.component';
import { RoleGuard } from './guards/role.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'customer-homepage', component: HomepageComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }
  },
  {
    path: 'itemspage', component: ItemspageComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }
  },
  // {
  //   path: 'navbar', component: NavbarComponent,
  //   canActivate: [RoleGuard],
  //   data: { roles: ['Customer', 'ROLE_Customer'] }

  // },
  {
    path: 'customers', component: CustomersComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }

  },
  {
    path: 'allcustomers', component: AllcustomersComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }

  },
  { path: 'welcomepage', component: WelcomepageComponent },
  {
    path: 'admin-homepage',
    component: AdminHomepageComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Admin', 'ROLE_ADMIN'] }
  },
  {
    path: 'allquotes', component: AllquotesComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }
  },
  {
    path: 'proformas', component: ProformaInvoiceListComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }
  },
  {
    path: 'proforma/:invoiceNo', component: ProformaInvoiceDetailComponent,
    canActivate: [RoleGuard],
    data: { roles: ['Customer', 'ROLE_Customer'] }
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/welcomepage', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
