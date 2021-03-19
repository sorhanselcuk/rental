import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    carName:string;
    brandName:string;
    colorName:string;
    description:string;
    dailyPrice:number;
    carImages:CarImage[];
}
       