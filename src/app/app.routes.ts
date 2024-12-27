import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StateComponent } from './pages/state/state.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

export const routes: Routes = [

{   path:'',component:HomeComponent },
{   path:'state',component:StateComponent },
{   path:'contact',component:ContactComponent },
{   path:'state/:id',component:SinglePageComponent },
{   path:'**',component:NotfoundComponent },





];
