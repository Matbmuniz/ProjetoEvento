import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './Components/eventos/eventos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { PerfilComponent } from './Components/user/perfil/perfil.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { EventosDetalheComponent } from './Components/eventos/eventos-detalhe/eventos-detalhe.component';
import { EventosListaComponent } from './Components/eventos/eventos-lista/eventos-lista.component';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegistrationComponent } from './Components/user/registration/registration.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegistrationComponent}
    ]
  },
  {path: 'user/perfil', component: PerfilComponent},
  { path: 'eventos', redirectTo: 'eventos/lista'},
  {
    path: 'eventos', component: EventosComponent,
    children: [
      {path: 'detalhe/:id', component: EventosDetalheComponent},
      {path: 'detalhe', component: EventosDetalheComponent},
      {path: 'lista', component: EventosListaComponent},
    ]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contatos', component: ContatosComponent},

  {path: 'palestrantes', component: PalestrantesComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
