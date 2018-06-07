import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterModule,Routes} from '@angular/router';

export const routes : Routes = [
    {path:"", component : HomeComponent }
]


@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
