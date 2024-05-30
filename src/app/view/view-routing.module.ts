import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { MawcMintComponent } from './mawc-mint/mawc-mint.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'mawc-mint',
    component: MawcMintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
