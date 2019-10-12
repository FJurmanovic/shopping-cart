import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelfComponent } from './components/shelf/shelf.component';


const routes: Routes = [
  { path: '', component: ShelfComponent, data: { title: 'Shopping Cart' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
