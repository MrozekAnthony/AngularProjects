import { Component, OnInit } from '@angular/core';
import { tAddress } from '../models/tibi/address';
import { TibiService } from './tibi.service';

//cors issue !!!!

@Component({
  selector: 'app-tibi',
  templateUrl: './tibi.component.html',
  styleUrls: ['./tibi.component.css']
})
export class TibiComponent implements OnInit {
  address : string = '';

  zone    : tAddress = {
    value: '',
    data : '',
  }

  constructor(private _tibiService : TibiService) { }

  searchAddress(): void {
    
    console.log(this.address);
    if(!this.address)
      return

    this._tibiService.get(this.address).subscribe({
      next : (d) => console.log(d),
      error : (error) => console.log(error)
    })
    //this.zone = {...await this._tibiService.get(this.address)}
    //console.log(this.zone);
  }

  ngOnInit(): void {
  }

}
