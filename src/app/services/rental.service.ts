import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44335/api/"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl + "rentals/getrentalsdetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
