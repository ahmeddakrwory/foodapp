import { DecimalPipe } from '@angular/common';
import { Component,PipeTransform  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { __classPrivateFieldSet } from 'tslib';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]
}
)
export class AppComponent {
  title = 'books';
  active = 1;
 
  
  
   

name(name:String){
console.log(name);
}
}
