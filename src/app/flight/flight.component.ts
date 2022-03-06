import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { flight } from './flight';
import { PageserviceService } from '../share/pageservice.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flightData : flight[] =[];
  flightform : FormGroup;
  startDate = new Date(Date.now())

  constructor(private fb:FormBuilder, private page:PageserviceService ) {

    this.flightform = this.fb.group({
     fullname: ['', Validators.required],
     form: [null, Validators.required],
     to: [null, Validators.required],
     type: ['', Validators.required],
     departure: ['', Validators.required],
     arrival: ['', Validators.required],
     adults: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
     children: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
     infants: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]]


   });
 }


  ngOnInit(): void {
    console.log(this.page.getflight())
    this.flightData = this.page.getflight()
  }
  OnSubmit(value : any): void {
    console.log(value)
    this.flightData.push(value)
    alert("You Submit Success!!!.");

  }

}
