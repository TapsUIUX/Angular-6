import { NgModule } from '@angular/core';
import { MediaComponent } from './media.component';
import {RouterModule,Routes} from '@angular/router';

export const routes : Routes = [
    {path:"", component : MediaComponent }
]


@NgModule({
  declarations: [MediaComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  bootstrap: []
})
export class MediaModule { }
