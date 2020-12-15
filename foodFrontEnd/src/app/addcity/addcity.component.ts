import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../cityc/City';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

  constructor( private router:Router,private citys:CityService ,private route:ActivatedRoute) { }
citform=new FormGroup({
  nameAr:new FormControl('',[Validators.required]),
  nameEn:new FormControl('',[Validators.required])
});
city=new City();
  ngOnInit(): void {
  }
addcity(){
  this.city.nameAr=this.citform.value.nameAr;
  this.city.nameEn=this.citform.value.nameEn;
  if(this.citform.valid){
this.citys.addCity(this.city).subscribe(res=>{
  console.log(res);
  this.router.navigateByUrl('');
});

  }else{
    this.citform.markAsTouched();
    alert('complete the form');
  }
  
   
  
}
}
