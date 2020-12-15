import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './cityc/City';
@Injectable({
  providedIn: 'root'
})

export class CityService {
  getCitybyidurl="http://localhost:8088/api/city/cid"
  baseurl='http://localhost:8088/api/city/deletecity';
  addurl="http://localhost:8088/api/city/addcitys";
  updateur="http://localhost:8088/api/city/updatecity"
  constructor(private http:HttpClient) { }
  allcities(){
  return  this.http.get("http://localhost:8088/api/city/cities");
  }
  deletecity( id) :Observable<any>
  {
   // let param=new HttpParams().set('id',id.toString());
    //return this.http.post("http://localhost:8088/deletecity",{params:param});
  return this.http.delete(this.baseurl+'/'+id);
  }
  addCity(city:City){
   return this.http.post(this.addurl,city);
  }
  updatecity(id,city){
return this.http.post(this.updatecity+"/"+id,city);
  }
  getCitybyId(id){
return this.http.get(this.getCitybyidurl+'/'+id)
  }
}
