import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44335/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcarsdetailsbybrandId?brandid=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + "cars/getcarsdetailsbycolorId?colorid=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarById(id:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarsdetailsbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
  
}
