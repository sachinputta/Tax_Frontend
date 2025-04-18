import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  companyName: string = '';
  companyEmail: string = '';
  customerId: string = '';

  constructor(private customerService: CustomerService,private auth: AuthService) { }

  ngOnInit(): void {
    this.customerId = this.auth.getCustomerId()!;

    this.customerService.getCustomerProfile(this.customerId).subscribe(
      (res) => {
        this.companyName = res.companyName;
        this.companyEmail = res.customerEmail;
      },
      (err) => {
        console.error('Failed to load profile:', err);
      }
    );
  }

  getCompanySuffixName(name: string): string {
    if (!name) return 'Accounting';
    const firstWord = name.trim().split(' ')[0];
    return `${firstWord} ACCOUNTING`;
  }
  

}
