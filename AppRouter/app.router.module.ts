import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

export const routes : Routes = [

    {path:"", redirectTo : 'home' , pathMatch :"full" },
    {path:"home", loadChildren : './components/home/home.module#HomeModule'},
    {path:"about", loadChildren : './components/about/about.module#AboutModule'},
    {path:"admin", loadChildren : './components/admin/admin.module#AdminModule'},
    {path:"media", loadChildren : './components/media/media.module#MediaModule'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
