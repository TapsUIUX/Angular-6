import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import {RouterModule,Routes} from '@angular/router';

export const routes : Routes = [
    {path:"", component : AboutComponent }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: []
})
export class AboutModule { }
