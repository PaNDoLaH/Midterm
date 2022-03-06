import { Injectable } from '@angular/core';
import { flightData } from './mockflight';
import { flight } from '../flight/flight';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  flights: flight[] = [];


  constructor() { }
  getflight(){
    return flightData.mfData;
  }
}
