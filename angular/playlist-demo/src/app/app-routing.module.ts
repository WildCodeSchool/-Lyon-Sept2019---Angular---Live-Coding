import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';

const routes: Routes = [
  {
    path: "",
    component: PlaylistPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
