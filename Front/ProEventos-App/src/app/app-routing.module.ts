import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './Components/eventos/eventos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';

const routes: Routes = [
  {path: 'eventos', component: EventosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
