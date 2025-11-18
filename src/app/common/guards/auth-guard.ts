import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router);

  const user = localStorage.getItem("user-data") || null;
  return !!user || router.navigate(['/auth']);
};
