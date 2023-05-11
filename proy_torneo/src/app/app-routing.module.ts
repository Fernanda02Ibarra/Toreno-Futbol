import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploraComponent } from './explora/explora.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrerComponent } from './registrer/registrer.component';


const routes: Routes = [  
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrar', component:RegistrerComponent},
  {path: 'explora', component:ExploraComponent},
  {path: 'contacto', component:ContactoComponent},
  {path:'', redirectTo:'/inicio',pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
