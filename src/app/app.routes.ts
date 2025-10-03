import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"",pathMatch:"full", redirectTo:"panel"},
  {
  path:"panel",
  loadComponent: () => import("./screens/home-panel/home-panel"),
  children:[
    {path: "", pathMatch: "full", redirectTo: "employees"},
    {path:"employees", loadComponent:()=> import("./views/employee/employee")},
    {path:"shifts", loadComponent:()=> import("./views/shifts/shifts")},
    {path:"schedules", loadComponent:()=> import("./views/schedules/schedules")},
    {path:"calendar", loadComponent:()=> import("./views/calendar/calendar")},
    {path:"procedures", loadComponent:()=> import("./views/procedures/procedures")},
    {path:"reports", loadComponent:()=> import("./views/reports/reports")}
  ]
},
{path: "**", redirectTo: "/"},
];
