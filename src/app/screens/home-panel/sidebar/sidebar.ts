import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { company, user } from '../../../../../public/datos/datos';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, AvatarModule, DividerModule, ButtonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private router = inject(Router);

  protected expanded = signal(true);
  protected readonly company: WritableSignal<any>;
  protected route = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e)=>e.url.split("/")),
      map((e)=>e[e.length-1]),
    ),
    { initialValue: "" }
  );

  constructor() {
    const { name: userName } = user;
    const { name: companyName, img } = company;
    this.company = signal({ userName, companyName, img: 'datos/hc_tech.png' });
  }
  toggleMenu = () => this.expanded.update((value) => !value);

  getSeverity(route: string) {
    return this.route() === route ? 'primary' : 'contrast';
  }
}
