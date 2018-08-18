import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'contact/:page', component: ContactComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
