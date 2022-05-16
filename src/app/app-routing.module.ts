import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';

const routes: Routes = [
{path:'', component:BodyComponent},
{ path:'createtask', component: TaskcreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
