import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {
addur="http://localhost:8088/api/Area/addar";
  constructor(private http:HttpClient) { }

addArea(cid,area:Area){
  return this.http.post(this.addur+'/'+cid,area);
}

}
