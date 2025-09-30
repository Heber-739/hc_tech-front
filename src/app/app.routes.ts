import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"",pathMatch:"full", redirectTo:"panel"},
  {
  path:"panel",
  loadComponent: () => import("./screens/home-panel/home-panel"),
  children:[
    {path: "", pathMatch: "full", redirectTo: "empleados"},
    {path:"empleados", loadComponent:()=> import("./views/empleados/empleados")},
    {path:"turnos", loadComponent:()=> import("./views/turnos/turnos")},
    {path:"tramites", loadComponent:()=> import("./views/horarios/horarios")},
    {path:"horarios", loadComponent:()=> import("./views/calendario/calendario")},
    {path:"calendario", loadComponent:()=> import("./views/tramites/tramites")},
    {path:"reportes", loadComponent:()=> import("./views/reportes/reportes")}
  ]
},
{path: "**", redirectTo: "/"},
];
