import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'formulario',
        loadChildren: ()=> import('./ejemplo1.component')
    }
    
]as Routes
