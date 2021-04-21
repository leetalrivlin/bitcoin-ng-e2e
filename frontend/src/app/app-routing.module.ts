import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService}},
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService }},
  { path: 'contact', component: ContactAppComponent},
  { path: 'statistic', component: StatisticComponent },
  { path: 'edit', component: ContactEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
