import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetail:CarDetail;
  currentImagePoint=0;
  imageCount:number;
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCar(params["carId"])
      })
  }

  getCar(carId:number){
    this.carDetailService.getCarById(carId).subscribe(response=>{
      this.carDetail=response.data;
      this.imageCount = this.carDetail.carImages.length -1;
    })
  }
  setNextImage(){
    if(this.currentImagePoint<this.imageCount){
      this.currentImagePoint++;
    }
    else{
      this.currentImagePoint = 0;
    }
  }
  setPreviousImage(){
    if(this.currentImagePoint>0){
      this.currentImagePoint--;
    }
    else{
      this.currentImagePoint=this.imageCount;
    }
  }
}
