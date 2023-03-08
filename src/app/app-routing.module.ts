import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch:  'full',
    redirectTo: "/home",
    title: "Nerd Não Reclama!"
  },
  {
    path: "home",
    component: HomeComponent,
    title: "Nerd Não Reclama!"
  },
  {path: "contato",
  component: ContatoComponent,
  title: "Nerd Não Reclama!"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
