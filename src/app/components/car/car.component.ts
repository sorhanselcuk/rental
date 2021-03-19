import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDetail[]=[];
  dataLoaded=false;

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrandId(brandId:number){
    this.carDetailService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carDetailService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}
