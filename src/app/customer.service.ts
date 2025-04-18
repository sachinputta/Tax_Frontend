// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {

//   private baseUrl = 'http://localhost:8082';

//   constructor(private http: HttpClient) { }

//   //login 

//   login(customerId: string, customerPassword: string): Observable<any> {
//     const payload = {
//       customerId,
//       customerPassword
//     };

//     return this.http.post<any>(`${this.baseUrl}/login`, payload);
//   }

//   storeToken(token: string): void {
//     localStorage.setItem('token', token);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   clearToken(): void {
//     localStorage.removeItem('token');
//   }


//   // register customer
//   registerCustomer(customerData: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/addCustomer`, customerData);
//   }


//   // get all items list
//   getItems(): Observable<any[]> {
//     const token = localStorage.getItem('token'); // get token from storage
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}` // add token to Authorization header
//     });

//     return this.http.get<any[]>(`${this.baseUrl}/getAllItems`, { headers });
//   }



//   // 🔹 Add a new item with Authorization token
//   addItem(item: any): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });

//     return this.http.post<any>(`${this.baseUrl}/createItem`, item, { headers });
//   }

//   // deleting the item
//   deleteItem(itemId: number): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });

//     return this.http.delete(`${this.baseUrl}/deleteItem/${itemId}`, {
//       headers,
//       responseType: 'text' // ✅ tells Angular to expect plain text, not JSON
//     });
//   }

// // 🔹 Update an existing item with Authorization token
// updateItem(item: any): Observable<any> {
//   const token = localStorage.getItem('token');
//   const headers = new HttpHeaders({
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
//   });

//   return this.http.put<any>(`${this.baseUrl}/updateItem/${item.id}`, item, { headers });
// }

// // login(customerId: string, customerPassword: string): Observable<any> {
// //   return this.http.post(`${this.baseUrl}/login`, { customerId, customerPassword });
// // }

// // storeToken(token: string): void {
// //   localStorage.setItem('token', token);
// // }

// // getToken(): string | null {
// //   return localStorage.getItem('token');
// // }

// // clearToken(): void {
// //   localStorage.removeItem('token');
// // }

// // getUserRole(): string {
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');
// //   return user?.role || '';
// // }

// registerCustomer(customer: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/register`, customer);
// }



// // // Optional helper
// // getAuthHeaders(): HttpHeaders {
// //   const token = this.getToken();
// //   return new HttpHeaders({
// //     'Authorization': `Bearer ${token}`,
// //     'Content-Type': 'application/json'
// //   });
// // }

// getItems(): Observable<any[]> {
//   return this.http.get<any[]>(`${this.baseUrl}/getAllItems`, {
//     headers: this.getAuthHeaders()
//   });
// }

// addItem(item: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/createItem`, item, {
//     headers: this.getAuthHeaders()
//   });
// }

// updateItem(item: any): Observable<any> {
//   return this.http.put(`${this.baseUrl}/updateItem/${item.id}`, item, {
//     headers: this.getAuthHeaders()
//   });
// }

// deleteItem(itemId: number): Observable<any> {
//   return this.http.delete(`${this.baseUrl}/deleteItem/${itemId}`, {
//     headers: this.getAuthHeaders(),
//     responseType: 'text'
//   });
// }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { CustomerRegistration } from './Models/CustomerRegistration';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private baseUrl = 'http://localhost:8082';
  private baseUrl = 'https://taxapp1-9e3fb338382d.herokuapp.com';


  constructor(private http: HttpClient, private auth: AuthService) { }

  registerCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addCustomer`, customer);
  }
  

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllItems`, {
      headers: this.auth.getAuthHeaders()
    });
  }

  addItem(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createItem`, item, {
      headers: this.auth.getAuthHeaders()
    });
  }

  updateItem(item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateItem/${item.id}`, item, {
      headers: this.auth.getAuthHeaders()
    });
  }

  deleteItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteItem/${itemId}`, {
      headers: this.auth.getAuthHeaders(),
      responseType: 'text'
    });
  }

  changePassword(payload: any) {
    return this.http.post<any>(`${this.baseUrl}/change-password`, payload, {
      responseType: 'text' as 'json' // This fixes the JSON parse error
    });
  }


  getCustomerProfile(customerId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/get-profile-details`, { customerId }, {
      headers: this.auth.getAuthHeaders(),
      responseType: 'json'
    });
  }

  // UPDATE Profile
  updateCustomerProfile(customerId: string, customerData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-profile/${customerId}`, customerData, {
      headers: this.auth.getAuthHeaders(),
      responseType: 'json'
    });
  }



  // all register customers
  getAllRegisteredCustomers(): Observable<CustomerRegistration[]> {
    return this.http.get<CustomerRegistration[]>(`${this.baseUrl}/get-All-Register-customers`);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteRegisterCustomer/${id}`);
  }

  // REGISTER Customer
newCustomerRegister(customer: CustomerRegistration): Observable<CustomerRegistration> {
  return this.http.post<CustomerRegistration>(`${this.baseUrl}/customer-register`, customer, {
    headers: this.auth.getAuthHeaders(),
    responseType: 'json'
  });
}

  
}
