import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../cityc/City';

@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.css']
})
export class EditcityComponent implements OnInit {
id;
city=new City();
  constructor(private cityservice:CityService ,private routactive:ActivatedRoute ,private router:Router ) { }
updateform=new FormGroup({
  nameAr:new FormControl('nameAr',[Validators.required]),
  nameEn:new FormControl('nameEn',[Validators.required])
  
});

  ngOnInit(): void {
    
      this.id=this.routactive.snapshot.paramMap.get('id');
    
    
  }
updte(){
  this.city.nameAr=this.updateform.value.nameAr;
  this.city.nameEn=this.updateform.value.nameEn;
 this.cityservice.updatecity(this.id,this.city).subscribe(res=>{
console.log(res);
 });
this.router.navigateByUrl('');
 
}
}
