import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnDestroy, signal, WritableSignal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { company, user } from '../../../../../public/datos/datos';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, Subscription, tap } from 'rxjs';
import { UserData } from '../../../interfaces/user';
import storeService from '../../../common/services/store-service';
import { Companies } from '../../../interfaces/company';
import { AuthService } from '../../../common/services/auth-service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, AvatarModule, DividerModule, ButtonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnDestroy{

  private subs: Subscription = new Subscription();
  protected expanded = signal(true);
    protected user = signal<UserData>(user);
    protected company = signal<Companies>(company);

    private router = inject(Router);
  private authService = inject(AuthService);

  protected route = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e)=>e.urlAfterRedirects.split("/")),
      map((e)=>e[e.length-1])),
    { initialValue: "" }
  );

  constructor( ) {
    this.getData()
  }


  async getData(){
    const user = await storeService.getWhenExist<UserData>("user-data")
    this.user.update(()=> user)
    this.subs.add(storeService.getObservable<Companies>("company-default-selected")
    .pipe(filter((res)=> !!res)).subscribe({
      next:(company)=> {
        this.company.set(company);
      }
    }))
  }

  toggleMenu = () => this.expanded.update((value) => !value);

  getSeverity(route: string) {
    return this.route() === route ? 'primary' : 'contrast';
  }

  async exit(){
    const {data, error} = await this.authService.logout();
    if(!error) this.router.navigateByUrl('/auth');
  }


    ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}
