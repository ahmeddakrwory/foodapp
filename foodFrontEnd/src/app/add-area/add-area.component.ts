import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '../area';
import { AreaServiceService } from '../area-service.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {
are=new Area();
id;
ur='/city'
  constructor(private areaaservice:AreaServiceService ,private router:Router,private activate :ActivatedRoute) { 
   this. id=this.activate.snapshot.paramMap.get('id');
   this.ur='/city'+'/'+this.id;
  }

  formgroup=new FormGroup({
  nameAr:new FormControl('',[Validators.required]),
  nameEn:new FormControl('',Validators.required)
});
  ngOnInit(): void {
  }
addarea()
{
  this.are.nameAr=this.formgroup.value.nameAr;
  this.are.nameEn=this.formgroup.value.nameEn;
  if(this.formgroup.valid){
    this.areaaservice.addArea(this.id,this.are).subscribe(res=>{
    
      console.log(res);
      this.router.navigateByUrl('/city'+'/'+this.id);

    });
  }else{
    this.formgroup.markAllAsTouched();
    alert("pleas complete form");
  }
  
 
}
}
