import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path: 'restrito',component: RestritoComponent},
{path: '', redirectTo: '/inicio', pathMatch:'full'}
]
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }