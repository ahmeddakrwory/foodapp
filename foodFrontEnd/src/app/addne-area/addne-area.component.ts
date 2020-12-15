import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from '../area';
import { AreaServiceService } from '../area-service.service';
import { CityService } from '../city.service';

@Component({
  selector: 'app-addne-area',
  templateUrl: './addne-area.component.html',
  styleUrls: ['./addne-area.component.css']
})
export class AddneAreaComponent implements OnInit {

  constructor(private city:CityService,private  area:AreaServiceService ,private router:Router) { }
cities;
areclass=new Area();
areaform=new FormGroup({
  nameAr:new FormControl("",[Validators.required]),
  nameEn:new FormControl("",[Validators.required])
});

cid;
  ngOnInit(): void {
 this.cities=  this.city.allcities();
  
  
  }
Addera(){
  if(this.areaform.valid){
this.areclass.nameAr=this.areaform.value.nameAr, 
this.areclass.nameEn=this.areaform.value.nameEn, 
  this.area.addArea(this.cid,this.areclass).subscribe(res=>{
    console.log(res);
  });
  this.router.navigateByUrl("");
}
else{
  alert("please complite all data")
}
}
}
