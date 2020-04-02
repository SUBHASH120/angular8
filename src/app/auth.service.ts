import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }
  login(log) {
    return this.http.post(`${this.URL}login`, log);
  }
  register(reg) {
    return this.http.post(`${this.URL}register`, reg);
  }
  listing() {
    return this.http.get(`${this.URL}listing`);
  }
  update(upd, id) {
    return this.http.put(`${this.URL}update/${id}`, upd);
  }
  delete(id: any) {
    return this.http.delete(`${this.URL}delete/${id}`);

  }
  listingbyid(id: any) {
    return this.http.get(`${this.URL}listingbyid/${id}`);
  }

  // customers

  customeradd(cus) {
    return this.http.post(`${this.URL}customeradd`, cus);
  }
  customerlist() {
    return this.http.get(`${this.URL}customerlist`);
  }
  customerbyid(id: any) {
    return this.http.get(`${this.URL}customerbyid/${id}`);
  }
  customerupdate(cus, id) {
    return this.http.put(`${this.URL}customerupdate/${id}`, cus);
  }
  customerdelete(id: any) {
    return this.http.delete(`${this.URL}customerdelete/${id}`);

  }

  // employee
  employeeadd(emp) {
    return this.http.post(`${this.URL}employeeadd`, emp);
  }
  employeelist() {
    return this.http.get(`${this.URL}employeelist`);
  }
  employeebyid(id: any) {
    return this.http.get(`${this.URL}employeebyid/${id}`);
  }
  employeeupdate(emp, id) {
    return this.http.put(`${this.URL}employeeupdate/${id}`, emp);
  }
  employeedelete(id: any) {
    return this.http.delete(`${this.URL}employeedelete/${id}`);

  }

   // category
   categoryadd(cat) {
    return this.http.post(`${this.URL}categoryadd`, cat);
  }
  categorylist() {
    return this.http.get(`${this.URL}categorylist`);
  }
  categorybyid(id: any) {
    return this.http.get(`${this.URL}categorybyid/${id}`);
  }
  categoryupdate(cat, id) {
    return this.http.put(`${this.URL}categoryupdate/${id}`, cat);
  }
  categorydelete(id: any) {
    return this.http.delete(`${this.URL}categorydelete/${id}`);

  }

   // shipper
  shipperadd(shi) {
    return this.http.post(`${this.URL}shipperadd`, shi);
  }
  shipperlist() {
    return this.http.get(`${this.URL}shipperlist`);
  }
  shipperbyid(id: any) {
    return this.http.get(`${this.URL}shipperbyid/${id}`);
  }
  shipperupdate(shi, id) {
    return this.http.put(`${this.URL}shipperupdate/${id}`, shi);
  }
  shipperdelete(id: any) {
    return this.http.delete(`${this.URL}shipperdelete/${id}`);

  }

   // supplier
   supplieradd(sup) {
    return this.http.post(`${this.URL}supplieradd`, sup);
  }
  supplierlist() {
    return this.http.get(`${this.URL}supplierlist`);
  }
  supplierbyid(id: any) {
    return this.http.get(`${this.URL}supplierbyid/${id}`);
  }
  supplierupdate(sup, id) {
    return this.http.put(`${this.URL}supplierupdate/${id}`, sup);
  }
  supplierdelete(id: any) {
    return this.http.delete(`${this.URL}supplierdelete/${id}`);

  }

   // product
   productadd(pro) {
    return this.http.post(`${this.URL}productadd`, pro);
  }
  productlist() {
    return this.http.get(`${this.URL}productlist`);
  }
  productbyid(id: any) {
    return this.http.get(`${this.URL}productbyid/${id}`);
  }
  productupdate(pro, id) {
    return this.http.put(`${this.URL}productupdate/${id}`, pro);
  }
  productdelete(id: any) {
    return this.http.delete(`${this.URL}productdelete/${id}`);

  }

     // order
     orderadd(ord) {
      return this.http.post(`${this.URL}orderadd`, ord);
    }
    orderlist() {
      return this.http.get(`${this.URL}productlist`);
    }
    orderbyid(id: any) {
      return this.http.get(`${this.URL}orderlist/${id}`);
    }
    orderupdate(ord, id) {
      return this.http.put(`${this.URL}orderupdate/${id}`, ord);
    }
    orderdelete(id: any) {
      return this.http.delete(`${this.URL}orderdelete/${id}`);
    }

     // orderdetail
     orderdetailadd(ord) {
      return this.http.post(`${this.URL}orderdetailadd`, ord);
    }
    orderdetaillist() {
      return this.http.get(`${this.URL}orderdetaillist`);
    }
    orderdetailbyid(id: any) {
      return this.http.get(`${this.URL}orderdetailbyid/${id}`);
    }
    orderdetailupdate(ord, id) {
      return this.http.put(`${this.URL}orderdetailupdate/${id}`, ord);
    }
    orderdetaildelete(id: any) {
      return this.http.delete(`${this.URL}orderdetaildelete/${id}`);
    }



}
