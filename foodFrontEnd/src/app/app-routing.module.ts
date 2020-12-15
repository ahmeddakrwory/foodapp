import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddcityComponent } from './addcity/addcity.component';
import { AddneAreaComponent } from './addne-area/addne-area.component';
import { CityAreaComponent } from './city-area/city-area.component';
import { CitycComponent } from './cityc/cityc.component';
import { EditcityComponent } from './editcity/editcity.component';

const routes: Routes = [
  {
    path:'',
    component:CitycComponent,
 
    }
    ,
      {
        path:'addcity',
        component:AddcityComponent
      },
      {
        path:'updatecit/:id',
        component:EditcityComponent
      },
      {
        path:'city/:id',
        component:CityAreaComponent
      },{
        path:'addar/:id',
        component:AddAreaComponent
      },{
        path:"addar",
        component:AddneAreaComponent
      }
    

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
