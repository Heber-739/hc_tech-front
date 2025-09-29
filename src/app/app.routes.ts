import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"",pathMatch:"full", redirectTo:"panel"},
  {
  path:"panel",
  loadComponent: () => import("./screens/home-panel/home-panel"),
  children:[
    {path: "", pathMatch: "full", redirectTo: "empleados"},
    {path:"empleados", loadComponent:()=> import("./views/empleados/empleados")}
  ]
}
];
