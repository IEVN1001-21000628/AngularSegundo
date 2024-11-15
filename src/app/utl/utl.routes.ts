import { Route } from "@angular/router";

export default[
    {
        path: 'listaalumnos',
        loadComponent: () => import('./alumnos/alumnos.component')
    },
    {
        path: 'agregar',
        loadComponent: () => import('./agregar/agregar.component')
    },
    {
        path: 'editar/:matricula',
        loadComponent: () => import('./editar/editar.component')
    },
    {
        path: 'eliminar/:matricula',
        loadComponent: () => import('./eliminar/eliminar.component')
    }
] as Route[];