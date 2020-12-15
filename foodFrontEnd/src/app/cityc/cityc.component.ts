import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CityService } from '../city.service';
import {  PipeTransform } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cityc',
  templateUrl: './cityc.component.html',
  styleUrls: ['./cityc.component.css']
})
export class CitycComponent implements OnInit {
  
  searchvalue:String;
  city:Observable<any> ;
  constructor(private cityservices:CityService,private routrr:Router) { }

  ngOnInit(): void {
    this.city=this.cityservices.allcities();
    
  }
citieslog(){
 // this.cityservices.allcities().subscribe((res:any)=>{
    
   // this.city=res;
    //console.log(this.city);
  //});
 
 
}
searchOnTable(){
  console.log('aaaaaaaa');
}
deletecity(id:number){
  
  this.cityservices.deletecity(id).subscribe(res=>{
    console.log(res);
    this.cityservices.allcities().subscribe(res=>{console.log ('done')});
    this.routrr.navigateByUrl('');
  });
}
}
