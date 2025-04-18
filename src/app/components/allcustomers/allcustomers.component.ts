// import { Component, OnInit } from '@angular/core';

// interface Customer {
//   id: number;
//   customerName: string;
//   companyName?: string;
//   customerType: 'Business' | 'Individual';
//   email: string;
//   mobileNumber: string;
// }
// @Component({
//   selector: 'app-allcustomers',
//   standalone: false,
//   templateUrl: './allcustomers.component.html',
//   styleUrl: './allcustomers.component.css'
// })
// export class AllcustomersComponent implements OnInit {

//   customers: Customer[] = [
//     { id: 1, customerName: 'John Doe', customerType: 'Individual', email: 'john@example.com', mobileNumber: '+1 (555) 987-6543' },
//     { id: 2, customerName: 'ABC Corp', companyName: 'ABC Corporation', customerType: 'Business', email: 'contact@abccorp.com', mobileNumber: '+1 (555) 333-4444' },
//     { id: 3, customerName: 'Jane Smith', customerType: 'Individual', email: 'jane@example.com', mobileNumber: '+1 (555) 555-5555' },
//     { id: 4, customerName: 'XYZ Inc', companyName: 'XYZ Incorporated', customerType: 'Business', email: 'xyz@xyz.com', mobileNumber: '+1 (555) 666-7777' },
//     { id: 5, customerName: 'Alice Brown', customerType: 'Individual', email: 'alice@example.com', mobileNumber: '+1 (555) 888-9999' },
//     { id: 6, customerName: 'Tech Ltd', companyName: 'Tech Limited', customerType: 'Business', email: 'tech@tech.com', mobileNumber: '+1 (555) 111-2222' },
//     { id: 7, customerName: 'Bob Wilson', customerType: 'Individual', email: 'bob@example.com', mobileNumber: '+1 (555) 333-4444' },
//     { id: 8, customerName: 'Global Co', companyName: 'Global Company', customerType: 'Business', email: 'global@global.com', mobileNumber: '+1 (555) 555-6666' }
//   ];

//   filteredCustomers: Customer[] = [...this.customers];
//   paginatedCustomers: Customer[] = [];
//   searchTerm: string = '';
//   sortDirection: 'asc' | 'desc' = 'asc';
//   currentPage: number = 1;
//   pageSize: number = 7; // 7 customers per page
//   totalPages: number = 1;

//   ngOnInit() {
//     this.updatePagination();
//   }

//   filterCustomers() {
//     this.filteredCustomers = this.customers.filter(customer =>
//       customer.customerName.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//     this.currentPage = 1; // Reset to first page on search
//     this.updatePagination();
//   }

//   sort(column: keyof Customer) {
//     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
//     this.filteredCustomers.sort((a, b) => {
//       const valueA = a[column] ?? '';
//       const valueB = b[column] ?? '';
//       if (typeof valueA === 'number' && typeof valueB === 'number') {
//         return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
//       }
//       return this.sortDirection === 'asc'
//         ? String(valueA).localeCompare(String(valueB))
//         : String(valueB).localeCompare(String(valueA));
//     });
//     this.updatePagination();
//   }

//   updatePagination() {
//     this.totalPages = Math.ceil(this.filteredCustomers.length / this.pageSize);
//     const startIndex = (this.currentPage - 1) * this.pageSize;
//     const endIndex = startIndex + this.pageSize;
//     this.paginatedCustomers = this.filteredCustomers.slice(startIndex, endIndex);
//   }

//   previousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.updatePagination();
//     }
//   }

//   nextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.updatePagination();
//     }
//   }

//   viewMore(customer: Customer) { console.log('View More:', customer); }
//   updateCustomer(customer: Customer) { console.log('Update:', customer); }
//   deleteCustomer(customer: Customer) {
//     this.customers = this.customers.filter(c => c.id !== customer.id);
//     this.filterCustomers();
//     console.log('Deleted:', customer);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { CustomerRegistration } from '../../Models/CustomerRegistration';


@Component({
  selector: 'app-allcustomers',
  standalone: false,
  templateUrl: './allcustomers.component.html',
  styleUrls: ['./allcustomers.component.css']
})
export class AllcustomersComponent implements OnInit {

  customers: CustomerRegistration[] = [];
  filteredCustomers: CustomerRegistration[] = [];
  paginatedCustomers: CustomerRegistration[] = [];
  searchTerm: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  pageSize: number = 7;
  totalPages: number = 1;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  // fetchCustomers(): void {
  //   this.customerService.getAllRegisteredCustomers().subscribe({
  //     next: (data) => {
  //       this.customers = data;
  //       this.filteredCustomers = [...this.customers];
  //       this.updatePagination();
  //     },
  //     error: (err) => {
  //       console.error('Error fetching customers:', err);
  //     }
  //   });
  // }



  fetchCustomers() {
    this.customerService.getAllRegisteredCustomers().subscribe((data: CustomerRegistration[]) => {
      // Dynamically create customerName by combining firstName and lastName
      this.customers = data.map(customer => ({
        ...customer,
        customerName: `${customer.firstName} ${customer.lastName}`,
      }));
      this.filteredCustomers = [...this.customers];
      this.updatePagination();
    });
  }

  filterCustomers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCustomers = this.customers.filter(c =>
      (c.firstName + ' ' + c.lastName).toLowerCase().includes(term) ||
      c.customerEmail?.toLowerCase().includes(term) ||
      c.mobileNumber?.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  sort(column: keyof CustomerRegistration): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.filteredCustomers.sort((a, b) => {
      const valueA = a[column] ?? '';
      const valueB = b[column] ?? '';
      return this.sortDirection === 'asc'
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredCustomers.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCustomers = this.filteredCustomers.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  viewMore(customer: CustomerRegistration): void {
    console.log('View More:', customer);
    // Optional: Open modal or details page
  }

  updateCustomer(customer: CustomerRegistration): void {
    console.log('Update:', customer);
    // Optional: Open form or modal for update
  }


  deleteCustomer(customer: CustomerRegistration): void {
    if (confirm(`Are you sure you want to delete ${customer.customerName}?`)) {
      this.customerService.deleteCustomer(customer.customerId).subscribe(() => {
        // Remove the deleted customer from the array
        this.customers = this.customers.filter(c => c.customerId !== customer.customerId);

        // Also filter the customers to update the displayed list
        this.filterCustomers();

        // Ensure pagination is updated after deletion
        this.updatePagination();

        // Optional: Check if pagination needs adjustment if current page has no customers left
        if (this.paginatedCustomers.length === 0 && this.currentPage > 1) {
          this.currentPage--; // Move to previous page if the current page is empty
          this.updatePagination();
        }
      });
    }
  }

}

