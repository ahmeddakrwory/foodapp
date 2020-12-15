import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-area',
  templateUrl: './city-area.component.html',
  styleUrls: ['./city-area.component.css']
})
export class CityAreaComponent implements OnInit {
cityies;
Areas;;
id;
  constructor(private cityService:CityService ,private activateRoute:ActivatedRoute  ) { }
  
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.getAreaofCity();

  }
getAreaofCity(){
  this.cityService.getCitybyId(this.id).subscribe(res=>{
  this.cityies=res;
    console.log(res);
  });
}
}
