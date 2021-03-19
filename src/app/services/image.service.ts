import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl="https://localhost:44335/api/";
  
  constructor(private httpClient:HttpClient) { }

  
}
