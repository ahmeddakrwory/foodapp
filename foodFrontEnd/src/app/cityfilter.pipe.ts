import { Pipe, PipeTransform } from '@angular/core';
import { City } from './cityc/City';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform(citis:City[],searchvalue:String): City[] {
    if(!citis || !searchvalue){
      return citis
    }
    return citis.filter(cityf=>
      cityf.nameAr.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));

    
  }

}
