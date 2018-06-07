import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {RouterModule,Routes} from '@angular/router';

export const routes : Routes = [
    {path:"", component : AdminComponent }
]


@NgModule({
  declarations: [AdminComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
