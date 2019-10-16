import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentCardComponent } from './student-card/student-card.component';

const routes: Routes = [
  {
    path: "",
    component: StudentsListComponent
  },
  {
    path: "card/:NOM_PRENOM",
    component: StudentCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
